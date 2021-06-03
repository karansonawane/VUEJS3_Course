import { createApp } from 'vue'
import { createStore } from 'vuex';
import App from './App.vue'


const counterModule = {
    state() {
        return {
            count: 0,
        }
    },
    mutations: {
        increment(state, payload) {
            state.count = state.count + payload.value;
        }
    },
    getters: {},
    actions: {
        increment(context, payload) {
            context.commit('increment', payload);
        },
    },
};

const todosModule = {
    state() {
        return {
            todos: [
                { id: 1, text: 'wakeup early', done: true },
                { id: 2, text: 'do breakfast', done: true },
                { id: 3, text: 'go to school', done: false },
                { id: 4, text: 'sleep well', done: false },
            ],
        }
    },
    mutations: {},
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
    actions: {},
}

const store = createStore({
    modules: {
        counter: counterModule,
        todos: todosModule,
    },
    state() {
        return {
            // count: 0,  ************* This state condition used in counterModule Modules **************
            // todos: [
            //     { id: 1, text: 'wakeup early', done: true },
            //     { id: 2, text: 'do breakfast', done: true },
            //     { id: 3, text: 'go to school', done: false },
            //     { id: 4, text: 'sleep well', done: false },
            // ],   ************* This todos condition used in todosModule Modules **************
        }
    },
    mutations: {
        // increment(state, payload) {
        //     state.count = state.count + payload.value;
        // }     ************* This mutation condition used in counterModule Modules **************
    },
    getters: {
        // getTodoById: (state) => (id) => {
        //     return state.todos.find(todo => todo.id === id);
        // },
        // doneTodos(state) {
        //     return state.todos.filter((todo) => todo.done);
        // },
        // doneTodosListCount(state) {
        //     return state.todos.filter((todo) => todo.done).length;
        // }   ************* This getter condition used in todosModule Modules **************
    },
    actions: {
        // increment(context, payload){
        //     context.commit('increment', payload);
        // }     ************* This action condition used in counterModule Modules **************
    }
})
const app = createApp(App);
app.use(store);
app.mount('#app');
