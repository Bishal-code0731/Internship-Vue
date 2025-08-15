<template>
    <div>

         <h1>{{message}}</h1>
         <button @click="changeMessage">Change Message</button>
    </div>
    </template>

    <script>
export default {
    data () {
        return {
            message: 'That is  all for now.'
        }
    },

    beforeCreate() {
        console.log('beforeCreate-> data is not ready yet')

    },
    created () {
        console.log('created -> data is ready:', this.message)
    },
    beforeMount() {
        console.log('beforeMount -> template ready, not in DOM yet')
    },
    mounted () {
        console.log('mounted -> component is in the DOM now')
    },
    beforeUpdate() {
        console.log('beforeUpdate -> data changed, DOM is not updated yet')
    },
    beforeUnmount() {
        console.log('beforeUnmount -> component about to be removed')
    },
    unmounted () {
        console.log ('unmounted -> component removed from DOM')
    },

    methods: {
        changeMessage() {
            this.message = 'Thank you, Hope you enjoyed your time here!'
        }
    }
}
</script>