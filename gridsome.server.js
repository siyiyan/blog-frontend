// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios')

module.exports = function (api) {
  // api.loadSource(({ addCollection }) => {

  api.loadSource(async actions => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    // const collection = actions.addCollection('Post')

    const { data: posts } = await axios.get('http://localhost:3000/posts')
    const { data: categories } = await axios.get('http://localhost:3000/categories')
    const { data: tags } = await axios.get('http://localhost:3000/tags')
    const { data: covers } = await axios.get('http://localhost:3000/covers')

    // 直接从访问接口的源头控制
    posts.forEach(post => {
      post.category = categories.find(c => c.id === post.category)
      post.tag = tags.find(d => d.id === post.tag)
      post.cover = covers.find(e => e.id === post.cover)
    })

    const collection = actions.addCollection({
      typeName: 'BlogPosts'
    })

    for (const post of posts) {
        collection.addNode({
          id: post.id,
          title: post.title,
          category: post.category,
          tags: post.tag,
          created_at: post.created_at,
          content: post.content,
          cover: post.cover
        })
    }

  })


  // api.createPage( ({ createPage }) => {
  //   // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  //   createPage({
  //     path: '/post/:id',
  //     component: './src/templates/Post.vue'
  //   })
  // })
}








 