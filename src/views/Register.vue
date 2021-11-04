<template>
  <div class="form-wrapper">
    <form action="" class="register">
      <p class="login-register">
        Already have an Account? <router-link class="router-link" :to="{ name: 'Login' }">Login</router-link>
      </p>
      <h2>Create your FireLeagueVue Account</h2>
      <div class="inputs">
        <div class="input">
          <input type="text" placeholder="First Name" v-model="firstName">
          <user class="icon"/>
        </div>
        <div class="input">
          <input type="text" placeholder="Last Name" v-model="lastName">
          <user class="icon"/>
        </div>
        <div class="input">
          <input type="text" placeholder="Username" v-model="username">
          <user class="icon"/>
        </div>
        <div class="input">
          <input type="text" placeholder="Email" v-model="email">
          <email class="icon"/>
        </div>
        <div class="input">
          <input type="password" placeholder="Password" v-model="password">
          <password class="icon"/>
        </div>
        <div v-show="error" class="error">{{ errorMSG }}</div>
      </div>
      <button @click.prevent="register">Sign up</button>
      <div class="angle">

      </div>
    </form>
    <div class="background"></div>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import "firebase/auth"
import db from '../firebase/firebaseInit'

import email from "../assets/Icons/envelope-regular.svg"
import password from "../assets/Icons/lock-alt-solid.svg"
import user from "../assets/Icons/user-alt-light.svg"
export default {
  name: 'Register',
  components: {
    email,
    password,
    user
  },
  data() {
    return {
      firstName: "",
      lastName: "",
      username: "",
      email: "",
      password: "",
      error: null,
      errorMSG: ""
    }
  },
  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== ""
      ) {
        this.error = false
        const firebaseAuth = await firebase.auth()
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(
          this.email,
          this.password
        )
        const result = await createUser;
        const database = await db.collection("users").doc(result.user.uid)
        await database.set({
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
        })
        this.$router.push({ name: "Home" })
      } else {
        this.error = true
        this.errorMSG = "Please fill out all fields."
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>