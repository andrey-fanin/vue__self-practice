const App = {
    data() {
        return {
            placeholderString: "Enter note name",
            title: 'Notes',
            inputValue: ''
        }
    },

    methods: {
      inputChangeHandler(event) {
          this.inputValue = event.target.value
      }
    }
}

const app = Vue.createApp(App)

app.mount('#app')
