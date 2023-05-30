import { defineStore } from 'pinia'
import { Category } from '../interfaces/Category'

export const useCategoryStore = defineStore('category', {
  state: () => ({
    selectedCategory: null as Category | null,
  }),
  getters: {
    getSelectedCategory: (state) => state.selectedCategory,
    isCategorySelected: (state) =>
      state.selectedCategory &&
      state.selectedCategory !== null &&
      state.selectedCategory.id > 0,
  },
  actions: {
    setSelectedCategory(category: Category | null) {
      this.selectedCategory = category
    },
  },
})
