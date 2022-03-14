const { program } = require("commander");
const inquirer = require("inquirer");

function genRandomID() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

function getRandomFloatTwoDecimal() {
  return Math.round(Math.random() * 100) / 100;
}

function genMockedPreConfig() {
  return {
    ID: genRandomID(),
    Name: "PreConfig" + Math.floor(Math.random() * 100),
    createdAt: new Date().toUTCString(),
    metricFile:
      Math.random() > 0.5
        ? `mockCloud${Math.floor(Math.random() * 100)}.json`
        : "-",
  };
}

function getDetailPreConfig() {
  return {
    characteristics: {
      Maintanibility: {
        weight: 0.25,
        subcharacteristics: {
          SCA1: {
            weight: 0.5,
            measures: [{ name: "em1", weight: getRandomFloatTwoDecimal() }],
          },
          SCA2: {
            weight: 0.5,
            measures: [{ name: "em2", weight: getRandomFloatTwoDecimal() }],
          },
        },
      },
      Performance: {
        weight: 0.25,
        subcharacteristics: {
          SCB1: {
            weight: 0.5,
            measures: [{ name: "em3", weight: getRandomFloatTwoDecimal() }],
          },
          SCB2: {
            weight: 0.5,
            measures: [{ name: "em4", weight: getRandomFloatTwoDecimal() }],
          },
        },
      },
      Reliability: {
        weight: 0.25,
        subcharacteristics: {
          SCC1: {
            weight: 0.5,
            measures: [{ name: "em5", weight: getRandomFloatTwoDecimal() }],
          },
          SCC2: {
            weight: 0.5,
            measures: [{ name: "em6", weight: getRandomFloatTwoDecimal() }],
          },
        },
      },
      Funnability: {
        weight: 0.25,
        subcharacteristics: {
          SCD1: {
            weight: 0.5,
            measures: [{ name: "em7", weight: getRandomFloatTwoDecimal() }],
          },
          SCD2: {
            weight: 0.5,
            measures: [{ name: "em8", weight: getRandomFloatTwoDecimal() }],
          },
        },
      },
    },
  };
}

function getMockedAnalysis() {
  return {
    planned: getRandomFloatTwoDecimal(),
    achieved: getRandomFloatTwoDecimal(),
  };
}

program
  .command("list")
  .description("List all model pre configurations")
  .action(list);

program
  .command("configure")
  .description("Create a model pre configuration")
  .action(configure);

program
  .command("import")
  .description(
    "Import metrics from a file and bind them to a pre configuration"
  )
  .argument("<file>", "The file to import metrics from")
  .argument("<preConfigID>", "The pre configuration to bind the metrics to")
  .action(importMetrics);

program
  .command("delete")
  .description("Delete a model pre configuration")
  .argument("<preConfigID>", "The pre configuration to delete")
  .action(deletePreConfig);

program
  .command("show")
  .description("Detail a model pre configuration")
  .argument("<preConfigID>", "The pre configuration to show")
  .action(showPreConfig);

program
  .command("analysis")
  .description("Analysis a pre configuration with the given metrics")
  .argument("<preConfigID>", "The pre configuration to analyze")
  .action(analysis);

function list() {
  const mockData = Array.from({ length: 10 }, genMockedPreConfig);
  console.table(mockData);
}

function configure() {
  readCharacteristics();
}

function readCharacteristics() {
  const chracteristicsArray = [
    "Maintanibility",
    "Performance",
    "Reliability",
    "Funnability",
  ];
  inquirer
    .prompt([
      {
        name: "characteristics",
        type: "checkbox",
        message: "Choose the characteristics:",
        choices: chracteristicsArray,
      },
    ])
    .then((answer) => {
      console.log(answer.characteristics);
      const weightQuestions = answer.characteristics.map((characteristic) => ({
        name: characteristic,
        type: "input",
        message: "Enter the weight of " + characteristic,
      }));

      inquirer.prompt(weightQuestions).then((subAnswer) => {
        console.log(subAnswer);
        readSubCharacteristics(answer.characteristics);
      });
    });
}

