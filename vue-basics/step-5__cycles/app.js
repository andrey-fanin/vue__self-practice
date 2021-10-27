Vue.createApp({
    data: () => ({   
        myHtml: '<h1>Vue 3 App</h1>',
        title: 'This is title',
        person: {
            firstName: 'Andrey',
            lastName: 'Fanin',
            age: 25
        },
        items: [1, 2, 3, 4, 5, 6]        
    }),
    methods: {
        addItem() {
            this.items.unshift(this.$refs.myInput.value)
            this.$refs.myInput.value = ' '
        },
        remove(i) {
            //@click.right.prevent='items.splice(i, 1)'
            this.items.splice(i, 1)
        },
        log(item){
            console.log('log item: ', item)
        }
    },
    /*тут добавим условия для фильтра */
    computed: {
        evenItems()    {
            return this.items.filter(i => i % 2 === 0)
        }
    }
}).mount('#app')