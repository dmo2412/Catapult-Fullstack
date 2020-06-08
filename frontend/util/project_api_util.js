export const fetchProjects = () => (
    $.ajax({
        url: '/api/projects'
    })
)

export const fetchProject = id => (
    $.ajax({
        url: `/api/projects/${id}`
    })
)

export const createProject = project => {
    let requests = {
        url: '/api/projects/',
        method: 'Post',
        data: { project: project },
        }
        
    return $.ajax(
        requests
    )
}

export const updateProject = project => (
    $.ajax({
        url: `/api/projects/${project.id}`,
        method: 'Patch',
        data: {project}
    })
)

export const deleteProject = id => (
    $.ajax({
        url: '/api/projects',
        method: 'Delete'
    })
)
