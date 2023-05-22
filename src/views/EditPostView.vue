<script setup lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate'
import PageTitle from '../components/layout/PageTitle.vue'
</script>

<template>
  <PageTitle>New Post </PageTitle>
  <Form class="flex flex-col gap-4 py-4">
    <div class="form-control">
      <label class="label flex justify-between" for="title">
        <span class="label-text">Title</span>
        <ErrorMessage class="text-sm text-error" name="title" />
      </label>
      <Field
        id="title"
        as="input"
        name="input"
        placeholder="Title"
        type="text"
        class="input-bordered input"
      />
    </div>
    <button type="submit" class="btn-primary btn mt-6">Save</button>
  </Form>
</template>
