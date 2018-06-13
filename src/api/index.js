import ApiCreator from './api-creator';

const api = ApiCreator('localhost:3000');

export const getTasks = () => api.get('tasks');