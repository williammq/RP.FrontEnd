const apiUrl = process.env.REACT_APP_API_URL;
export const swaggerUrl = apiUrl?.replace("api","swagger/index.html");
export const urlProduct = `${apiUrl}/product/`;
