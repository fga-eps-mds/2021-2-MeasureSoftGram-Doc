---
id: github_standards
title: Padrões no Github
---

| Versão | Data       | Modificação                    | Motivo | Autor(es) |
| ------ | ---------- | ------------------------------ | :----: | ----- |
| 1.0    | 25/02/2022 | Criação do documento  | - | Igor Paiva |

# Padrões no Github

## Commit

Utilizar commits que descrevam com poucas palavras e de forma clara, o que foi feito, escritos em inglês. Não serão utilizados verbos no gerúndio, um exemplo:

- 👌 "Adds | Removes | Implements"
- 👎 "Adding | Removing | Implementing | Added | Removed | Implemented"

Não tem problema em escrever commits descritivos, explicando outras possíveis soluções e motivação, porém tente escrever resumidamente o conteúdo na primeira linha. Exemplo:

```
Adds validation to nonprofits state code.

The create nonprofit command wasn't validating the state code for US states only, when trying to access the application the route match fails.

To solve the problem a validation was added to the nonprofit model, using the 'countries' gem to get the states.

A hardcoded states list could be used to validate the states or another gem, but the 'countries' gem was already used in the project and it's widely used in the community.
```

## Branch

Nomes escritos em inglês.

- docs/nome-documento: documentação de algo
- refactor/descricao-simples: melhoria realizada
- fix/descricao-simples: resolução de um bug
- feature/descricao-simples: tarefa realizada
- minute/dia-mes-ano: adição de uma ata

## Pull request (PR)

``` md
# Mudança tal

## Descrição
Escreva uma breve descrição sobre o que o Pull Request resolve

[Nome da Issue](link_da_issue)

## Porque este Pull Request é necessário?
Descreva o motivo da realização do documento

## Critérios de aceitação
(Exemplos de critérios de aceitação)

1. [ ] Todas as informações necessárias estão presentes?
2. [ ] O documento está escrito de forma concisa?
3. [ ] A ortografia do documento está correta?

Resolve #(numero_da_issue)
```

## Issue

### Melhorias

```markdown
## Descrição do problema atual
(Insira uma clara descrição sobre o problema atual)

## Descrição das melhorias propostas
(Descreva o que será melhorado)

1. [ ] '...'
2. [ ] '...'
3. [ ] '...'
```

### Novo documento

```markdown
## Descrição
Escreva uma breve descrição sobre o documento

## Critérios de aceitação
(Possíveis critérios)

1. [ ] O documento contempla o seu objetivo?
2. [ ] O documento está escrito de forma concisa?
3. [ ] A ortografia do documento está correta?
4. [ ] Há referências bibliográficas? Elas estão escritas no padrão correto?
5. [ ] O documento está devidamente versionado?
```

### Reporte de bug

```markdown
**Descreva o bug**
(Uma descrição clara sobre o bug)

**Como Reproduzir**
Passos para reproduzir este comportamento:
1. Vá para '...'
2. Clique em '....'
3. Role para baixo até '....'
4. Veja o erro

**Comportamento esperado**
(Uma descrição concisa sobre o que você esperava que acontecesse)


**Informações adicionais**
(Adicione qualquer outra informação que você julgue necessária)
```

### Tarefa

``` md
## Descrição da tarefa
(descreva a tarefa de maneira clara)

## Lista de afazeres
1. [ ] '...'
2. [ ] '...'
```
