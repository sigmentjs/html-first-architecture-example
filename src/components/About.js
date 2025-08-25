
import 'sigment'

import Routes from '../router/Routes.js';

function About(props) {
  debugger
console.log(props)

function handleNavigate(id) {
  return (e) => {
    NavigateTo(`about/${id}/2`, Routes, "about", true, e)
      .then(() => console.log("Navigated to about"))
     .catch(console.error);
  };
}
  
  return div({ class: "about" },
    h2("About Component"),
    p(() => `ID: ${props.id ?? "no id"}`),
    p(() => `PageID: ${props.pageid ?? "no pageid"}`),
    p("This shows dynamic content passed via route parameters."),
    p("You can also mix other components or HTML here.")
  );

}

export default About;

