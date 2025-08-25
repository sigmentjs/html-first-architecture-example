
import 'sigment'

function About(props) {

  return div({ class: "about" },
    h2("About Component"),
    p(() => `ID: ${props.id ?? "no id"}`),
    p(() => `PageID: ${props.pageid ?? "no pageid"}`),
    p("This shows dynamic content passed via route parameters."),
    p("You can also mix other components or HTML here.")
  );

}

export default About;

