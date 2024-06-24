export const checkEnvironment = () => {
    let base_url =
        process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "https://pronajmusi.cz";

    return base_url;
};