
import {MyApp,mount} from  "sigment"
import Routes from "./router/Routes.js"
import loadAtRunTime from "./load-at-runtime/components.js"


MyApp.cleanHtml(false);
MyApp.setMaxCacheSize(50);
MyApp.setRoute(Routes);
MyApp.setloadAtRunTime(loadAtRunTime); 
MyApp.setStopPropagation(true);

async function Main() {  
   mount();  
}

Main();


export default Main;
