<template>
  <div id="app">
    로그인
    <form action="" method="post" @submit="memberLogin">
      <input type="text" name="id" placeholder="아이디" required autofocus> <br>
      <input type="password" name="pw" placeholder="비밀번호" required> <br>
      <button type="submit">로그인</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      id: '',
      pw: '',
      name: ''
    }
  },
  methods: {
    memberLogin (e) {
      e.preventDefault()
      const url = 'http://localhost:3000/member/login'
      const frm = e.target
      const _this = this
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          id: frm.id.value,
          pw: frm.pw.value
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(res => res.json())
        .then(json => {
          if (json === `false`) {
            alert('아이디 또는 비밀번호가 일치하지 않습니다.')
          } else {
            _this.$store.commit('login', json)
            _this.$router.push('/')
            alert('로그인이 완료되었습니다.')
          }
        })
        .catch(error => {
          console.log(error)
        })
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
