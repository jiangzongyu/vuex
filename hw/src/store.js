import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const myPlugin = store => {
  store.subscribe((mutation, state) => {
    console.log(mutation)
    console.log(state)
  })
}
export default new Vuex.Store({
  state: {
    count: 1
  },
  plugins: [myPlugin],
  getters: {
    countToString (state, getters) {
      // 第一个参数是store的state，第二个参数是getters对象
      console.log(getters)
      let arr = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖']
      return arr[state.count]
    },
    byCount (state) {
      return 1
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    incrementByPayload (state, payload) {
      state.count += payload.num
    },
    minus (state) {
      state.count--
    }
  },
  actions: {
    asyncIncrement (context) {
      // Action 函数接受一个与 store 实例具有相同方法和属性的 context 对象，因此你可以调用 context.commit 提交一个 mutation，或者通过 context.state 和 context.getters 来获取 state 和 getters。
      // 但是你应该要注意，context并不是store实例本身；
      // 当我们在之后介绍到 Modules 时，你就知道 context 对象为什么不是 store 实例本身了。你就知道 context 对象为什么不是 store 实例本身了。
      context.commit('increment')
    },
    asyncIncrementByDestruct ({ commit }) {
      // 使用es6的解构赋值
      commit('increment')
    },
    exampleAjax ({ commit }) {
      axios.post('/url').then((data) => {
        if (data.data.status === 1) {
          commit('increment', {
            num: data.data.result.num
          })
        } else {
          console.log(data.data)
        }
      })
    }
  },
  modules: {
    account: {
      namespaced: true,
      state: {
        isLogin: false
      },
      mutations: {
        login (state, payload, rootState) {
          console.log(state)
          console.log(payload)
          console.log(rootState)
          state.isLogin = true
        },
        logout (state) {
          state.isLogin = false
        }
      },
      actions: {
        asyncLogout ({ state, commit, rootState }) {
          setTimeout(() => {
            commit('logout')
            console.log(rootState)
          }, 4000)
        }
      },
     modules: {
       accountIn: {
         namespaced: true,
         state: {
           key: 1
         },
         mutations: {
           add (state) {
             state.key += 2
           }
         },
         actions: {
           asyncAdd ({ state, commit, rootState }) {
             console.log(state)
             // 通过rootState可以拿到其他模块里的数据
             console.log(rootState)
           }
         }
       }
     }
    }
  }
})
