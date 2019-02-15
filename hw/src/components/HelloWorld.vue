<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <ul class="ul-list">
      <li>
        + state: 驱动应用的数据源
      </li>
      <li>
        + view：以声明的方式将state迎神到视图上
      </li>
      <li>
        + actions：响应view上的用户输入导致的状态变化
      </li>
    </ul>
    <p>
      Vuex是一个Vue.js应用程序的 <strong>状态管理模式</strong>。它采用集中式存储管理应用的所有组件的状态，并以 <strong>相应的规则</strong>保证状态以一种
      <strong>可预测</strong>的方式发生变化。
    </p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    }
  }
</script>

<style>
  .ul-list {
    list-style: none;
  }
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
