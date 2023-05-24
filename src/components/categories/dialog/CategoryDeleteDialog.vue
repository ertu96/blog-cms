<script lang="ts">
import { useMutation } from '@tanstack/vue-query'
import { defineComponent } from 'vue'
import { useToast } from 'vue-toastification'
import { deleteCategory } from '../../../api/category/deleteCategory'
import { useCategoryStore } from '../../../stores/CategoryStore'
import { capitalize } from '../../../utils/capitalize'

export default defineComponent({
  name: 'CategoryDeleteDialog',
  setup() {
    const categoryStore = useCategoryStore()
    const toast = useToast()
    const { mutate } = useMutation({
      mutationFn: () =>
        deleteCategory(
          categoryStore.getCategoryDeletion &&
            categoryStore.getCategoryDeletion.id
        ),
      onSuccess: () => {
        toast.success('Category deleted')
        categoryStore.setCategoryDeletion(null)
      },
      onError: (err) => {
        toast.error('Failed to delete category')
        console.log(err)
      },
    })
    return { mutate, categoryStore, capitalize }
  },
})
</script>

<template>
  <input id="delete-category" type="checkbox" class="modal-toggle" />
  <label for="delete-category" class="modal cursor-pointer">
    <label class="modal-box relative" for="">
      <h3 class="text-lg font-bold">
        <span>
          {{
            capitalize(categoryStore.getCategoryDeletion?.name as string)
          }}</span
        >
      </h3>
      <p class="py-4">Are you sure you want to delete this category?</p>
      <div class="modal-action">
        <label for="delete-category" class="btn">Cancel</label>
        <label for="delete-category" class="btn-error btn" @click="mutate()"
          >Yes, delete</label
        >
      </div>
    </label>
  </label>
</template>
