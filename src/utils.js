export const getRequestURL = (request, opts) => {
    const appendPath = (opts && opts.appendPath) || true;
    const protocol = request.get('x-forwarded-proto') || request.protocol;
    const hostname = request.get('host');
    const path = appendPath ? request.originalUrl : '';
    return `${protocol}://${hostname}${path}`;
};

export const START_DATE = new Date().toISOString().slice(0, 10);
