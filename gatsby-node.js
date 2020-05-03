const path = require('path');


exports.createPages = ({ graphql, actions }) => {
  const {createPage, ...r} = actions; 

  return new Promise((resolve, reject)=> {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node { 
              frontmatter {
                title
                slug 
              }
            }
          }
        }
      }
    `).then(result=> {
      result.data.allMarkdownRemark.edges.forEach(({node})=> {
        createPage({
          path: node.frontmatter.slug,
          component: path.resolve('./src/components/postLayout.js'),
          // в контекст передаем то , что затем можем использовать как аргументы запроса
          context: {
            slug: node.frontmatter.slug
          } 
        })
      })
      resolve();
    }) 
  })
 

// runs in node env
  // createPage({
  //   path: '/somefakepage',
  //   component: path.resolve('./src/components/postLayout.js')
  // })  
}