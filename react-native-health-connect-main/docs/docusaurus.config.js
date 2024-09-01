// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Native Health Connect',
  tagline: '',
  url: 'https://matinzd.github.io',
  baseUrl: '/react-native-health-connect/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  projectName: 'react-native-health-connect',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  organizationName: 'matinzd',
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/matinzd/react-native-health-connect/tree/main/docs',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/matinzd/react-native-health-connect/tree/main/docs',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'React Native Health Connect',
        logo: {
          alt: 'My Site Logo',
          src: 'img/health_connect_logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'get-started',
            position: 'left',
            label: 'Docs',
          },
          {
            href: 'https://github.com/matinzd/react-native-health-connect',
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
                label: 'Get started',
                to: '/docs/get-started',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/matinzd/react-native-health-connect',
              },
            ],
          },
        ],
        copyright: `Made with ❤️ by Matin Zadeh Dolatabad`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
