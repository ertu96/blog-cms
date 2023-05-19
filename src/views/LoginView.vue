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
      rules: Yup.string().required().email(),
    },
    {
      label: "Password",
      name: "password",
      as: "input",
      type: "password",
      rules: Yup.string().required(),
    },
  ],
};
</script>

<template>
  <div
    class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto"
  >
    <DynamicForm :schema="formSchema" />
  </div>
</template>
