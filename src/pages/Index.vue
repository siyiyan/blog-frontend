<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>Clean Blog</h1>
              <span class="subheading">A Blog Theme by Start Bootstrap</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- 默认插槽 -->
    <slot/>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
            <!-- <g-link :to="'/post/' + edge.node.id"> -->
            <g-link :to="'/post'">
              <h2 class="post-title">
                {{ edge.node.title }}
              </h2>
              <!-- <h3 class="post-subtitle">
                Problems look mighty small from 150 miles up
              </h3> -->
            </g-link>
            <p class="post-meta">Posted by
              <a href="#">{{ edge.node.category.firstname + edge.node.category.lastname }}</a>
              on {{ edge.node.created_at }}
            </p>

            <p>
              <!-- <a href="#" v-for="tag in edge.node.tags" :key="tag.id">{{ tag.title }}</a> -->
              <a href="#" >{{ edge.node.tags.title }}</a>
            </p>
            <hr>
          </div>
          <!-- <hr>
          <div class="post-preview">
            <a href="post.html">
              <h2 class="post-title">
                I believe every human has a finite number of heartbeats. I don't intend to waste any of mine.
              </h2>
            </a>
            <p class="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on September 18, 2019</p>
          </div>
          <hr>
          <div class="post-preview">
            <a href="post.html">
              <h2 class="post-title">
                Science has not yet mastered prophecy
              </h2>
              <h3 class="post-subtitle">
                We predict too much for the next year and yet far too little for the next ten.
              </h3>
            </a>
            <p class="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on August 24, 2019</p>
          </div>
          <hr>
          <div class="post-preview">
            <a href="post.html">
              <h2 class="post-title">
                Failure is not an option
              </h2>
              <h3 class="post-subtitle">
                Many say exploration is part of our destiny, but it’s actually our duty to future generations.
              </h3>
            </a>
            <p class="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on July 8, 2019</p>
          </div> -->
          <hr>
          <!-- Pager -->
          <!-- <div class="clearfix">
            <a class="btn btn-primary float-right" href="#">Older Posts &rarr;</a>
          </div> -->
          <Pager :info="$page.posts.pageInfo"/>
        </div>
      </div>
    </div>
  </Layout>  
</template>

<page-query>
query ($page: Int) {
  posts: allBlogPosts(perPage: 2, page: $page) @paginate {
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
      	category {
          id
          firstname
          lastname
        }
        tags {
          id
          title
        }
        created_at
      }
    }
  }
}
</page-query>

<script>
import { Pager } from 'gridsome'

export default {
  metaInfo: {
    title: 'Hello, world!'
  },
  name: 'HomePage',
  components: {
    Pager
  }
}
</script>

<style>
  .masthead{
    background-image: url('../../img/home-bg.jpg')!important;
  }
</style>
