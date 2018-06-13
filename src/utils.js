export const handleApiCall = (apiCall, handler) => apiCall()
    .then(data => data.json())
    .then(data => handler(data))