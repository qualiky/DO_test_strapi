module.exports = {
  routes: [
    {
      method: "GET",
      path: "/myApi",
      handler: "myApi.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
