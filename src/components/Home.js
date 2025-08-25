
import './sigments/sigments.js';

function Home()  {

  return div({id:"home"},
    h1('Hello from Sigment',
    br(),
    span('  +Javascript'),
    br(),
    span('   +Esbuild'),
    span('    +Vite')),
    div({class:"examples"},"examples",
      div(
        a({href:"/counter"},"Counter Example State")
      ),
      div(
        a({href:"/hello"},"Add Sigment Hello Example")
      )
    ),
 
  );

}

export default Home;