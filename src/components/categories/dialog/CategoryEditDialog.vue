<script lang="ts">
import { useMutation } from '@tanstack/vue-query'
import { defineComponent } from 'vue'
import { useToast } from 'vue-toastification'
import { string } from 'yup'
import { createOrEditCategory } from '../../../api/category/utils/createOrEditCategory'
import { Category } from '../../../interfaces/Category'
import { CategoryForm } from '../../../interfaces/CategoryForm.js'
import { useCategoryStore } from '../../../stores/CategoryStore'
import DynamicForm from '../../form/DynamicForm.vue'

export default defineComponent({
  name: 'CategoryEditDialog',
  components: { DynamicForm },
  setup() {
    const toast = useToast()
    const categoryStore = useCategoryStore()

    const checkIfCategoryIsSelected = () =>
      categoryStore.getSelectedCategory &&
      categoryStore.getSelectedCategory !== null &&
      categoryStore.getSelectedCategory.id > 0

    const formSchema = {
      fields: [
        {
          label: 'Name',
          name: 'name',
          as: 'input',
          placeholder: 'Provide a good name',
          rules: string().required('Required'),
          ...(checkIfCategoryIsSelected() && {
            value: categoryStore.getSelectedCategory!.name,
          }),
        },
      ],
    }

    const { mutate } = useMutation({
      mutationFn: (category: CategoryForm | Category) =>
        createOrEditCategory({
          ...category,
          ...(checkIfCategoryIsSelected() && {
            id: categoryStore.getSelectedCategory!.id,
          }),
        }),
      onSuccess: () =>
        toast.success(
          checkIfCategoryIsSelected()
            ? 'Category updated'
            : 'New category created'
        ),
      onError: (err) => {
        toast.error(
          checkIfCategoryIsSelected()
            ? 'Failed to update category'
            : 'Failed to create new category'
        )
        console.error(err)
      },
    })

    const onSubmit = (values: any) => mutate(values)
    return { onSubmit, formSchema, categoryStore, checkIfCategoryIsSelected }
  },
  methods: {},
})
</script>

<template>
  <input id="edit-category" type="checkbox" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <label
        for="edit-category"
        class="btn-sm btn-circle btn absolute right-2 top-2"
        >✕</label
      >

      <h3 class="text-lg font-bold">
        {{
          checkIfCategoryIsSelected()
            ? categoryStore.getSelectedCategory!.name
            : 'New Category'
        }}
      </h3>
      <DynamicForm
        :on-submit="onSubmit"
        :schema="formSchema"
        :submit-label="checkIfCategoryIsSelected() ? 'Edit' : 'Add'"
      />
    </div>
  </div>
</template>
