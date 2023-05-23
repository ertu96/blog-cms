<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { useQuery } from '@tanstack/vue-query'
import { defineComponent } from 'vue'
import { useToast } from 'vue-toastification'
import { getCategories } from '../api/categories/getCategories'
import PageTitle from '../components/layout/PageTitle.vue'

export default defineComponent({
  name: 'CategoriesView',
  components: { PageTitle, FontAwesomeIcon },
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
    <div class="w-full overflow-x-auto">
      <table class="table w-full">
        <thead>
          <tr>
            <th>Thumbnail</th>
            <th>Title</th>
            <th>Slug</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="category in data" :key="category.id">
            <td>
              <div class="avatar h-20 w-20">
                <img src="https://picsum.photos/200" :alt="category.name" />
              </div>
            </td>
            <td>
              {{ category.name }}
            </td>
            <td>{{ category.name }}</td>
            <th>
              <button class="btn-ghost btn-xs btn">
                <FontAwesomeIcon :icon="['fas', 'trash']" />
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
