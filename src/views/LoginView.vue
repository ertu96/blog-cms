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
      label: "Password",
      name: "password",
      as: "input",
      type: "password",
      rules: Yup.string().required("Required"),
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
      :submitLabel="'Login'"
      :onSubmit="onSubmit"
      :schema="formSchema"
    />
  </div>
</template>
