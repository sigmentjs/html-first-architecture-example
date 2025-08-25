const loadAtRunTime = {
  defaultKey: "/",     
  "header": () => import('../components/Header.js'),
  "footer": () => import('../components/Footer.js')
};

export default loadAtRunTime;