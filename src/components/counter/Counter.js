import { signal,paintFinish } from "sigment";


function Counter() {
  const [count, setCount] = signal(0);

  paintFinish(() => {
     console.log("Sets up a function that runs only once, after the first paint")

  });


  return div({ class:"wdt" },
    button({ onClick: () => setCount(count + 1) }, "Increment"),
    p('Count is:', count)
  );
}

export default Counter;
