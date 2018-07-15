<template>
  <div id="app">
    <form action="" method="post" @submit="memberAdd">
      <input type="text" name="id" placeholder="아이디" required autofocus> <br>
      <input type="password" name="pw" placeholder="비밀번호" required> <br>
      <input type="text" name="name" placeholder="이름" required> <br>
      <button type="submit">회원가입</button>
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
    memberAdd (e) {
      e.preventDefault()
      const url = 'http://localhost:3000/member/join'
      const frm = e.target
      const _this = this
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({
          id: frm.id.value,
          pw: frm.pw.value,
          name: frm.name.value
        }),
        headers: new Headers({
          'Content-Type': 'application/json'
        })
      })
        .then(res => res.json())
        .then(json => {
          if (json === false) {
            alert('중복된 아이디 입니다.')
          } else {
            alert('회원가입이 완료되었습니다.')
            _this.$router.push('/')
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
