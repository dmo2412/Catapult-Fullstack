export const fetchCategory = categoryId => (
    $.ajax({
        url: `api/categories/${categoryId}`
    })
)

export const fetchCategories = () => (
    $.ajax({
        url: 'api/categories'
    })
)

export const fetchCategoryProjects = (categoryId) => (
    $.ajax({
        url: `/api/categories/${categoryId}`
    })
)