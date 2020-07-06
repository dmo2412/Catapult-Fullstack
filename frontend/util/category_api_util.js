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