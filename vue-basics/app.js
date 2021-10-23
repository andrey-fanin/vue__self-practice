const App = {
    data() {
        return {
            counter: 0,
            counterTitle: 'Counter'
        }
    }
}

const app = Vue.createApp(App)
/*примет объект для настройки приложения*/

app.mount('#app')
//Vue.createApp(App).mount('#app') - то же самое, что строчка выше, но это последовательно
