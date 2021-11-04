<template>
  <div class="home">
    <BlogPost :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index" />
    <div class="blog-card-wrapper">
      <div class="container">
        <h3>View More Recent Posts</h3>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
        </div>
      </div>
    </div>
    <div class="updates">
      <div class="container">
        <h2>Never miss a post. Register for your free account today!</h2>
        <router-link class="router-button" to="#">
          Register for VueLeagueFire <Arrow class="arrow arrow-light"/>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue';
import BlogCard from '../components/BlogCard.vue';

import Arrow from '../assets/Icons/arrow-right-light.svg'
export default {
  name: "Home",
  components: {BlogPost, BlogCard, Arrow},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost: 
        "Lorem ipsum",
        welcomeScreen: true,
        photo: "coding"
      },
      sampleBlogPost: [
        {
          title: "This is a title!",
          blogHTML: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          blogCoverPhoto: "beautiful-stories"
        },
        {
          title: "This is a title!",
          blogHTML: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          blogCoverPhoto: "designed-for-everyone"
        },
      ],
    }
  },
  computed: {
    sampleBlogCards() { 
      return this.$store.state.sampleBlogCards
    }
  },
};
</script>

<style lang="scss" scoped>

.blog-card-wrapper {
  h3 {
    font-size: 28px;
    font-weight: 300;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: 768px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 768px) {
        margin-left: auto;
      }
    }

    h2 {
      font-size: 32px;
      font-weight: 300;
      max-width: 435px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 768px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }


}
</style>