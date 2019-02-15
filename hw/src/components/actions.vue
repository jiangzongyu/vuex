<template>
  <div>
    <legend>
      <h2>Action</h2>
    </legend>
    <p>
      Action 类似于 mutation，不同在于：<br>
      + Action 提交的是 mutation，而不是直接变更状态。<br>
      + Action 可以包含任意异步操作。<br>
      这看起来是不是脱裤子**？为啥不直接提交mutation？<br>
      乍一眼看上去感觉多此一举，我们直接分发 mutation 岂不更方便？实际上并非如此，还记得 mutation 必须同步执行这个限制么？Action 就不受约束！我们可以在 action 内部执行异步操作：
    </p>
    <p>
      Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。当我们在之后介绍到 Modules 时，你就知道 context 对象为什么不是 store 实例本身了。
    </p>
    <p>
      使用 action <br>
      1. store.dispatch('action名') <br>
      2. this.$store.dispatch('action名') <br>
      3. 在组件中分发 Action
      你在组件中使用 this.$store.dispatch('xxx') 分发 action，或者使用 mapActions 辅助函数将组件的 methods 映射为 store.dispatch 调用（需要先在根节点注入 store）；
      mapActions(['actionName'])/mapActions({alias: 'actionsName'})
    </p>
    <p>
      组合 Action！这是一个重点，会用得到啊~~ <br>
      in-socket.js => Line53
    </p>
  </div>
</template>

<script>
  export default {
    name: 'actions'
  }
</script>

<style scoped>

</style>
