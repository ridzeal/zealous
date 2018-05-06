<template>
  <div class=test>
    <h1>{{label}}</h1>
    <ul>
      <li :key="rider.id" v-for="rider in riders">
        {{ rider.name }} - {{rider.class}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
      label: "Rider List",
      riders: [
        {id:1, name: "Kuuga", class: "SS"},
        {id:2, name: "Decade", class: "S"},
        {id:3, name: "Hibiki", class: "B"}
      ]
    }
  }
}
</script>
