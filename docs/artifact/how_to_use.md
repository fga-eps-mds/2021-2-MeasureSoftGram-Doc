---
id: how_to_use
title: Como executar
---

| Versão | Data       | Modificação                    | Motivo | Autor(es) |
| ------ | ---------- | ------------------------------ | ------ | ----- |
| 1.0    | 22/03/2022 | Criação do documento | - | Igor Paiva e Rhuan Queiroz |

## Como executar

Crie uma pasta no sistema para o MeasureSoftGram, pois para a execução será necessário fazer o download de alguns scripts.

Baixe os scripts de `start` e `stop`:

```
curl https://raw.githubusercontent.com/fga-eps-mds/2021-2-MeasureSoftGram-Doc/main/installation/start.sh -o start.sh && curl https://raw.githubusercontent.com/fga-eps-mds/2021-2-MeasureSoftGram-Doc/main/installation/stop.sh -o stop.sh
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

## Outras informações

Os nossos serviços estão disponíveis no [Docker Hub](https://hub.docker.com):

- [Core](https://hub.docker.com/repository/docker/measuresoftgram/core)
- [Service](https://hub.docker.com/repository/docker/measuresoftgram/service)
