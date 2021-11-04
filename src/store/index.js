import Vue from 'vue'
import Vuex from 'vuex'
import firebase from "firebase/app"
import "firebase/auth"
import db from "../firebase/firebaseInit"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: "Blog Card #1", blogCoverPhoto: "stock-1", blogDate: "May 1, 2021"},
      { blogTitle: "Blog Card #2", blogCoverPhoto: "stock-2", blogDate: "May 2, 2021"},
      { blogTitle: "Blog Card #3", blogCoverPhoto: "stock-3", blogDate: "May 3, 2021"},
      { blogTitle: "Blog Card #4", blogCoverPhoto: "stock-4", blogDate: "May 4, 2021"},
    ],
    editPost: null,
    user: null,
    profileAdmin: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUsername: null,
    profileId: null,
    profileInitials: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload
    },
    setUser(state, payload) {
      state.user = payload
    },
    setProfileInfo(state, payload) {
      state.profieId = payload.id;
      state.profileEmail = payload.data().email
      state.profileFirstName = payload.data().firstName
      state.profileLastName = payload.data().lastName
      state.profileUsername = payload.data().username
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join("") + state.profileLastName.match(/(\b\S)?/g).join("");
    }
  },
  actions: {
    async getCurrentUser({ commit }) {
      const database = await db.collection('users').doc(firebase.auth().currentUser.uid)
      const dbResult = await database.get()
      commit('setProfileInfo', dbResult)
      commit('setProfileInitials')
      console.log(dbResult)
    }
  },
  modules: {
  }
})
