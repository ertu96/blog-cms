<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useQuery } from '@tanstack/vue-query'
import { defineComponent } from 'vue'
import { useToast } from 'vue-toastification'
import { getCategories } from '../api/category/getCategories'
import CategoryEditDialog from '../components/categories/dialog/CategoryEditDialog.vue'
import CategoriesTable from '../components/categories/table/CategoriesTable.vue'
import PageTitle from '../components/layout/PageTitle.vue'

export default defineComponent({
  name: 'CategoriesView',
  components: {
    PageTitle,
    CategoriesTable,
    FontAwesomeIcon,
    CategoryEditDialog,
  },
  setup() {
    const toast = useToast()
    const { isLoading, isError, isFetching, data, error, refetch } = useQuery({
      queryKey: ['categories'],
      queryFn: getCategories,
      onError: (err) => {
        toast.error('Failed to load categories')
        console.error(err)
      },
    })
    return { isLoading, isError, isFetching, data, error, refetch }
  },
})
</script>

<template>
  <PageTitle>Categories</PageTitle>
  <div v-if="isLoading">Loading...</div>
  <div v-else-if="isError">
    <p>An error has occurred: {{ error }}</p>
    <p>Try Again later</p>
  </div>
  <div v-else-if="data">
    <CategoriesTable v-if="data.length" :categories="data" />
    <div v-else>No categories</div>
    <label
      class="btn-accent btn-block btn gap-2"
      :class="{ 'rounded-t-none': data.length }"
      for="edit-category"
    >
      <FontAwesomeIcon :icon="['fas', 'plus']" size="lg" />
      Add new category
    </label>
    <CategoryEditDialog />
  </div>
</template>
