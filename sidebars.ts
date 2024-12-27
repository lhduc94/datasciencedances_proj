import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  tailieuSidebar: [
    {
      type: 'category',
      label: 'Sách Kungfu Pandas',
      items: [
        {type: 'doc',
         id : 'kungfupandas/gioithieu'},
        // {type: 'doc',
        //   id: 'kungfupandas/DataStructure/Introduction',
        //   label:'Cấu trúc dữ liệu'
        // },
        // {
        //   type: 'doc',
        //   id: 'kungfupandas/IO/Introduction',
        //   label:'Đọc và lưu dữ liệu'
        // },
        // {
        //   type: 'doc',
        //   id: 'kungfupandas/Fundamental_Function/Introduction',
        //   label:'Các hàm cơ bản'
        // } 
        ],
    },
    {
      type: 'category',
      label: 'Pytorch',
      items: [
        {type: 'doc',
          label: 'Giới thiệu',
          id : 'pytorch/gioithieu'},
        {
          type: 'category',
          label: 'Deberta',
          items: [
            {
              type: 'doc',
              label: 'Deberta Sequence Classification',
              id : 'pytorch/Deberta/DebertaForSequenceClassification'
            },
            {
              type: 'doc',
              label: 'Pooling',
              id : 'pytorch/Deberta/Pooling'
            }
          ] 
        }
      ]
    },
    {type: 'doc',
      id : 'postgres/postgres',
      label: 'Cách cài đặt Postgres'
    }
  ]
};

export default sidebars;
