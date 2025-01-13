import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './Card.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <body>
      <Card/>
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
  </StrictMode>,
)
