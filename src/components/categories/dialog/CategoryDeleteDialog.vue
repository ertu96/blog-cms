<script lang="ts">
import { useMutation, useQueryClient } from '@tanstack/vue-query'
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
    const queryClient = useQueryClient()

    const { mutate } = useMutation({
      mutationFn: () =>
        deleteCategory(
          categoryStore.getSelectedCategory &&
            categoryStore.getSelectedCategory.id
        ),
      onSuccess: () => {
        toast.success('Category deleted')
        categoryStore.setSelectedCategory(null)
        queryClient.invalidateQueries({ queryKey: ['categories'] })
      },
      onError: (err) => {
        toast.error('Failed to delete category')
        console.error(err)
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
        <span> {{ categoryStore.getSelectedCategory?.name }}</span>
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
