export const signup = user => (
    $.ajax({
        url: '/api/users',
        method: 'POST'
    })
)

export const login = user => (
    $.ajax({
        url: '/api/session',
        method: 'POST',
        data: {user}
    })
)

export const logout = () => (
    $.ajax({
        url: '/api/session',
        method: 'DELETE'
    })
)

