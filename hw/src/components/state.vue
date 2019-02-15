<template>
  <div>
    <ul>
      <li>
        Vuex 使用单一状态树——是的，用一个对象就包含了全部的应用层级状态。至此它便作为一个“唯一数据源 (SSOT)”而存在。这也意味着，每个应用将仅仅包含一个 store
        实例。单一状态树让我们能够直接地定位任一特定的状态片段，在调试的过程中也能轻易地取得整个当前应用状态的快照。
      </li>
      <li>
        使用vuex
        <pre>
          详见store.js、main.js
        </pre>
      </li>
      <li>
        在 Vue 组件中获得 Vuex 状态 ：<br>
        那么我们如何在 Vue 组件中展示状态呢？由于 Vuex 的状态存储是响应式的，从 store 实例中读取状态最简单的方法就是在计算属性中返回某个状态：每当 store.state.count 变化的时候,
        都会重新求取计算属性，并且触发更新相关联的 DOM。
        <br>
        1. 通过this.$store.state取值；<br>
        在根实例中注册store选项，该store实例会注入到跟组件下的所有的子组件中。 且子组件能通过this.$store.state访问 <br>
        2. mapState函数
      </li>
      <li>
        组件仍然保有局部状态 <br>
        使用 Vuex 并不意味着你需要将所有的状态放入 Vuex。虽然将所有的状态放到 Vuex 会使状态变化更显式和易调试，但也会使代码变得冗长和不直观。如果有些状态严格属于单个组件，最好还是作为组件的局部状态。你应该根据你的应用开发需要进行权衡和确定。
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "state"
}
</script>

<style scoped>

</style>
