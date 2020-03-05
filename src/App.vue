<template>
  <div id="app">
    <Board />
    <!-- <form @submit.prevent="createUser({ username, email, password })"> -->
    <!--    <form @submit.prevent="createUser({ username, password })">-->
    <!--      <input type="text" placeholder="name" v-model="username" />-->
    <!--      <input type="email" placeholder="email" v-model="email" />-->
    <!--      <input type="password" placeholder="pass" v-model="password" />-->
    <!--      <button type="submit">Log In</button>-->
    <!--    </form>-->
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import Board from '@/components/Board'

export default {
  name: 'App',
  components: {
    Board
  },
  data: () => {
    return {
      username: 'test',
      email: 'test@example.com',
      password: 'test'
    }
  },
  methods: mapActions(['createUser'])
}
</script>

<style>
*,
html,
body {
  margin: 0;
  padding: 0;
  text-decoration: none;
  list-style: none;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
  background-color: #363b40;
  width: 100%;
  height: 100vh;
  padding: 50px;
}

@media screen and (max-width: 768px) {
  #app {
    height: auto;
  }
}
</style>
