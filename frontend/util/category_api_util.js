export const fetchCategory= id => (
    $.ajax({
        url: `api/categories/${id}`
    })
)

export const fetchCategories = () => (
    $.ajax({
        url: 'api/categories'
    })
)