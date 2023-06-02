<script lang="ts">
import { ErrorMessage, Field } from 'vee-validate'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PostFormThumbnail',
  components: { Field, ErrorMessage },
  emits: ['file-updated'],

  data() {
    return {
      url: '',
    }
  },
  methods: {
    handleFileChange(event: Event) {
      if (!event.target) return
      const target = event.target as HTMLInputElement
      const uploadedFile = (target.files as FileList)[0]
      this.url = URL.createObjectURL(uploadedFile)
      this.$emit('file-updated', uploadedFile)
    },
  },
})
</script>

<template>
  <div class="form-control">
    <label class="label flex justify-between">
      <span class="label-text">Thumbnail</span>
      <ErrorMessage class="text-sm text-error" name="thumbnail" />
    </label>
    <label for="upload" class="flex justify-center">
      <div
        class="flex h-80 w-full cursor-pointer items-center justify-center rounded border"
      >
        <Field
          id="upload"
          ref="file"
          name="thumbnail"
          type="file"
          class="hidden"
          accept="image/*"
          :rules="[(value) => !!value || 'File is required']"
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
</template>
