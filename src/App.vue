<template>
  <div>
    <!-- Pass content to the slot -->
    <BaseCard>
      <h2>Hello Everybody!</h2>
      <p> // (Custom content from parent)  How you Doing ?</p>
    </BaseCard>

    <!-- Named slots -->
    <BaseLayout>
      <template v-slot:header>
        <h1>Welcome to Attariya City</h1>
      </template>

      <p>Main content goes here. like
        It's a beautiful place with rich culture and history. You can explore the local markets, visit ancient temples, and enjoy the scenic views of the mountains surrounding the city. Don't forget to try the local cuisine, which is known for its unique flavors and spices. Whether you're interested in history, culture, or just want to relax and enjoy the scenery, Attariya City has something for everyone.
      </p>

      <template v-slot:footer>
        <p>&copy; 2025 Attariya City</p>
      </template>
    </BaseLayout>

    <!-- Scoped slot -->
    <ItemList :items="[{ id: 1, name: 'Nature Beauty' }, { id: 2, name: 'Smooth Environment' }, { id: 3, name: 'Friendly People' }]">
      <template v-slot:default="{ item }">
        <strong>{{ item.name }}</strong>
      </template>
    </ItemList>


    <!-- Dynamic component workings-->
     <button @click="currentView = 'HomePage'">Home</button>
     <button @click="currentView = 'AboutPage'">About</button>
    <!--dynamic component-->
    <!--for remembering state if i have to switch back use keep-alive-->
    <keep-alive>
    <component :is="currentView"></component>
    </keep-alive>
      <!--for lifecycle hooks-->

      <LifeCycleDemo />
    
  </div>
</template>

<script>
import BaseCard from './components/BaseCard.vue'
import BaseLayout from './components/BaseLayout.vue'
import ItemList from './components/ItemList.vue'
 // for dynamic components
 import HomePage from './components/ForDynamicComponents/HomePage.vue'
  import AboutPage from './components/ForDynamicComponents/AboutPage.vue'
 
// lifecyclehooks
import LifeCycleDemo from './components/ForLifeCycleHooks/LifeCycleDemo.vue'
export default { 

//dynamic 
data () {
  return {
    currentView: 'HomePage' // default view
  }
},
  
  
  components: {
    BaseCard,
    BaseLayout,
    ItemList,
    //dynamic
    HomePage,
    AboutPage,
    //lifecycle hooks
    LifeCycleDemo
  }}

</script>
