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
        name="title"
        placeholder="Title"
        type="text"
        class="input-bordered input"
      />
    </div>
    <div class="form-control">
      <label class="label flex justify-between" for="category">
        <span class="label-text">Category</span>
        <ErrorMessage class="text-sm text-error" name="category" />
      </label>
      <Field
        id="category"
        as="select"
        name="input"
        placeholder="Category"
        class="input-bordered input"
      >
        <option value="">Choose category</option>
      </Field>
    </div>

    <button type="submit" class="btn-primary btn mt-6">Save</button>
  </Form>
</template>
