<template>
  <div id="app">
    <img src="./assets/logo.png">
    <header>
      <nav>
        <ul>
          <li v-if="!this.$store.state.isMember"><router-link to="/member/join">회원가입</router-link></li>
          <li v-if="!this.$store.state.isMember"><router-link to="/member/login">로그인</router-link></li>
          <li v-if="this.$store.state.isMember" @click="logout">로그아웃</li>
        </ul>
      </nav>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    logout () {
      if (confirm('로그아웃 하시겠습니까?')) {
        this.$store.commit('logout')
        alert('로그아웃 되었습니다.')
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
