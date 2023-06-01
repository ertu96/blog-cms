import { Category } from '../../../interfaces/Category'
import { CategoryForm } from '../../../interfaces/forms/CategoryForm'
import { createCategory } from '../createCategory'
import { editCategory } from '../editCategory'

export const createOrEditCategory = async (
  category: Category | CategoryForm
): Promise<void> => {
  'id' in category && category.id > 0
    ? editCategory(category.id, { name: category.name })
    : createCategory(category)
}
