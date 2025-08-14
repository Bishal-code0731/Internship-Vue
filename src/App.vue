<template>
  <div>
    <h1>Main App</h1>


    
    <!-- Using the global component -->
    <my-global-component message="Hello from Global Component!"
    @globalClicked="handleGlobalClick" ></my-global-component>
    <p>Message from Global Component: {{ globalMessage }}</p>

    <!-- Using the local component -->
    <my-local-component message="Hello from My Local Component!"></my-local-component>

     <!-- Pass dynamic data for local component prop-->
      <my-local-component :message="staticMessage"
       @childClicked="handleChildMessage"></my-local-component>

       <!-- Display message received from child -->
        <p>Message from child: {{ childMessage }}</p>
    
    <!-- Reusing the global component with dynamic prop -->
    <my-global-component :message="dynamicMessage"></my-global-component>
  </div>
</template>

<script>
import MyLocalComponent from './components/MyLocalComponent.vue'

export default {
  name: 'App',

  // Register local components
  components: {
    MyLocalComponent
  },

  // Component data
  data() {
    return {
      dynamicMessage: 'This is dynamic data from App.vue',
      staticMessage: 'This is static data for local component',
      childMessage: '',
       globalMessage: ''
    }
  },
  methods: {
  handleChildMessage(message) {
    this.childMessage = message;
  },

      handleGlobalClick(message) {
      this.globalMessage = message
    }
}


}
</script>

<style>
h3 {
    color: green;
}
</style>
