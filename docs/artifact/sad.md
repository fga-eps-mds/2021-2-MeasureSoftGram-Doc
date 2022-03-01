---
id: sad
title: Documento de Arquitetura de Software
---

| Versão | Data       | Modificação                    | Motivo | Autor(es) |
| ------ | ---------- | ------------------------------ | ------ | ----- |
| 1.0    | 01/03/2022 | Criação do documento | - | Igor Paiva, Renan Cristyan, Rhuan Queiroz, Thiago Lopes |

# Documento de Arquitetura de Software

## 1. Introdução

### 1.1 Propósito

Este documento visa apresentar e descrever a arquitetura do MeasureSoftGram levando em conta o MVP da [LI realizada](../lean/intro.md).

### 1.2 Escopo

O escopo deste documento é entendido como o escopo do MeasureSoftGram e seus componentes. Sendo eles: Core e o CLI (MVP).


### 1.3 Definições Acrônimos e Abreviações

| Acrônimo | Forma extendida       |
| -------- | --------------------- |
| REST      | Representational State Transfer |
| CLI      | Command Line Interface |
| HTTP | Hypertext Transfer Protocol |

### 1.4 Referências

> Documento de arquitetura de Software. UFPE. Disponível em: https://www.cin.ufpe.br/~gta/rup-vc/core.informal_resources/guidances/examples/resources/ex_sad.htm. Acesso em: 24/04/2021

> Documento de arquitetura de Software. UFPE. Disponível em: https://www.cin.ufpe.br/~gta/rup-vc/extend.formal_resources/guidances/examples/resources/sadoc_v1.htm. Acesso em: 24/04/2021

> Artefatos do MeasureSoftGram. Disponível em: .

> Visões Arquiteturais. Disponível em: https://www.dimap.ufrn.br/~thais/Arquitetura20081/Visoes4+1eDocumentacao.pdf. Acesso em: 27/04/2021

> Kruchten’s 4 + 1 views of Software Design. Disponível em: https://medium.com/the-mighty-programmer/kruchtens-views-of-software-design-e9088398c592. Acesso em: 27/04/2021

### 1.5 Visão Geral

Este documento é divido em seções, cada qual com seu próposito:

