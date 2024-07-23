<template>
  
    <div class="form-container">
      <h2>Signup</h2>
      <form @submit.prevent="signup">
        <input type="text" v-model="username" placeholder="Username" required />
        <input type="email" v-model="email" placeholder="Email" required />
        <input type="password" v-model="password" placeholder="Password" required />
        <button @click=back()>Signup</button>
      </form>
      <p>Already have an account? <router-link to="/login">Login here</router-link></p>
    </div>
  
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    back() {
      // Handle signup logic here
      window.location.href='/login'
    }
  }
};
</script>

<style >
/* Form Container */
.form-container {
    background: #69a378;
    padding: 2rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    max-width: 400px;
    width: 100%;
    text-align: center;
    margin: auto;
    position: relative;
    top: 20%;
   
}
</style>
