<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { PropType, defineComponent } from 'vue'
import { Category } from '../../../../interfaces/Category'
import { useCategoryStore } from '../../../../stores/CategoryStore'
import { buildThumbbailUrl } from '../../../../utils/buildThumbbailUrl'

export default defineComponent({
  components: { FontAwesomeIcon },
  props: {
    category: {
      type: Object as PropType<Category>,
      required: true,
    },
  },
  setup() {
    const categoryStore = useCategoryStore()
    return { setSelectedCategory: categoryStore.setSelectedCategory }
  },
  methods: { buildThumbbailUrl },
})
</script>

<template>
  <tr>
    <td>
      <div class="avatar h-16 w-16">
        <img
          class="rounded-sm"
          :src="buildThumbbailUrl('categories', category.thumbnail)"
          :alt="category.name"
        />
      </div>
    </td>
    <td>
      {{ category.name }}
    </td>
    <td>{{ category.slug }}</td>
    <td>
      <label
        for="edit-category"
        class="btn-ghost btn"
        @click="() => setSelectedCategory(category)"
      >
        <FontAwesomeIcon :icon="['fas', 'pen-to-square']" size="lg" />
      </label>
      <label
        for="delete-category"
        class="btn-ghost btn"
        @click="() => setSelectedCategory(category)"
      >
        <FontAwesomeIcon :icon="['fas', 'trash']" size="lg" />
      </label>
    </td>
  </tr>
</template>
