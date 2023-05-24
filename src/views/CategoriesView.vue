<script lang="ts">
import { useQuery } from '@tanstack/vue-query'
import { defineComponent } from 'vue'
import { useToast } from 'vue-toastification'
import { getCategories } from '../api/category/getCategories'
import CategoriesTable from '../components/categories/table/CategoriesTable.vue'
import PageTitle from '../components/layout/PageTitle.vue'
import { capitalize } from '../utils/capitalize'

export default defineComponent({
  name: 'CategoriesView',
  components: { PageTitle, CategoriesTable },
  setup() {
    const toast = useToast()
    const { isLoading, isError, isFetching, data, error, refetch } = useQuery({
      queryKey: ['categories'],
      queryFn: getCategories,
      onError: (err) => {
        toast.error('Failed to load categories')
        console.log(err)
      },
    })
    return { isLoading, isError, isFetching, data, error, refetch }
  },
  methods: {
    capitalize,
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
    <CategoriesTable :categories="data" />
  </div>
</template>
