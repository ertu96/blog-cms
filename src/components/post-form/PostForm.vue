<script lang="ts">
import { useQueryClient } from '@tanstack/vue-query'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { ErrorMessage, Field, Form } from 'vee-validate'
import { defineComponent } from 'vue'
import { boolean, number, string } from 'yup'
import { Category } from '../../interfaces/Category'
import { PostForm } from '../../interfaces/forms/PostForm'
import { useSystemStore } from '../../stores/SystemStore'
import { parseJwt } from '../../utils/parseJwt'

export default defineComponent({
  name: 'PostForm',
  components: {
    ErrorMessage,
    Field,
    Form,
    MdEditor,
  },
  setup() {
    const queryClient = useQueryClient()
    const systemStore = useSystemStore()
    const categories: Category[] | undefined = queryClient.getQueryData([
      'categories',
    ])
    return { categories, systemStore }
  },
  data() {
    return {
      content: '',
      file: null,
      url: '',
      formSchema: {
        fields: [
          {
            label: 'Title',
            name: 'title',
            as: 'input',
            rules: string().required('Required'),
          },
          {
            label: 'Title',
            name: 'title',
            as: 'select',
            rules: number().required('Required').min(1),
          },
          {
            label: 'Publish',
            name: 'publish',
            as: 'checkbox',
            rules: boolean().required('Required'),
          },
        ],
      },
    }
  },
  methods: {
    handleFileChange() {
      if (!this.file) return
      this.url = URL.createObjectURL(this.file.files[0])
    },
    onSubmit(values: PostForm) {
      console.log({
        ...values,
        content: this.content.value,
        thumbnail: this.file.value.files[0],
        author: parseJwt(this.systemStore.getAccessToken).sub,
      })
    },
  },
})
</script>

<template>
  <Form
    class="flex flex-col gap-4 py-4"
    @submit="(_event, values) => onSubmit(values.controlledValues)"
  >
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
        name="category"
        placeholder="Category"
        class="input-bordered input"
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
    <div class="form-control">
      <label class="label flex justify-between">
        <span class="label-text">Thumbnail</span>
      </label>
      <label for="upload" class="flex justify-center">
        <div
          class="flex h-60 w-full cursor-pointer items-center justify-center rounded border"
        >
          <input
            id="upload"
            ref="file"
            type="file"
            class="hidden"
            accept="image/*"
            @change="handleFileChange"
          />
          <img
            v-if="url.length"
            :src="url"
            alt="Thumbnail for new post"
            class="max-h-full"
          />
          <div v-else class="flex flex-col items-center justify-center gap-4">
            <FontAwesomeIcon :icon="['fas', 'image']" size="6x" />
            <div>
              <FontAwesomeIcon :icon="['fas', 'plus']" />
              Click here to upload
            </div>
          </div>
        </div>
      </label>
    </div>

    <div class="form-control">
      <label class="label flex justify-between" for="content">
        <span class="label-text">Content</span>
        <ErrorMessage class="text-sm text-error" name="content" />
      </label>
      <MdEditor id="content" v-model="content" :language="'en-US'" />
    </div>

    <div class="form-control">
      <label class="label cursor-pointer">
        <span class="label-text">Publish</span>
      </label>
      <div class="btn-group">
        <input type="radio" name="options" data-title="Yes" class="btn" />
        <input type="radio" name="options" data-title="No" class="btn" />
      </div>
    </div>

    <button type="submit" class="btn-primary btn mt-6">
      <FontAwesomeIcon :icon="['fas', 'floppy-disk']" size="lg" />
      Save
    </button>
  </Form>
</template>
