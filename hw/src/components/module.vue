<template>
  <div>
    <legend>
      <h2>Module</h2>
    </legend>
    <p>
      由于使用单一状态树，应用的所有状态会集中到一个比较大的对象。当应用变得非常复杂时，store对象就有可能变得相当臃肿。为了解决以上问题，vuex允许我们将store分割成模块（module）。每个模块拥有自己的state、mutation、action、getter、甚至是嵌套子模块——从上之下进行同样的分割。
    </p>
    <p>
      局部状态 <br>
      对于模块内部的mutation和getter，接收的第一个是模块的局部状态对象。<br>
      同样，对于模块内部的 action，局部状态通过 context.state 暴露出来，根节点状态则为 context.rootState：<br>
      对于模块内部的 getter，根节点状态会作为第三个参数暴露出来：
    </p>
    <p>
      命名空间 <br>
      如果希望你的模块具有更高的封装度和复用性，你可以通过添加 namespaced: true 的方式使其成为带命名空间的模块。当模块被注册后，它的所有 getter、action 及 mutation 都会自动根据模块注册的路径调整命名。
    </p>
    <p>

    </p>
  </div>
</template>
<script>
  export default {
    name: 'module'
  }
</script>

<style scoped>

</style>
