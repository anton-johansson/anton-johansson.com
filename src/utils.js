export const getRequestEndpoint = request => {
    const protocol = request.get('x-forwarded-proto') || request.protocol;
    const hostname = request.get('host');
    return `${protocol}://${hostname}`;
};

export const START_DATE = new Date().toISOString().slice(0, 10);