| Tópico | Descrição |
| ------ | --------- |
| [Representação Arquitetural](#-representação-arquitetural) | Contém por meio de diagramas o padrão arquitetural do sistema |
| [Objetivos Arquiteturais e Restrições](#-objetivos-arquiteturais-e-restrições) | Descreve os requisitos do software e objetivos que impactam na arquitetura, além das restrições |
| [Visão Lógica](#-visão-lógica) | Descreve as partes importantes do domínio modelo, assim como sua decomposição em subsistemas, pacotes, classes e classes de utilidade |
| [Visão de Processo](#-visão-de-processo) | Descreve a decomposição do sistema em processos |
| [Visão de Implantação](#-visão-de-implantação) | Descreve as configurações físicas em que o software roda e é implantado, assim como, o processo de implantação adotado |
| [Visão de Implementação](#-visão-de-implementação) | Descreve de forma geral a estrutura de implementação do software, a decomposição do software em camadas e subsistemas |
| [Visão de Dados](#-visão-de-dados) | Descreve como a camada de persistência vai persistir os dados, e como eles são modelados  |
| [Tamanho e Perfomance](#-tamanho-e-performance) | Descreve o tamanho do software e seu impacto em relação à arquitetura, assim como os objetivos de performance |
| [Qualidade](#-qualidade) | Descreve como a arquitetura impacta e contribuí para os atributos de qualidade |

## 2. Representação Arquitetural

![Representação arquitetural](/img/docs/sad/architectural_representation.png)

### 2.1 Core

O **Core** é o serviço responsável por abstrair a lógica do modelo matemático do software.

### 2.2 Service

O **Service** é o serviço responsável por conter e manipular os dados do software: métricas, metas de configuração, análises realizadas, etc. Utiliza o padrão de camadas MVC para a construção e organização do serviço.

### 2.3 CLI

O **CLI** é uma interface de linha de comando para o software.

## 3. Objetivos Arquiteturais e Restrições

- A arquitetura do software compreende que o software deve ser executado em rede local, sem a necessidade de conexão com a internet.
- A conexão com a internet é necessária para a obtenção do software e instalação, mas não para a sua execução.
- Os serviços devem ser executados via docker, sem a necessidade de instalação.

## 4. Visão Lógica

### 4.1 Desenho de Pacotes Arquiteturalmente Significantes

<!-- #### 4.1.1 CLI -->

<!-- #### 4.1.2 Core -->

<!-- #### 4.1.3 Service -->



## 6. Visão de Processo
### 6.1 Fluxo de dados

Os dados fluem sempre do CLI para o Service, do Service para o Core, e vice-versa. Do Service, os dados (tanto do CLI, quanto do Core) fluem e podem ser persistidos no banco de dados.


<!-- ### 6.2 Fluxo de Atividades -->


## 7. Visão de Implantação

Dado que o sistema é compreendido para ser executado em rede local, o software deve ser instalado em um ambiente local, sem a necessidade de conexão com a internet. Os nós de serviço (Core e Service) e o componente de CLI já estarão configurados previamente com as portas necessárias para a conexão das partes.

De modo semelhante, a imagem Docker do Service deve conter o banco de dados MongoDB. Os serviços deverão ser instalados em um ambiente Docker, via script de instalação, e deverão ser executados via script de execução.

O CLI deverá ser instalado via Python PyPI, sendo a sua execução como pacote Python.

## 8. Visão de Implementação

### 8.1 Service

#### 8.1 Camadas

Este serviço utilizará o microframework Flask.

##### 8.1.1 Controller

Esta é a camada que ficará responsável por receber as requisições dos clientes, e reagirá baseada nos verbos HTTP (GET, HEAD, POST, PUT, PATCH, DELETE, CONNECT, OPTIONS e TRACE).

##### 8.1.2 Model

Esta camada carrega consigo o modelo de domínio, e por obedecer ao padrão Active Record, tem a capacidade de abstrair as tabelas da camada de persistência. Também tem a responsabilidade de abstrair os relacionamentos entre as mesmas.

##### 8.1.3 View

A view desse serviço é a especificação REST em formato JSON, que será utilizada para a comunicação com o cliente.

### 8.2 Core

Inicialmente a base de código do modelo matemático está contida num notebook Python, conforme o desenvolvimento for progredindo o modelo matemático será implementado em um módulo Python na aplicação, prevê-se que o notebook deixe de existir em algum momento.

#### 8.2.1 Camadas

Esta aplicação utiliza o microframework Flask, e por não havar uma camada de dados a ser implementada, a aplicação não utiliza o padrão MVC, sendo assim se comporta apenas como uma **abstração** REST para o modelo matemático.

### 8.3 CLI

#### 8.3.1 Argparse

O pacote Python **argparse** deverá ser utilizado para a construção do CLI, seus comandos, seus parâmetros e seus argumentos. Sendo também o pacote Python **inquirer** para a construção de formulários de escolha.

### 8.4 Metodologia de Desenvolvimento

As metodologias adotadas serão Agile, Scrum e XP (programação em pares e integração contínua). Sendo que no mesmo contexto será utilizado o framework DevSecOps pela equipe de infraestrutura, mas que também se aplica à equipe de desenvolvimento.

### 8.5 Padrões de Desenvolvimento

A ferramenta utilizada para versionamento será o GitHub, não há padronização para Editor de Texto ou IDE, mas os repositórios de subsistemas deverão estar configurados com ferramentas de análise estática de código. Prevê assim uma melhor eficiência e padronização dos códigos fonte da equipe. Estas análises serão efetuadas automaticamente, por meio da ferramenta de integração contínua chamada GitHub Actions.

Os testes devem ser realizados ao longo do desenvolvimento, e também será utilizado o Sonarcloud para análise estática de qualidade.


| Linguagem             | Estilo de código |
| --------------------- | ---------------- |
| Python                | PEP8             |

### 8.6 Documentação de Endpoints

Os endpoints do Back-end API deverão ser documentados utilizando a ferramenta *Swagger*, facilitando assim a integração da equipe, que no caso podem se diferir, diminuindo o tempo gasto para inclusão de novas funcionalidades e novos membros na equipe.

## 9. Visão de Dados

Por estar em uso um banco de dados NoSQL, o banco de dados MongoDB, utilizado pelo Service, a visão de dados se estrutura num formato de documentos, como JSON, e suas collections, de formam análoga a tabelas.


<!-- ## 10. Qualidade -->
