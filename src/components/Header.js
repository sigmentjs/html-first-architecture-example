
import 'sigment'

function Header() {
  return div({ class: "site-header" },
    nav(
      a({ href: "/" }, "Home"),
      " | ",
      a({ href: "/about" }, "About"),
      " | ",
      a({ href: "/hello" }, "Hello"),
      " | ",
      a({ href: "/counter" }, "Counter"),
       " | ",
      a({ href: "/about/1/2" }, "Example with param")
    )
  );
}

export default Header;