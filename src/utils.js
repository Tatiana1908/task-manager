export const handleApiCall = (apiCall, handler = () => {}) => {
        return apiCall().then(data => data.json())
        .then(data => handler(data));
    }


export const handleApiCallEnhancer = enhancer => (...apiCallData) => {
    handleApiCall(...apiCallData).then(data => enhancer(data))
}