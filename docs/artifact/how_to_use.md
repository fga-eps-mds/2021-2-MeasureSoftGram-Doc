---
id: how_to_use
title: Como executar
---

| Versão | Data       | Modificação                    | Motivo | Autor(es) |
| ------ | ---------- | ------------------------------ | ------ | ----- |
| 1.0    | 22/03/2022 | Criação do documento | - | Igor Paiva e Rhuan Queiroz |
| 2.0    | 25/04/2022 | Adição do script de remove, arquivo JSON pré config | - | Igor Paiva, Renan Cristyan, Rhuan Queiroz, Thiago Lopes |

## Como executar

Crie uma pasta no sistema para o MeasureSoftGram, pois para a execução será necessário fazer o download de alguns scripts.

Baixe os scripts de `start`, `stop`, `remove` e o template de arquivo JSON para criação de pré configuração:

```
curl https://raw.githubusercontent.com/fga-eps-mds/2021-2-MeasureSoftGram-Doc/main/installation/start.sh -o start.sh && curl https://raw.githubusercontent.com/fga-eps-mds/2021-2-MeasureSoftGram-Doc/main/installation/stop.sh -o stop.sh && curl https://raw.githubusercontent.com/fga-eps-mds/2021-2-MeasureSoftGram-Doc/main/installation/remove.sh -o remove.sh && curl https://raw.githubusercontent.com/fga-eps-mds/2021-2-MeasureSoftGram-Doc/main/installation/pre_config.json -o pre_config.json
```

## Scripts

### Start

O script de start recebe 3 parâmetros opcionais:

1. Core tag version (default latest)
2. Service tag version (default latest)
3. Service port (default 5000)

Exemplo:

```
sh start.sh v1.0.4 v1.0.1 5000
```

### Stop

O script de stop não recebe nenhum parâmetro

Exemplo:

```
sh stop.sh
```

### Remove

O script de remove não recebe nenhum parâmetro, ele irá remover todas imagens baixadas pelo MeasureSoftGram.

### CLI

A CLI está disponível no [PyPi](https://pypi.org/project/measuresoftgram/). Para executar a CLI é necessário instalar:

```
pip install measuresoftgram
```

Para executar o programa:

```
measuresoftgram
```

E com isso uma menu de ajuda será exibido.

#### Criar pré configuração

Para criar uma pré configuração é necessário utilizar um arquivo JSON no formato MeasureSoftGram. Utilize o template abaixo.

```json
{
    "pre_config_name": "Test-2022",
    "characteristics": [
        {
            "name": "reliability",
            "weight": 50.0,
            "subcharacteristics": [
                {
                    "name": "testing_status",
                    "weight": 100.0,
                    "measures": [
                        {
                            "name": "passed_tests",
                            "weight": 33.33
                        },
                        {
                            "name": "test_builds",
                            "weight": 33.33
                        },
                        {
                            "name": "test_coverage",
                            "weight": 33.33
                        }
                    ]
                }
            ]
        },
        {
            "name": "maintainability",
            "weight": 50.0,
            "subcharacteristics": [
                {
                    "name": "modifiability",
                    "weight": 100.0,
                    "measures": [
                        {
                            "name": "non_complex_file_density",
                            "weight": 50.0
                        },
                        {
                            "name": "commented_file_density",
                            "weight": 30.0
                        },
                        {
                            "name": "duplication_absense",
                            "weight": 20.0
                        }
                    ]
                }
            ]
        }
    ]
}
```

## Outras informações

Os nossos serviços estão disponíveis no [Docker Hub](https://hub.docker.com):

- [Core](https://hub.docker.com/repository/docker/measuresoftgram/core)
- [Service](https://hub.docker.com/repository/docker/measuresoftgram/service)
