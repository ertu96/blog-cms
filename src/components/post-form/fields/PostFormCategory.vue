<script setup lang="ts">
import { useQueryClient } from '@tanstack/vue-query'
import { ErrorMessage, Field } from 'vee-validate'
import { string } from 'yup'
import { Category } from '../../../interfaces/Category'

const queryClient = useQueryClient()
const categories: Category[] | undefined = queryClient.getQueryData([
  'categories',
])
</script>

<template>
  <div class="form-control">
    <label class="label flex justify-between" for="category">
      <span class="label-text">Category</span>
      <ErrorMessage class="text-sm text-error" name="category" />
    </label>
    <Field
      id="category"
      as="select"
      name="category"
      placeholder="Category"
      class="input-bordered input"
      :rules="string().required()"
    >
      <option value="">Choose category</option>
      <option
        v-for="category in categories"
        :key="category.id"
        :value="category.id"
      >
        {{ category.name }}
      </option>
    </Field>
  </div>
</template>
