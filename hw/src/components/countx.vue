<template>
  <div>
    <p>count => {{count}}</p>
    <p>{{byCount}}</p>
    <p>this.$store.state.count => {{$store.state.count}}</p>
    <p>转大写：{{countToString}}</p>
    <button @click="add">JustDoIt</button>
    <button @click="$store.commit('minus')"
            :disabled="count <= 0">this.$store.commit('minus')</button>
    <button @click="$store.commit('incrementByPayload', {num: 2})">加2</button>
    <button @click="$store.commit({type: 'incrementByPayload', num: 2})">加2，对象法commit</button>
    <button @click="$store.dispatch('account/accountIn/asyncAdd')">命名空间</button>
  </div>
</template>

<script>
  import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
  export default {
    data () {
      return {
        // count: 1
      }
    },
    name: "countx",
    // 对象法使用mapState，支持alias
    // computed: mapState({
    //   count: state => state.count,
    //   // 将state中的count化名为count1
    //   count1: 'count'
    // }),

    // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组。
    // computed: mapState(['count']),
    // 使用展开运算符：！！这个比较常用
    computed: {
      someLocalComputed (x) {
        // 第一个参数是store的state，第二个参数是getters对象
          let arr = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
          return arr[this.count]
      },
      ...mapState({
        count: 'count',
        count3: 'count'
      }),
      ...mapGetters(['countToString', 'byCount'])
    },
    methods: {
      // 3种映射方式， 同名传字符串数组[]，对象法，展开运算符与组件methods合并
      ...mapMutations({
        // 将this.$store.commit('increment')，映射成this.add
        add: 'increment'
      }),
      ...mapMutations(['incrementByPayload']),
      ...mapActions(['asyncIncrement']),
      ...mapActions({
        aliasAsyncIncrement: 'asyncIncrement'
      })
    },
    mounted () {
      console.log(this.count)
    }
  }
</script>

<style scoped>
  button {
    display: block;
  }
  button:disabled {
    cursor: not-allowed;
  }
</style>
