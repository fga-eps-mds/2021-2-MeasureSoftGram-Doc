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
  leanSidebar: ['lean/intro', 'lean/about_product', 'lean/personas', 'lean/results'],
  docsSidebar: ['artifact/intro', 'artifact/sad', 'artifact/low_prototype'],
  planningSidebar: ['planning/charter', 'planning/wbs', 'planning/time', 'planning/cost', 'planning/knowledge_board', 'planning/communication', 'planning/risk'],
  contributeSidebar: ['contribute/how_to_contribute', 'contribute/github_standards', 'contribute/code_of_conduct'],
};

module.exports = sidebars;
