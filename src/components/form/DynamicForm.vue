<script lang="ts">
import { ErrorMessage, Field, Form } from "vee-validate";
export default {
  name: "DynamicForm",
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  props: {
    schema: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <Form class="card-body">
    <div
      v-for="{ as, name, label, ...attrs } in schema.fields"
      :key="name"
      class="form-control"
    >
      <label class="label" :for="name"
        ><span class="label-text">{{ label }}</span></label
      >
      <Field
        :as="as"
        :id="name"
        :name="name"
        :placeholder="label"
        v-bind="attrs"
        class="input input-bordered"
      />
      <ErrorMessage :name="name" />
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </Form>
</template>
