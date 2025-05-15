const getCountryCode = () => {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;
    const match = locale.match(/-([A-Z]{2})$/i);
    return match ? match[1] : 'US';
};

export default getCountryCode;