---
id: time
title: Planejamento de Tempo
---

| Versão | Data       | Modificação                    | Motivo | Autor(es) |
| ------ | ---------- | ------------------------------ | :------: | ----- |
| 1.0    | 25/02/2022 | Criação do documento  | - | Igor Paiva, Renan Cristyan, Rhuan Queiroz, Thiago Lopes |
| 1.1    | 13/03/2022 | Alteração no estilo da planilha (iframe)  | - | Igor Paiva |

## Introdução

Este documento tem como objetivo documentar o plano de gerenciamento de tempo.

## Tabela de horários

Criamos uma tabela de horários marcando os horários disponíveis para cada membro da equipe. A planilha possui 2 folhas, uma para os integrantes da disciplina de MDS e outra para os de EPS. Esta planilha sempre é utilizada quando se precisa agendar algum evento ou tarefa do projeto.

<iframe width="100%" height="480px" style={{minWidth: "640px", minHeight: "480px", backgroundColor: "#f4f4f4", border: "1px solid #efefef" }} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vQGa1o6OGR2076yDwqzUfGTEASGMVqF7sj2zddlVjiqEwwrx225DxeqN-_ANBg_PQ/pubhtml?widget=true&amp;headers=false"></iframe>

[Link para a planilha](https://docs.google.com/spreadsheets/d/1y3KT5vJLXqQNvhHk9OEWu2MuthadcXrW/edit?usp=sharing&ouid=102436679216341216858&rtpof=true&sd=true)

## Definição de atividades

Utilizaremos uma técnica de planejamento iterativa (*Rolling Wave Planning*), toda semana faremos uma reunião de planejamento para revisarmos e definirmos as atividades que devem ser realizadas na semana seguinte ou a que se inicia (incluindo tarefas da semana anterior que não foram finalizadas). Todas as atividades definidas serão adicionadas na planilha de atividades.

Os atributos das atividades incluem, mas não se limitam a:

- **ID**: padrão AN.i.j. Exemplos: A1.1.1, A2, A7.2.
- **Tarefa**: descrição sucinta da tarefa.
- **Inicial**: dia de início da atividade.
- **Final**: dia de término da atividade.
- **Estimativa (h)**: estimativa de duração da atividade.
- **Esforço gasto**: esforço gasto realizando a atividade.
- **Responsável(eis)**: responsáveis por realizar a atividade.
- **Dependência**: atividade ao qual esta depende.
- **Individual**: se a atividade pode ser realizada individualmente, ou seja, sem a participação de mais membros da equipe.

## Lista de milestones

- Release X: 07/03/2022
- Release Xn: 02/05/2022

## Estimativas

Para estimativa iremos utilizar a técnica de *Three-Point Estimating*. Os valores estão em tempo de trabalho contínuo e ininterruptos.

- Mais provável (tM): estimativa baseada na duração da atividade de acordo com a capacidade, disponibilidade e expectativas realistas para os responsáveis.
- Otimista (tO): estimativa baseada no melhor cenário possível.
- Pessimista (tP): estimativa baseada no pior cenário possível.

A estimativa utilizada é uma média aritmética entre os 3 valores: `tE = (tO + tM + tP) / 3`.

## Planilha de atividades

Nesta planilha todas as atividades do projeto estarão listadas, juntamente com seus atributos, podendo também incluir gráficos de Gantt. Para cada nova iteração será criada uma nova folha na planilha. As informações presentes nesta planilha podem ser utilizadas para fazer análises em relação ao desempenho e distribuição de trabalho da equipe.

<iframe width="100%" height="480px" style={{minWidth: "640px", minHeight: "480px", backgroundColor: "#f4f4f4", border: "1px solid #efefef" }} src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTm6lOlUEmGtRzNXbT4_SaW2r6nhj353U2APGoiOgd-aAf4UUwa9HfdnnSVU_Psiq5FXtxTIxmJ-zC6/pubhtml?widget=true&amp;headers=false"></iframe>

[Link para a planilha](https://docs.google.com/spreadsheets/d/14Q73ZPFcaqDDG2ve7tXuiM3Zy-zvPgQoiZegk6xCboE/edit?usp=sharing)

## Mudanças

Criação de novas ou mudanças nas atividades serão realizadas diretamente na planilha de atividades. A lista de milestones pode ser alterada de acordo com a necessidade e a mudança será documentada neste documento.

## Referências

> PMI. Um guia do conhecimento em gerenciamento de projetos. Guia PMBOK 5a. ed. - EUA: Project Management Institute, 2013.
