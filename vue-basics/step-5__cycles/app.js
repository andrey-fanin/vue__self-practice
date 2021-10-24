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
    })
}).mount('#app')