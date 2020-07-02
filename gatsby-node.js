/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type MarkdownRemarkFrontmatterSection implements Node {
      section_2: Section
      section_3: Section
      section_4: Section
    }
    type Section implements Node {
      title: String
      introduction: String
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
