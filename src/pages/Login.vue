<template>
  <div class=login>
    <h1>{{ title }}</h1>
    <div>Your IP is {{ ip }}</div>
    <div>
      <input type="text" v-model="input.username" placeholder="Username" />
    </div>
    <div>
      <input type="password" v-model="input.password" placeholder="Password" />
    </div>
    <button @click="login">login</button>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      title: 'Zealous',
      ip: '',
      input: {
        username: '',
        password: ''
      },
      login: () => {
        alert('User: ' + this.input.username + ' / Password: ' + this.input.password)
      }
    }
  },

  mounted () {
    this.$http.get('https://httpbin.org/ip').then(result => {
      this.ip = result.body.origin
    }, error => {
      console.error(error)
    })
  }
}
</script>

<style scoped>
button {
  background: rgb(44, 30, 243);
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
}
</style>
