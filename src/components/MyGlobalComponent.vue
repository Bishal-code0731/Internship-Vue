<template>
    <div>
        <!-- Display the message passed from parent -->
    <h2>{{ message }}</h2>
    <button @click="sendMessage">Send to Parent</button>
</div>
    </template> 

    <script>
    export default {
        name: 'MyGlobalComponent',
        props: {
            message: {
                type: String,
                required: true
            }
        },
        methods: {
            sendMessage() {
                // Emit an event to notify the parent component
                this.$emit('globalClicked', 'Hello from MyGlobalComponent!')
            }
        }
        
    
    }
    </script>