<script lang="ts">
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { PropType, defineComponent } from 'vue'
import { Category } from '../../../../interfaces/Category'
import { capitalize } from '../../../../utils/capitalize'

export default defineComponent({
  components: { FontAwesomeIcon },
  props: {
    category: {
      type: Object as PropType<Category>,
      required: true,
    },
  },
  methods: { capitalize },
})
</script>

<template>
  <tr>
    <td>
      <div class="avatar h-16 w-16">
        <img src="https://picsum.photos/200" :alt="category.name" />
      </div>
    </td>
    <td>
      {{ capitalize(category.name) }}
    </td>
    <td>{{ category.name }}</td>
    <th>
      <label for="delete-category" class="btn-ghost btn">
        <FontAwesomeIcon :icon="['fas', 'trash']" size="lg" />
      </label>
    </th>
  </tr>
</template>
