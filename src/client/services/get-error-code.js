export default response => {
    if (response.status === 429) {
        return Promise.resolve('too-many-requests');
    }

    if (response.status === 400) {
        return response.json()
                .then(data => data.errorCode);
    }

    return Promise.resolve('unknown-error');
};
