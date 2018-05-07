<template>
  <div class=login>
    <h1>{{ title }}</h1>
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
      input: {
        username: '',
        password: ''
      },
      login: () => {
        alert('User: ' + this.input.username + ' / Password: ' + this.input.password)
      }
    }
  }
}
</script>

<style scoped>
button {
  background: #A13;
  color: white;
  padding: 10px 20px;
  border-radius: 30px;
}
</style>
