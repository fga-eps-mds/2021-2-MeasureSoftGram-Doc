// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'MeasureSoftGram',
  tagline: 'Dinosaurs are cool',
  url: 'https://fga-eps-mds.github.io/',
  baseUrl: '/2021-2-MeasureSoftGram-Doc/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'fga-eps-mds', // Usually your GitHub org/user name.
  projectName: '2021-2-MeasureSoftGram-Doc', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),

        },
        blog: false,
        theme: {
          defaultDarkMode: true,
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'MeasureSoftGram',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'artifact/intro',
            position: 'left',
            label: 'Documentação',
          },
          {
            type: 'doc',
            docId: 'lean/intro',
            position: 'left',
            label: 'Lean Inception',
          },
          {
            type: 'doc',
            docId: 'planning/charter',
            position: 'left',
            label: 'Plano e monitoramento',
          },
          {
            type: 'doc',
            docId: 'contribute/how_to_contribute',
            position: 'left',
            label: 'Contribuição',
          },
          {
            href: 'https://github.com/fga-eps-mds/2021-2-MeasureSoftGram-Doc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introdução',
                to: 'docs/artifact/intro',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/fga-eps-mds/2021-2-MeasureSoftGram-Doc',
              },
            ],
          },
        ],
        // FIXME - usar licença correta do projeto
        copyright: `Copyright © ${new Date().getFullYear()} MeasureSoftGram. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
