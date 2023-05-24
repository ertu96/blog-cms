<script lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate'
import { defineComponent } from 'vue'
import { string } from 'yup'

export default defineComponent({
  name: 'CategoryCreateDialog',
  components: { Form, Field, ErrorMessage },
  setup() {
    const onSubmit = (values: any) => {
      console.log(values)
    }
    return { onSubmit, string }
  },
  methods: {},
})
</script>

<template>
  <input id="create-category" type="checkbox" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <h3 class="text-lg font-bold">New Category</h3>
      <Form ref="createCategoryForm" @submit="onSubmit">
        <div class="form-control">
          <label class="label flex justify-between" for="name">
            <span class="label-text">Name</span>
            <ErrorMessage class="text-sm text-error" name="name" />
          </label>
          <Field
            id="name"
            as="input"
            name="name"
            placeholder="Provide a good name for your category"
            type="text"
            class="input-bordered input"
            :rules="string().required('Required')"
          />
        </div>
        <div class="modal-action">
          <label for="create-category" class="btn-ghost btn">Cancel</label>
          <button class="btn-success btn">Create</button>
        </div>
      </Form>
    </div>
  </div>
</template>
