    <!--Manual validation-->

<template>
    <div class="p-6 max-w-md mx-auto">
        <h2 class="text-2xl font-bold mb-4">{{ isLogin ? "Login" : "Signup" }} Form</h2> 
    
        <button
            @click="isLogin = !isLogin"
            class="mb-4 bg-gray-600 text-white px-4 py-2 rounded">
            Switch to {{ isLogin ? "Signup" : "Login" }}
        </button>
        
        <!--Login form-->
        <form v-if="isLogin" @submit.prevent="handleLogin">
            <!--input-->
            <div class="mb-4">
                <label>Email:</label>
                <!--binding input value using v-model-->
                <input v-model="loginForm.email" type="email" class="border rounded px-2 py-1 w-full"/>
                <!--if loginemail has error-->
                <p v-if="errors.loginEmail" class="text-red-500 text-sm">{{ errors.loginEmail }}</p>
            </div>

            <!--password input-->
            <div class="mb-4">
                <label>Password:</label>
                <input v-model="loginForm.password" type="password" class="border rounded px-2 py-1 w-full"/>
                <p v-if="errors.loginPassword" class="text-red-500 text-sm">{{ errors.loginPassword }}</p>
            </div>

            <button class="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        </form>

        <!--for signup form-->
        <form v-else @submit.prevent="handleSignup">
            <div class="mb-4">
                <label>Username:</label>
                <input v-model="signupForm.username" class="border rounded px-2 py-1 w-full"/>
                <p v-if="errors.signupUsername" class="text-red-500 text-sm">{{ errors.signupUsername }}</p>
            </div>

            <div class="mb-4">
                <label>Email:</label>
                <input v-model="signupForm.email" type="email" class="border rounded px-2 py-1 w-full" />
                <p v-if="errors.signupEmail" class="text-red-500 text-sm">{{ errors.signupEmail }}</p>
            </div>

            <div class="mb-4">
                <label>Password:</label>
                <input v-model="signupForm.password" type="password" class="border rounded px-2 py-1 w-full" />
                <p v-if="errors.signupPassword" class="text-red-500 text-sm">{{ errors.signupPassword }}</p>
            </div>

            <div class="mb-4">
                <label>Confirm Password:</label>
                <input v-model="signupForm.confirmPassword" type="password" class="border rounded px-2 py-1 w-full" />
                <p v-if="errors.signupConfirmPassword" class="text-red-500 text-sm">{{ errors.signupConfirmPassword }}</p>
            </div>

            <button class="bg-blue-600 text-white px-4 py-2 rounded">Signup</button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            // Boolean: true → show login form, false → show signup form
            isLogin: true,

            //data model for login form inputs
            loginForm: {
                email: "",
                password: ""
            },

            signupForm: {
                username: "",
                email: "",
                password: "",
                confirmPassword: "" // Fixed typo: comfirmPassword → confirmPassword
            },

            //object to hold error messages
            errors: {}
        }
    },

    methods: {
        //for login form submission
        handleLogin() {
            this.errors = {}; //clear previous errors

            // email validation
            if (!this.loginForm.email) {
                this.errors.loginEmail = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(this.loginForm.email)) {
                //simple regex: something@something.something
                this.errors.loginEmail = "Invalid email format";
            }

            // password validation
            if (!this.loginForm.password) {
                this.errors.loginPassword = "Password is required";
            }

            // if no errors, then login successful
            if (Object.keys(this.errors).length === 0) {
                alert("Successfully logged in!");
            }
        },

        //methods for signup form
        handleSignup() {
            this.errors = {}; //clear previous errors

            //validation
            if (!this.signupForm.username) {
                this.errors.signupUsername = "Username is required";
            }

            if (!this.signupForm.email) {
                this.errors.signupEmail = "Email is required";
            } else if (!/\S+@\S+\.\S+/.test(this.signupForm.email)) {
                this.errors.signupEmail = "Invalid email format";
            }

            if (!this.signupForm.password) {
                this.errors.signupPassword = "Password is required";
            } else if (this.signupForm.password.length < 6) {
                this.errors.signupPassword = "Password must be at least 6 characters";
            }

            if (!this.signupForm.confirmPassword) {
                this.errors.signupConfirmPassword = "Please confirm your password";
            } else if (this.signupForm.password !== this.signupForm.confirmPassword) {
                this.errors.signupConfirmPassword = "Passwords do not match";
            }

            // if no errors, signup successful
            if (Object.keys(this.errors).length === 0) {
                alert("Successfully signed up!");
            }
        }
    }
}
</script>