import { createApp } from 'vue'
import { createStore } from 'vuex';
import App from './App.vue'

const store = createStore({
    state() {
        return {
            count: 0,
            todos: [
                { id: 1, text: 'wakeup early', done: true },
                { id: 2, text: 'do breakfast', done: true },
                { id: 3, text: 'go to school', done: false },
                { id: 4, text: 'sleep well', done: false },
            ],
        }
    },
    mutations: {
        increment(state, payload) {
            state.count = state.count + payload.value;
        }
    },
    getters: {
        getTodoById: (state) => (id) => {
            return state.todos.find(todo => todo.id === id);
        },
        doneTodos(state) {
            return state.todos.filter((todo) => todo.done);
        },
        doneTodosListCount(state) {
            return state.todos.filter((todo) => todo.done).length;
        }
    },
    actions: {
        increment(context, payload){
            context.commit('increment', payload);
        }
    }
})
const app = createApp(App);
app.use(store);
app.mount('#app');
