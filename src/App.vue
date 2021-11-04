<template>
  <div class="app-wrapper">
    <div class="app">
      <Nav v-if="!navigation"/>
      <router-view />
      <FooterVue v-if="!navigation"/>
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav.vue'
import FooterVue from './components/Footer.vue'
import firebase from 'firebase/app'
import "firebase/auth"

export default {
  name: "app",
  components: {
    Nav,
    FooterVue
  },
  data() {
    return {
      navigation: null
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      this.$store.commit("setUser", user);
      if (user) {
        this.$store.dispatch("getCurrentUser", user);
      }
    });
    this.checkRoute();
  },
  mounted() {},
  methods: {
    checkRoute() {
      if(this.$route.name === 'Login' || this.$route.name === 'Register' || this.$route.name === 'ForgotPassword') {
        this.navigation = true;
      } else {
        this.navigation = false;
      }
    }
  },
  watch: {
    $route() {
      this.checkRoute();
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.link {
  cursor: pointer;
  text-decoration: none;
  text-transform: uppercase;
  color: black;
}

.link-light {
  color: #EDB852;
}

.arrow {
  margin-left: 8px;
  width: 12px;
  path {
    fill: #13181B;
  }
}
.arrow-light {
  path {
    fill: #EDB852;
  }
}

button,
.router-button {
  transition: 500ms ease all;
  cursor: pointer;
  margin-top: 24px;
  padding: 12px 24px;
  background-color: #13181B;
  color: #EDB852;
  border-radius: 20px;
  border: none;
  text-transform: uppercase;

  &:focus {
    outline: none;
  }

  &:hover {
    color: rgba(255, 255, 255, 0.8);
    .arrow {
      path {
        fill: rgba(255, 255, 255, 0.8);
      }
    }
  }
}

.button-ghost {
  color: #000;
  padding: 0;
  border-radius: 0;
  margin-top: 50px;
  font-size: 15px;
  font-weight: 500;
  background-color: transparent;
  @media (min-width: 700px) {
    margin-top: 0;
    margin-left: auto;
  }
  i {
    margin-left: 8px;
  }
}
.button-light {
  background-color: transparent;
  border: 2px solid #fff;
  color: #fff;
}
.button-inactive {
  pointer-events: none !important;
  cursor: none !important;
  background-color: rgba(128, 128, 128, 0.5) !important;
}

.error {
  color: red;
  font-size: 12px;
  text-align: center;
}
.blog-card-wrapper {
  position: relative;
  padding: 80px 16px;
  background-color: #f1f1f1;
  @media (max-width: 500px) {
    padding: 100px 16px;
  }

  .blog-cards {
    display: grid;
    gap: 32px;
    grid-template-columns: 1rf;

    @media (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, 1fr);
    }
  }
}
</style>
