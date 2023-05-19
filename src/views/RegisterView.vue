<script setup lang="ts">
import * as Yup from "yup";
import DynamicForm from "../components/form/DynamicForm.vue";

const formSchema = {
  fields: [
    {
      label: "E-Mail",
      name: "email",
      as: "input",
      type: "email",
      rules: Yup.string().required("Required").email("Invalid e-mail address"),
    },
    {
      label: "First Name",
      name: "firstname",
      as: "input",
      rules: Yup.string().required("Required").min(3, "Too short"),
    },
    {
      label: "Last Name",
      name: "lastname",
      as: "input",
      rules: Yup.string().required("Required").min(3, "Too short"),
    },
    {
      label: "Password",
      name: "password",
      as: "input",
      type: "password",
      rules: Yup.string().required("Required").min(8, "Too short"),
    },
    {
      label: "Re-enter password",
      name: "rePassword",
      as: "input",
      type: "password",
      rules: Yup.string()
        .required("Required")
        .min(8, "Too short")
        .oneOf([Yup.ref("password")], "Passwords must match"),
    },
  ],
};

const onSubmit = () => {
  console.log("submit");
};
</script>

<template>
  <div class="card flex-shrink-0 w-full max-w-sm mx-auto">
    <DynamicForm
      :submitLabel="'Register'"
      :onSubmit="onSubmit"
      :schema="formSchema"
    />
  </div>
</template>
