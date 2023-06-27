<script lang="ts">
import { useMutation } from '@tanstack/vue-query'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import { ErrorMessage, Form } from 'vee-validate'
import { defineComponent, ref } from 'vue'
import { useToast } from 'vue-toastification'
import { createPost } from '../../api/post/createPost'
import { uploadThumbnail } from '../../api/post/uploadThumbnail'
import { Post } from '../../interfaces/Post'
import { PostForm } from '../../interfaces/forms/PostForm'
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
    const systemStore = useSystemStore()
    const content = ref('')
    let file: File | null = null
    let postToSave: Post | null = null

    const toast = useToast()
    const post = useMutation({
      mutationFn: (post: PostForm | Post) => createPost(post),
      onSuccess: () => {
        toast.success('New post created')
      },
      onError: (err) => {
        toast.error('Failed to create new post')
        console.error(err)
      },
    })

    const thumbnail = useMutation({
      mutationFn: (file: File) => uploadThumbnail(file),
      onSuccess: (data) => {
        if (!postToSave) return
        post.mutate({
          ...postToSave,
          thumbnail: data.publicId,
        })
      },
      onError: (err) => {
        toast.error('Failed to upload thumbnail')
        console.error(err)
      },
    })

    const onSubmit = (values: any) => {
      postToSave = {
        ...values,
        content: content,
        author: parseJwt(systemStore.getAccessToken).sub,
      }
      thumbnail.mutate(file as File)
    }

    const handleFileUpdated = (uploadedFile: File | null) => {
      file = uploadedFile
    }
    return {
      systemStore,
      post,
      thumbnail,
      content,
      file,
      onSubmit,
      handleFileUpdated,
    }
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
