<template>
  <div>
    <legend>
      <h2>Mutations /mju:ˈteɪʃn/ n. 突变;变异;变化;转变</h2>
      <h2>Mutation 必须是同步函数</h2>
    </legend>
    <p>
      更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type) 和 一个 回调函数
      (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
    </p>
    <p>
      你不能直接调用一个 mutation handler。这个选项更像是事件注册：“当触发一个类型为 increment 的 mutation 时，调用此函数。”要唤醒一个 mutation handler，你需要以相应的 type
      调用 store.commit 方法：
    </p>
    <p>
      1. store.commit('increment')，这么干需要import store<br>
      2. this.$store.commit('minus')，需要在vue根实例化的时候将store注入到根实例中
      3. mapMutations，将commit mutations映射到组件的methods中
    </p>
    <p>
      如何给mutation传递参数呢？<br>
      <strong>提交载荷 Payload</strong>：你可以向store.commit传入额外的参数，即mutation方法除了state以外的参数。在大多数情况下，<strong>载荷应该是一个对象</strong>，这样可以包含多个字段并且记录的
      mutation 会更易读： <br>

    </p>
    <p>
      对象风格的提交 <br>
    当使用对象风格的提交方式，整个对象都作为载荷传给 mutation 函数，因此 handler 保持不变：
    </p>
    <pre>
     store.commit({
        type: 'incrementByPayload',
        num: '2'
      })
  </pre>
  </div>
</template>

<script>
  export default {}
</script>
<style>

</style>
