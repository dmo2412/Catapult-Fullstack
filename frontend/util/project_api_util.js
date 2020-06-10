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
    
    return $.ajax({
        url: '/api/projects/',
        method: 'Post',
        data: project,
        processData: false,
        contentType: false,
    })
}

export const updateProject = project => (
    $.ajax({
        url: `/api/projects/${project.id}`,
        method: 'Patch',
        data: {project},
        processData: false,
        contentType: false,
    })
)

export const deleteProject = id => (
    $.ajax({
        url: '/api/projects',
        method: 'Delete'
    })
)
