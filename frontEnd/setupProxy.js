const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api", // Specify the path you want to forward to the backend
    createProxyMiddleware({
      target: "http://localhost:8000", // Specify the backend server address
      changeOrigin: true,
    })
  );
};
