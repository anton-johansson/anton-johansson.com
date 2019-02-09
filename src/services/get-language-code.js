const topDomainToLanguageMappings = {
  '.se': 'sv'
};
const getTopDomain = hostname => {
  const lastDotIndex = hostname.lastIndexOf('.');
  if (lastDotIndex >= 0) {
    return hostname.substring(lastDotIndex);
  }
  return '';
};

export default () => {
  const hostname = document.location.hostname;
  const topDomain = getTopDomain(hostname);
  return topDomainToLanguageMappings[topDomain] || 'en';
};
