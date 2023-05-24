<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { PropType, defineComponent } from 'vue'
import { Category } from '../../../interfaces/Category'
import { capitalize } from '../../../utils/capitalize'
import CategoryCreateDialog from '../dialog/CategoryCreateDialog.vue'
import CategoryDeleteDialog from '../dialog/CategoryDeleteDialog.vue'
import CategoriesTableHeader from './header/CategoriesTableHeader.vue'
import CategoriesTableRow from './row/CategoriesTableRow.vue'

export default defineComponent({
  components: {
    CategoriesTableRow,
    CategoriesTableHeader,
    CategoryCreateDialog,
    CategoryDeleteDialog,
    FontAwesomeIcon,
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
    <label
      class="btn-accent btn-block btn gap-2 rounded-t-none"
      for="create-category"
    >
      <FontAwesomeIcon :icon="['fas', 'plus']" size="lg" />
      Add new category
    </label>
  </div>
  <CategoryCreateDialog />
  <CategoryDeleteDialog />
</template>
