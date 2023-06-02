<script lang="ts" setup>
import { ErrorMessage, Field } from 'vee-validate'
import { string } from 'yup'
</script>

<template>
  <div class="form-control">
    <label class="label cursor-pointer">
      <span class="label-text">Publish</span>
      <ErrorMessage class="text-sm text-error" name="publish" />
    </label>
    <div class="btn-group">
      <Field
        as="input"
        name="publish"
        type="radio"
        class="btn"
        data-title="Yes"
        value="true"
        :rules="string().required()"
      />
      <Field
        as="input"
        name="publish"
        placeholder="Title"
        type="radio"
        class="btn"
        data-title="No"
        value="false"
        :rules="string().required()"
      />
    </div>
  </div>
</template>
