export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5de537e5f543fce3463dfa11',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-sy6ogbyj',
                  apiId: '82003489-4524-4bc9-a216-b769571c604d'
                },
                {
                  buildHookId: '5de537e6505571a4e1c5f9b5',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-cfwnkeht',
                  apiId: 'ee309e57-8e00-4d6f-b783-50e1eab57335'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/johrich72/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-cfwnkeht.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
