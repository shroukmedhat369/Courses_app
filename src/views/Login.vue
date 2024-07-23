<template>
    <div class="login">
      <div class="form-container">
        <h2>Login</h2>
        <form @submit.prevent="login">
          <input type="email" v-model="email" placeholder="Email" required />
          <input type="password" v-model="password" placeholder="Password" required />
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <router-link to="/register">Sign up here</router-link></p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      login() {
        window.location.href='/Home'
      }
    }
  };
  </script>
  
  <style scoped>
  /* Include your styles here */
  </style>
  