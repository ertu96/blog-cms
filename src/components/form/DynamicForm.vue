<script lang="ts">
import { ErrorMessage, Field, Form } from 'vee-validate'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'DynamicForm',
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
        onSubmit: {
            type: Function,
            required: true,
        },
        submitLabel: {
            type: String,
            required: true,
        },
    },
})
</script>

<template>
    <Form class="card-body" @submit="onSubmit()">
        <div
            v-for="{ as, name, label, ...attrs } in schema.fields"
            :key="name"
            class="form-control"
        >
            <label class="label flex justify-between" :for="name">
                <span class="label-text">{{ label }}</span>
                <ErrorMessage class="text-sm text-error" :name="name" />
            </label>
            <Field
                :id="name"
                :as="as"
                :name="name"
                :placeholder="label"
                v-bind="attrs"
                class="input-bordered input"
            />
        </div>
        <button type="submit" class="btn-primary btn mt-6">
            {{ submitLabel }}
        </button>
    </Form>
</template>
