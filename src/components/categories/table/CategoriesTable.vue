<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { Category } from '../../../interfaces/Category'
import { capitalize } from '../../../utils/capitalize'
import CategoryDeleteDialog from '../dialog/CategoryDeleteDialog.vue'
import CategoriesTableHeader from './header/CategoriesTableHeader.vue'
import CategoriesTableRow from './row/CategoriesTableRow.vue'

export default defineComponent({
  components: {
    CategoriesTableRow,
    CategoriesTableHeader,
    CategoryDeleteDialog,
  },
  props: {
    categories: {
      type: Array as PropType<Category[]>,
      required: true,
    },
  },
  methods: { capitalize },
})
</script>

<template>
  <div class="w-full overflow-x-auto">
    <table class="table w-full">
      <CategoriesTableHeader />
      <tbody>
        <CategoriesTableRow
          v-for="category in categories"
          :key="category.id"
          :category="category"
        />
      </tbody>
    </table>
  </div>
  <CategoryDeleteDialog />
</template>
