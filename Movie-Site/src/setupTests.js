require('@testing-library/jest-dom');
Object.defineProperty(global, "importMeta", {
    value: {
        env: {
            VITE_TMDB_API_KEY: "test_api_key",
            // add other env variables if needed
        },
    },
});

global.import = { meta: global.importMeta };