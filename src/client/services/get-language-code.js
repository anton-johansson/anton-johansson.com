const topDomainToLanguageMappings = {
    '.se': 'sv',
    '.com': 'en'
};
const getTopDomain = hostname => {
    const lastDotIndex = hostname.lastIndexOf('.');
    if (lastDotIndex >= 0) {
        return hostname.substring(lastDotIndex);
    }
    return '';
};

export default hostname => {
    const topDomain = getTopDomain(hostname);
    return topDomainToLanguageMappings[topDomain] || 'en';
};
