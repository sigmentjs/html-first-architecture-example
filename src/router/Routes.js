const Routes = {
  "/": {
    loader: () => import('../components/Home.js')
  },
  home: {
    loader: () => import('../components/Home.js')
  },
  about: {
    path: '/about/:id?/:pageid?',
    loader: () => import('../components/About.js')
  },
  counter: {
    loader: () => import('../components/counter/Counter.js')
  },
  hello: {
    loader: () => import('../components/Hello.js')
  },
  fallback: {
    path: "*",
    loader: () => import("../components/NotFound.js")
  }
};

export default Routes;