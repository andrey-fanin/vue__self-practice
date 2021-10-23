const App = {
    data() {
        return {
            placeholderString: "Enter note name",
            title: 'Notes',
            inputValue: '',
            notes: ['Note 1', 'Note 2']
        }
    },

    methods: {
        // inputChangeHandler(event) {
        //     this.inputValue = event.target.value
        // },
        //работал для @input='inputChangeHandler'
        addNewNote() {
            if (this.inputValue.trim() !== '') 
                this.notes.push(this.inputValue)
                this.inputValue = ''                        
        },
        toUpperCase(item) {
            return item.toUpperCase()
        },
        removeNote (idx) {
            this.notes.splice(idx, 1)
        },
        doubleCount() {
            return this.notes.length * 2
        }
    },
    //   inputKeyPress(event) {
    //       if (event.key === 'Enter')
    //       this.addNewNote()           
    //   }    
    computed: {        
        doubleCountComputed() {
            return this.notes.length * 2
        }
    },
    watch: {
        inputValue(value) {
            if (value.length > 20) {
                this.inputValue = ''
            }
        }
    }
}

const app = Vue.createApp(App)

app.mount('#app')
