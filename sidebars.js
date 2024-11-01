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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialSidebar: [
  {
      type: 'doc',
      id: 'intro',
  },
  {
    type: 'category',
    label: 'Панель',
    items: [
      {
        type: 'doc',
        id: 'panel/login',
      },
      {
        type: 'doc',
        id: 'panel/topup',
      },
      {
        type: 'doc',
        id: 'panel/order',
      },
      {
        type: 'category',
        label: 'Управление услугой',
        items: [
          {
            type: 'doc',
            id: 'panel/service/info',
          },
          {
            type: 'doc',
            id: 'panel/service/backups',
          },
          {
            type: 'doc',
            id: 'panel/service/tariff',
          },
          {
            type: 'doc',
            id: 'panel/service/subdomains',
          },
          {
            type: 'doc',
            id: 'panel/service/reinstall',
          },
      
    ],
  },
  ],
},
{
  type: 'category',
  label: 'Туториалы',
  items: [
    {
      type: 'doc',
      id: 'service-tutorials/ssh',
    },
    {
      type: 'doc',
      id: 'service-tutorials/rescue',
    },
    {
      type: 'doc',
      id: 'service-tutorials/fsresize',
    },
    {
      type: 'doc',
      id: 'service-tutorials/pterodactyl',
    },
    {
      type: 'doc',
      id: 'service-tutorials/pteronode',
    },
  ]
}
  ]
};

export default sidebars;
