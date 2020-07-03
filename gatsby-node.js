/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
  type BlockList {
    title: String
    text: String
    image: File
    alt: String
  }
  
  type Sections {
    type: String
    title: String
    blocks: [BlockList]
  }

  type MarkdownRemarkFrontmatter {    
    main_ipost_typentroduction: String
    component_name: String
    title: String
    main_introduction: String
    sections: [Sections]
  }
  `
  createTypes(typeDefs)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const componentTemplate = require.resolve(
    `./src/templates/componentTemplate.js`
  )

  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___component_name] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              component_name              
            }
          }
        }
      }
    }
  `)

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log("node.frontmatter", node.frontmatter)
    createPage({
      path: node.frontmatter["component_name"],
      component: componentTemplate,
      context: {
        // additional data can be passed via context
        ["component_name"]: node.frontmatter["component_name"],
      },
    })
  })
}
