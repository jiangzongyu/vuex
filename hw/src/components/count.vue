<template>
  <div>
    <p>{{count}}</p>
    <button @click="increment">增加</button>
  </div>
</template>

<script>
  export default {
    name: "count",
    data() {
      return {
        count: 0
      }
    },
    methods: {
      increment() {
        this.count++
      }
    }
  }
</script>

<style scoped>

</style>
