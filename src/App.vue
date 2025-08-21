  <!--Third-Party Validation (VeeValidate + Yup)-->

<template>
  <div id="app">
    <!-- <AuthForm/>  -->
    <!-- <MyLogin/>  -->
   <!-- <MySignup/>   -->
    <!-- <MyMySignup/>  -->
     <!--  <LoginWithValidation/>  -->
       <LoginSignup />
  </div>
  </template>

  <script>

// import AuthForm from "./components/AuthForm.vue";
//import MyLogin from "./components/MyLogin.vue";
// import MySignup from "./components/MySignup.vue";
// import MyMySignup from "./components/MyMySignup.vue";
// import LoginWithValidation from "./components/LoginWithValidation.vue";
import LoginSignup from "./components/LoginSignup.vue";
export default {
  components: // {AuthForm}
                //{MyLogin}
                //{MySignup}
              //  {MyMySignup}
              //  {LoginWithValidation}
              { LoginSignup }

}
</script>
