<script setup lang="ts">
import { ErrorMessage, Field } from 'vee-validate'
import { string } from 'yup'
</script>

<template>
  <div class="form-control">
    <label class="label flex justify-between" for="title">
      <span class="label-text">Title</span>
      <ErrorMessage class="text-sm text-error" name="title" />
    </label>
    <Field
      id="title"
      as="input"
      name="title"
      placeholder="Title"
      type="text"
      class="input-bordered input"
      :rules="string().required().min(3).max(100)"
    />
  </div>
</template>
