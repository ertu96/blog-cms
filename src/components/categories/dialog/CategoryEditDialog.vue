<script lang="ts">
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { defineComponent } from 'vue'
import { useToast } from 'vue-toastification'
import { string } from 'yup'
import { createOrEditCategory } from '../../../api/category/utils/createOrEditCategory'
import { Category } from '../../../interfaces/Category'

import { CategoryForm } from '../../../interfaces/forms/CategoryForm'
import { useCategoryStore } from '../../../stores/CategoryStore'
import DynamicForm from '../../form/DynamicForm.vue'

export default defineComponent({
  name: 'CategoryEditDialog',
  components: { DynamicForm },
  setup() {
    const toast = useToast()
    const categoryStore = useCategoryStore()
    const queryClient = useQueryClient()

    const formSchema = {
      fields: [
        {
          label: 'Name',
          name: 'name',
          as: 'input',
          placeholder: 'Provide a good name',
          rules: string().required('Required'),
          ...(categoryStore.isCategorySelected && {
            value: categoryStore.getSelectedCategory!.name,
          }),
        },
      ],
    }

    const { mutate } = useMutation({
      mutationFn: (category: CategoryForm | Category) =>
        createOrEditCategory({
          ...category,
          ...(categoryStore.isCategorySelected && {
            id: categoryStore.getSelectedCategory!.id,
          }),
        }),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['categories'] })

        toast.success(
          categoryStore.isCategorySelected
            ? 'Category updated'
            : 'New category created'
        )
      },

      onError: (err) => {
        toast.error(
          categoryStore.isCategorySelected
            ? 'Failed to update category'
            : 'Failed to create new category'
        )
        console.error(err)
      },
    })

    const onSubmit = (values: any) => mutate(values)
    return {
      onSubmit,
      formSchema,
      categoryStore,
    }
  },
})
</script>

<template>
  <input id="edit-category" type="checkbox" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <label
        for="edit-category"
        class="btn-sm btn-circle btn absolute right-2 top-2"
        @click="categoryStore.setSelectedCategory(null)"
        >✕</label
      >

      <h3 class="text-lg font-bold">
        {{
          categoryStore.isCategorySelected
            ? categoryStore.getSelectedCategory!.name
            : 'New Category'
        }}
      </h3>
      <DynamicForm
        :on-submit="onSubmit"
        :schema="formSchema"
        :submit-label="categoryStore.isCategorySelected ? 'Edit' : 'Add'"
      />
    </div>
  </div>
</template>
