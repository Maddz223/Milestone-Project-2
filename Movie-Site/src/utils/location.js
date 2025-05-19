// This function retrieves the country code from the user's locale settings.
const getCountryCode = () => {
    const locale = Intl.DateTimeFormat().resolvedOptions().locale;
    const match = locale.match(/-([A-Z]{2})$/i);
    return match ? match[1] : 'UK';
};

export default getCountryCode;