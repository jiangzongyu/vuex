<template>
  <div>
    <h2>Getter</h2>
    <ul>
      <li>
        有时候我们需要从 store 中的 state 中派生出一些状态，例如对列表进行过滤并计数：
        <pre>
          computed: {
            doneTodosCount () {
              return this.$store.state.todos.filter(todo => todo.done).length
            }
          }
        </pre>
        <p>
          如果有多个组件需要用到此属性，我们要么复制这个函数，或者抽取到一个共享函数然后在多处导入它——无论哪种方式都不是很理想。
        </p>
      </li>
      <li>
        Vuex 允许我们在 store 中定义“getter”（可以认为是 store 的计算属性）。就像计算属性一样，getter 的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
      </li>
      <li>
        访问getters <br>
        1. 将store import到需要的组件中，然后访问store.getters.someKeys <br>
        2. 将store在vue根实例实例化时注入到根实例中，通过this.$store.getters.someKeys <br>
        3. 通过mapGetters将getters映射到组件的私有属性中
      </li>
      <li>
        通过方法访问 <br>
        你也可以通过让 getter 返回一个函数，来实现给 getter 传参。在你对 store 里的数组进行查询时非常有用。
      </li>
      <li>
        <a href="https://vuex.vuejs.org/zh/guide/getters.html" target="_blank">getter设置方式</a>
      </li>
      <li>
        我们看一下我们的 getters =>>>> {{countToStringX}}
      </li>
    </ul>
  </div>
</template>

<script>
  import store from '../store'
  import { mapGetters } from 'vuex'
  console.log(store.getters.countToString)
  export default {
    name: 'getter',
    // mapGetters
    // 当你的计算属性和Getters的key同名的时候可以穿一个数组
    computed1: mapGetters(['countToString']),
    // 重命名 将store中的countToString重命名成countToStringX
    computed: mapGetters({
      countToStringX: 'countToString'
    }),
    // 同样也可以使用对象的展开运算符将getters与本地的计算属性合并
    computed2: {
      ...mapGetters(['countToString']),
      someLocalComputed () {
        return 'hahahh'
      }
    },
    mounted () {
      console.log(this.$store.getters.countToString)
    }
  }
</script>

<style scoped>

</style>
