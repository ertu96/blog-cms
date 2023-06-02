<script lang="ts">
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { ErrorMessage, Form } from 'vee-validate'
import { defineComponent } from 'vue'
import { useSystemStore } from '../../stores/SystemStore'
import { parseJwt } from '../../utils/parseJwt'
import PostFormCategory from './fields/PostFormCategory.vue'
import PostFormPublish from './fields/PostFormPublish.vue'
import PostFormThumbnail from './fields/PostFormThumbnail.vue'
import PostFormTitle from './fields/PostFormTitle.vue'

export default defineComponent({
  name: 'PostForm',
  components: {
    Form,
    PostFormTitle,
    PostFormCategory,
    PostFormThumbnail,
    MdEditor,
    ErrorMessage,
    PostFormPublish,
  },
  setup() {
    return { systemStore: useSystemStore() }
  },
  data() {
    return {
      content: '',
      file: null as File | null,
    }
  },
  methods: {
    onSubmit(values: any) {
      console.log({
        ...values,
        content: this.content,
        thumbnail: this.file,
        author: parseJwt(this.systemStore.getAccessToken).sub,
      })
    },
    handleFileUpdated(file: File | null) {
      this.file = file
    },
  },
})
</script>

<template>
  <Form class="flex flex-col gap-4 py-4" @submit="onSubmit">
    <PostFormTitle />
    <PostFormCategory />
    <PostFormThumbnail @file-updated="handleFileUpdated" />
    <div class="form-control">
      <label class="label flex justify-between" for="content">
        <span class="label-text">Content</span>
        <ErrorMessage class="text-sm text-error" name="content" />
      </label>
      <MdEditor id="content" v-model="content" :language="'en-US'" />
    </div>
    <PostFormPublish />
    <button type="submit" class="btn-primary btn mt-6">
      <FontAwesomeIcon :icon="['fas', 'floppy-disk']" size="lg" />
      Save
    </button>
  </Form>
</template>
