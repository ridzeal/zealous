<template>
  <div class=test>
    <h1>
      <span v-text="label">Rider List</span>
    </h1>
    <ul>
      <li :key="rider.id" v-for="rider in riders">
        {{ rider.name }} - {{rider.class}}
      </li>
    </ul>
    <div>
      <input type="text" v-model="label" />
    </div>
    <button @click="testMe">Pick Me</button>
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
        {id:3, name: "Hibiki", class: "B"},
        {id:4, name: "Kabuto", class: "A"}
      ],
      testMe: () => {
        console.log('test');
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

ul {
  list-style-type: none;
  padding: 0;
}

li {
  border: 1px solid;
}
</style>
