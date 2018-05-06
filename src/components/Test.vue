<template>
  <div class=test>
    <h1>
      <span v-text="label">Rider List</span>
    </h1>
    <item-list></item-list>
    <div>
      <input type="text" v-model="label" />
    </div>
    <button @click="testMe">Pick Me</button>
  </div>
</template>

<script>
import ItemList from './ItemList'
export default {
  name: 'test',
  components: { 'item-list': ItemList },
  data () {
    return {
      label: 'Rider List',
      testMe: () => {
        console.log('test')
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