function readSubCharacteristics(characteristics) {
  const mapCharSubChar = {
    Maintanibility: ["SCA1", "SCA2"],
    Performance: ["SCB1", "SCB2"],
    Reliability: ["SCC1", "SCC2"],
    Funnability: ["SCD1", "SCD2"],
  };
  const subCharacteristicsArray = [];
  characteristics.forEach((characteristic) => {
    subCharacteristicsArray.push(...mapCharSubChar[characteristic]);
  });

  inquirer
    .prompt([
      {
        name: "subCharacteristics",
        type: "checkbox",
        message: "Choose the subcharacteristics:",
        choices: subCharacteristicsArray,
      },
    ])
    .then((answer) => {
      console.log(answer.subCharacteristics);
      const weightQuestions = answer.subCharacteristics.map(
        (subCharacteristic) => ({
          name: subCharacteristic,
          type: "input",
          message: "Enter the weight of " + subCharacteristic,
        })
      );

      inquirer.prompt(weightQuestions).then((subAnswer) => {
        console.log(subAnswer);
        readMeasures(answer.subCharacteristics);
      });
    });
}

function readMeasures(subCharacteristics) {
  const mapSubCharMeasures = {
    SCA1: ["em1", "m1"],
    SCA2: ["em2", "m2"],
    SCB1: ["em3", "m3"],
    SCB2: ["em4", "m4"],
    SCC1: ["em5", "m5"],
    SCC2: ["em6", "m6"],
    SCD1: ["em7", "m7"],
    SCD2: ["em8", "m8"],
  };
  const measuresArray = [];
  subCharacteristics.forEach((subCharacteristic) => {
    measuresArray.push(...mapSubCharMeasures[subCharacteristic]);
  });

  inquirer
    .prompt([
      {
        name: "measures",
        type: "checkbox",
        message: "Choose the measures:",
        choices: measuresArray,
      },
    ])
    .then((answer) => {
      console.log(answer.measures);
      const weightQuestions = answer.measures.map((measure) => ({
        name: measure,
        type: "input",
        message: "Enter the weight of " + measure,
      }));

      inquirer.prompt(weightQuestions).then((subAnswer) => {
        console.log(subAnswer);
      });
    });
}

function importMetrics() {
  console.log(
    "Metric file mockCloud.json is imported and binded to preConfigID: " +
      genRandomID()
  );
}

function deletePreConfig() {
  inquirer
    .prompt([
      {
        name: "confirm_deletion",
        type: "confirm",
        message: "Do you want to delete the pre configuration?",
      },
    ])
    .then((answer) => {
      if (answer.confirm_deletion)
        console.log("The pre configuration " + genRandomID() + " was deleted");
      else console.log("Bye bye");
    });
}

function showPreConfig() {
  const preConf = genMockedPreConfig();
  const detail = getDetailPreConfig();
  console.table(preConf);

  for (const key in detail.characteristics) {
    console.log(key + " (weight: " + detail.characteristics[key].weight + ")");
    console.table(detail.characteristics[key].subcharacteristics, ["weight"]);

    console.log("\n");
    for (const subkey in detail.characteristics[key].subcharacteristics) {
      console.log(
        "Subcharacteristic: " +
          subkey +
          " (weight: " +
          detail.characteristics[key].subcharacteristics[subkey].weight +
          ")"
      );
      console.table(
        detail.characteristics[key].subcharacteristics[subkey].measures,
        ["name", "weight"]
      );
      console.log("\n");
    }
    console.log("\n");
  }
}

function analysis() {
  if (Math.random() > 0.5) {
    console.log("Analysis of preConfigID: " + genRandomID());
    const analysis = getMockedAnalysis();
    console.table(analysis);

    console.log("Characteristics: ");
    console.log("Maintanibility: ");
    console.log("planned: " + getRandomFloatTwoDecimal());
    console.log("achieved: " + getRandomFloatTwoDecimal());
    console.log("\nPerformance: ");
    console.log("planned: " + getRandomFloatTwoDecimal());
    console.log("achieved: " + getRandomFloatTwoDecimal());
    console.log("\nReliability: ");
    console.log("planned: " + getRandomFloatTwoDecimal());
    console.log("achieved: " + getRandomFloatTwoDecimal());
    console.log("\nFunnability: ");
    console.log("planned: " + 0.97);
    console.log("achieved: " + -0.45);
  } else {
    console.log("Analysis of preConfigID: " + genRandomID() + " failed");
    console.log("You need to import metrics first");
  }
}

program.parse(process.argv);
