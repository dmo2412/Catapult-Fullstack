export const backProject = project => (
    $.ajax({
        url: `/api/projects/${project.id}/back`,
        method: 'Post'
    })
)