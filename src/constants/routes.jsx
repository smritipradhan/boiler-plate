//Change according to your requirements
export const routePaths = Object.freeze({
  default: "/",
  login: "/login",
});

export const componentRoutes = [
  {
    path: routePaths.default,
    element: <div>{/* <Home /> */}</div>, //Add your component here
  },
  {
    path: routePaths.login,
    element: <>{/* <Login /> */}</>, //Add your component here
  },
];
