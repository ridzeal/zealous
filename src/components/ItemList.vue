<template>
  <ul class="item-list">
    <li :key="rider.id" v-for="rider in riders">
      {{ rider.name }} - {{rider.class}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'item-list',
  data () {
    return {
      riders: [
        {id:1, name: "Kuuga", class: "SS"},
        {id:2, name: "Decade", class: "S"},
        {id:3, name: "Hibiki", class: "B"},
        {id:4, name: "Kabuto", class: "A"}
      ]
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  border: 1px solid;
}
</style>