<template>
  <form @submit.prevent="handleSubmit(onSubmit)">
    <div>
      <label>Email:</label>
      <!-- Field automatically binds with validation -->
      <Field name="email" type="email" />
      <!-- Error message display -->
      <ErrorMessage name="email" />
    </div>

    <div>
      <label>Password:</label>
      <Field name="password" type="password" />
      <ErrorMessage name="password" />
    </div>

    <button type="submit">Login</button>
  </form>
</template>

<script>
import { useForm, Field, ErrorMessage } from "vee-validate";
import * as Yup from "yup";

export default {
  components: { Field, ErrorMessage },
  setup() {
    // Define validation schema with Yup
    const { handleSubmit } = useForm({
      validationSchema: Yup.object({
        email: Yup.string().email("Invalid email").required("Email required"),
        password: Yup.string().min(6, "At least 6 characters").required("Password required")
      })
    });

    // What happens when form is submitted
    const onSubmit = (values) => {
      alert("Login with " + JSON.stringify(values));
    };

    return { handleSubmit, onSubmit };
  }
};
</script>
