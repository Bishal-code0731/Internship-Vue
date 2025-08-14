<template>
    <div>
        <!-- Display the message passed from parent -->
        <h3>{{ message }}</h3>

         <!-- Button to send event to parent -->
    <button @click="notifyParent">Click Me!</button>
    
    </div>
    </template>

    <script>
export default {

    name: 'MyLocalComponent',
    props: {
        message: {
        type: String,   // Must be a constructor
        required: true     // Boolean
    }   // Props to receive data
},
   methods: {
     notifyParent() {
  this.$emit('childClicked', 'Hello child from local component')
}
   }
}
</script>

<style scoped>
    h2 {
        color: blue;
            }
            button {
                margin-top: 10px;
            }
            </style>
