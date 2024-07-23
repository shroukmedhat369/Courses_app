<template>
    <header>
      <nav>
        <ul>
          <li><router-link to="/Home">Home</router-link></li>
          <li><router-link to="/favorites">Favorites</router-link></li>
          <li><router-link to="/register">Register</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderVue'
  }
  </script>
  
  <style scoped>
 
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
}

header {
    background: #222 url('../assets/img/banner.jpg') no-repeat center center/cover;
    padding: 10px 0;
    text-align: center;
    text-transform: uppercase;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
    background: rgba(0, 0, 0, 0.5);
    height: 4em;
}

nav ul {
    list-style: none;
    display: flex;
    justify-content: center;
    padding: 0;
}

nav ul li {
    margin: 0 15px;
}

nav ul li a {
    color: #fff;
    line-height: 4em;
    text-decoration: none;
    letter-spacing: 2px;
    font-weight: 400;
    font-size: 1em;
    transition: color 0.3s ease;
}

nav ul li a:hover {
    color: #ffeb3b;
}
  </style>
  