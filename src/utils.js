export const getRequestURL = (request, opts) => {
    const appendPath = isAppendPath(opts);
    const protocol = request.get('x-forwarded-proto') || request.protocol;
    const hostname = request.get('host');
    const path = appendPath ? request.originalUrl : '';
    return `${protocol}://${hostname}${path}`;
};

const isAppendPath = opts => {
    if (opts && 'appendPath' in opts) {
        return opts.appendPath;
    }
    return true;
}

export const START_DATE = new Date().toISOString().slice(0, 10);
