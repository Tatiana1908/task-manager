export const handleApiCall = (apiCall, handler) => {
        return apiCall().then(data => data.json())
        .then(data => handler(data));
    }
