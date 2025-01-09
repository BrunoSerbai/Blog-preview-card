import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <body>
        Learning Published 21 Dec 2023 HTML & CSS foundations These languages
        are the backbone of every website, defining structure, content, and
        presentation. Greg Hooper
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://www.brunoserbai.org/" target="_blank">Bruno Serbai</a>.
        </div>
      </body>
    </>
  );
}

export default App;
