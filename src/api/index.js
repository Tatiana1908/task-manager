import ApiCreator from './api-creator';

const api = ApiCreator('localhost:3000');

export const getTasksApi = () => api.get('tasks');

export const removeTask = (id) => api.delete(`tasks/${id}`);

export const postTask = task => api.post('tasks', {
    body: JSON.stringify(task),
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const updateTask = value => api.patch(`tasks/${value.id}`, {
    body: JSON.stringify(value.field),
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

export const getExpiredTasks = () => api.get('tasks?expired=true');

