<script setup lang="ts">
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { ErrorMessage, Field, Form } from 'vee-validate'
import { ref } from 'vue'
import PageTitle from '../components/layout/PageTitle.vue'

const content = ref('')

const onSubmit = () => {
  console.log('submit')
}
</script>

<template>
  <PageTitle>New Post </PageTitle>
  <Form class="flex flex-col gap-4 py-4" @submit="onSubmit">
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
    <div class="form-control">
      <label class="label flex justify-between" for="content">
        <span class="label-text">Content</span>
        <ErrorMessage class="text-sm text-error" name="content" />
      </label>
      <MdEditor id="content" v-model="content" :language="'en-US'" />
    </div>
    <button type="submit" class="btn-primary btn mt-6">Save</button>
  </Form>
</template>
