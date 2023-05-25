import { defineStore } from 'pinia'
import { Category } from '../interfaces/Category'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    selectedCategory: null as Category | null,
  }),
  getters: {
    getSelectedCategory: (state) => state.selectedCategory,
  },
  actions: {
    setSelectedCategory(category: Category | null) {
      this.selectedCategory = category
    },
  },
})
