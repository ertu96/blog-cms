import { defineStore } from 'pinia'
import { Category } from '../interfaces/Category'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    categoryDeletion: null as Category | null,
  }),
  getters: {
    getCategoryDeletion: (state) => state.categoryDeletion,
  },
  actions: {
    setCategoryDeletion(category: Category | null) {
      this.categoryDeletion = category
    },
  },
})
