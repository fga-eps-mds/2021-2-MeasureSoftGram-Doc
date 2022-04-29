/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  leanSidebar: ['lean/intro', 'lean/about_product', 'lean/personas'],
  docsSidebar: ['artifact/how_to_use', 'artifact/sad', 'artifact/low_prototype', 'artifact/high_prototype'],
  planningSidebar: ['planning/charter', 'planning/wbs', 'planning/time', 'planning/cost', 'planning/knowledge_board', 'planning/communication', 'planning/risk', 'planning/quality_attributes'],
  contributeSidebar: ['contribute/how_to_contribute', 'contribute/github_standards', 'contribute/code_of_conduct'],
  scrumSidebar: {
    "Sprint 1": ['scrum/sprint_1/revisao', 'scrum/sprint_1/retrospectiva'],
    "Sprint 2": ['scrum/sprint_2/planejamento', 'scrum/sprint_2/revisao', 'scrum/sprint_2/retrospectiva'],
    "Sprint 3": ['scrum/sprint_3/planejamento', 'scrum/sprint_3/revisao', 'scrum/sprint_3/retrospectiva'],
    "Sprint 4": ['scrum/sprint_4/planejamento', 'scrum/sprint_4/revisao', 'scrum/sprint_4/retrospectiva'],
    "Sprint 5": ['scrum/sprint_5/planejamento', 'scrum/sprint_5/revisao', 'scrum/sprint_5/retrospectiva'],
    "Sprint 6": ['scrum/sprint_6/planejamento']
  }
};

module.exports = sidebars;
