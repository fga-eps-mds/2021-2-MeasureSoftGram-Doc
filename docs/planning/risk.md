---
id: risk
title: Gerenciamento de Riscos
---

| Versão | Data       | Modificação                    | Motivo | Autor(es) |
| ------ | ---------- | ------------------------------ | :------: | ----- |
| 1.0    | 27/02/2022 | Criação do documento  | - | Igor Paiva, Renan Cristyan, Rhuan Queiroz, Thiago Lopes |

## Introdução

O planejamento da gerência de risco é o processo de definir como conduzir as atividades de gerência de risco para um projeto.

## Estrutura Analítica de Riscos - EAR

![Estrutura Analítica de Riscos (EAR)](/img/docs/EAR.png)

[Link para o diagrama](https://unbbr-my.sharepoint.com/:u:/g/personal/180018728_aluno_unb_br/EZOz_p44_dpDmrAooJ0dOP4BqVebHPJLByxVo7n8qVf6xA?e=hIn8fC)

### Categoria dos Riscos

#### Externo

- **PO**: Riscos associados com o Product Owner do projeto.
- **Saúde / Fatores Pessoais**: Riscos associados com a saúde das partes interessadas do projeto e/ou fatores pessoais não relacionados ao projeto.
- **Disciplina**: Riscos associados a relação dos integrantes da equipe com a disciplina.

#### Organizacional

- **Pessoas**: Riscos associados à gerência de pessoas participantes no projeto.
- **Priorização**: Riscos associados à priorização de atividades a serem executadas no projeto.
- **Habilidades individuais**: Riscos associados às capacidades e habilidades pessoais dos integrantes da equipe.

#### Técnico

- **Tecnologia**: Riscos associados com as tecnologias utilizadas no projeto.
- **Infraestrutura**: Riscos associados com a infraestrutura do projeto.
- **Definição de requisitos**: Riscos associados aos requisitos formalizados.
- **Definição de escopo**: Riscos associados ao escopo definido.
- **Qualidade**: Riscos associados às características de qualidade do produto (Usabilidade, Manutenibilidade, entre outras).
- **Arquitetura**: Riscos relacionados à arquitetura do projeto.

#### Gerenciamento de Projeto

- **Estimativas**: Risco associado às estimativas definidas no projeto.
- **Planejamento**: Risco associado ao planejamento do projeto.
- **Execução**: Risco associado à execução do projeto.

## Análise Quantitativa dos Riscos

### Probabilidade de riscos e impactos

| Escala | Probabilidade |
|:-:|:-:|
| Muito Alta | 61-100% |
| Alta | 31-60% |
| Média | 16-30% |
| Baixa | 6-15% |
| Muito Baixa | <5% |

### Impactos dos riscos

| Escala | Impacto | Tempo | Descrição |
|:-:|:-:|:-:|--|
| Muito baixo | <5% | 1 dia | Impacto pouco expressivo no desenvolvimento do projeto |
| Baixo | 6-15% | 2-4 dias | Pouco impacto no desenvolvimento do projeto |
| Médio | 16-30% | 1 iteração | Possui certo impacto porém é facilmente recuperado |
| Alto | 31-50% | 2 iterações | Há grande impacto no desenvolvimento do projeto |
| Muito Alto | 51-80% | 4 iterações | O impacto inviabiliza o projeto |


### Matriz de probabilidade e impacto - Prioridade

<iframe width="750" height="450" frameborder="0" src="https://docs.google.com/spreadsheets/d/e/2PACX-1vRErJopqAaKcrv9yp84LPBfYTi-426F7iuKu7lwjlRertKrcDWLACdhuCs3ZZvb5IXWQIAvAF5EA159/pubhtml?widget=true&amp;headers=false"></iframe>

[Link para a planilha](https://docs.google.com/spreadsheets/d/1p4XjyUOx4p9woCxHwos3Rk-_RD9AUvUFZ3PK83lX4bM/edit?usp=sharing)

## Riscos Levantados

### Externo

| ID |Risco| Impacto | Probabilidade | Prevenção | Resposta | Prioridade |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| R01 | Abandono do projeto | Muito Alto | Muito Baixa | - | Suspender o projeto | 0,04 |
| R02 | Alteração drástica de escopo | Muito Alto | Baixa | Validar as atividades realizadas sempre que possível em lotes menores | Tentar adequar o projeto ao novo escopo, atualizar atividades previstas, replanejar | 0,06 |
| R03 | Parte interessada ficar incapacitada por motivo de saúde | Muito Alto | Baixa | - | Seguir com os planejamentos levando em conta a diminuição dos integrantes | 0,08  |
| R04 | Integrantes abandonarem disciplina | Muito Alto | Média | - | Seguir com os planejamentos levando em conta a diminuição dos integrantes | 0,12  |
| R05 | Novos integrantes entrarem para o time | Alto | Média | - | Seguir com os planejamentos levando em conta a diminuição dos integrantes, planejar atividades de *onboarding* | 0,075  |

### Organizacional

| ID |Risco| Impacto | Probabilidade | Prevenção | Resposta | Prioridade |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| R06 | Atividades serem delegadas para a pessoa errada | Alto | Média | Conhecer melhor as habilidades dos integrantes | Realocar a tarefa para outro integrante | 0,075  |
| R07 | Priorizar uma tarefa ou história de usuário errado | Muito Alto | Baixa | Levar melhor em conta os valores do negócio, e utilizar as relações de dependência corretamente | Atualiza a priorização | 0,08  |
| R08 | Montar um pareamento desbalanceado | Alto | Média | Utilizar o quadro de conhecimentos, prezar pela atualização do quadro de conhecimento constantemente e exigir feedbacks acerca do andamento da tarefa | Realocar a tarefa ou realocar as duplas | 0,075  |

### Técnico

| ID |Risco| Impacto | Probabilidade | Prevenção | Resposta | Prioridade |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| R09 | Escolher uma tecnologia que não colabora para a solução | Muito Alto | Baixo | Estudar as capacidades de cada tecnologia | Trocar a tecnologia ou segmentar o problema de modo que mitigue ou resolva o problema | 0,08 |
| R10 | Tomar uma decisão arquitetural que comprometa o desenvolvimento do produto | Muito Alto | Baixo | Estudar os problemas a serem resolvidos, decidir em equipe, levar em conta os requisitos e prioridades do negócio | Tomar outra decisão ou remediar/corrigir a errada | 0,08 |
| R11 | Tomar decisão de infraestrutura que afete o produto | Médio | Baixo | Ler acerca dos termos de uso da infraestrutura, suas capacidades e limitações  | Trocar de infraestrutura | 0,03 |
| R12 | Definir requisitos que não resolvem totalmente o problema | Médio | Alto | Elicitar os requisitos de forma colaborativa, envolver o cliente e validar os requisitos definidos | Alterar baseline de requisitos | 0,09 |
| R13 | Definir um escopo que não condiz com o propósito do produto | Alto | Muito baixa | Incluir o cliente em todo o processo de definição do escopo, revisitar as etapas de definição do escopo | Alterar o escopo para possibilitar a resolução do problema | 0,025 |
| R14 | Priorizar um atributo de qualidade que não é de fato importante | Baixo | Baixa | Incluir o cliente em todo o processo de priorização dos atributos de qualidade, utilizar uma técnica bem definida para o processo de exploração e priorização | Despriorizar esse atributo | 0,015 |
| R15 | Não priorizar um atributo de qualidade que seria importante  | Alto | Baixa | Incluir o cliente em todo o processo de priorização dos atributos de qualidade, utilizar uma técnica bem definida para o processo de exploração e priorização | Priorizar esse atributo e adequar ao projeto | 0,05 |

### Gerenciamento de Projeto

| ID |Risco| Impacto | Probabilidade | Prevenção | Resposta | Prioridade |
|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| R16 | Estimar de maneira errada atividades do projeto | Alto | Média | Quebrar as atividades em atividades mais estimáveis, utilizar técnicas de estimativa, considerar o histórico da equipe | Ajustar o cronograma de acordo com o tempo real da atividade | 0,075 |
| R17 | Planejar as atividades de maneira errada | Alto | Baixa | Reavaliar o planejamento fazendo os ajustes que julgarmos necessário, utilizar técnicas de planejamento | Mudar a estratégia de planejamento para sanar possíveis problemas | 0,05 |
| R18 | Executar uma atividade de maneira a não resolver o problema | Médio | Média | Fazer o pareamento de maneira estratégica, definir bem a atividade | Reescrever a atividade para melhor descrevê-la, Realocar a atividade | 0,045 |

## Referências

> PMI. Um guia do conhecimento em gerenciamento de projetos. Guia PMBOK 5a. ed. - EUA: Project Management Institute, 2013.
