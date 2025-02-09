import image from "./assets/images/illustration-article.svg"
import profileImg from "./assets/images/image-avatar.webp"
import "./Card.css"
function App() {

  return (
    <div className="bg-[#F4D04E]  flex items-center justify-center h-screen">
      <div className="card bg-white text-base border border-black font-[figtree] rounded-3xl m-auto max-w-sm p-5 max-md:max-w-xs">
        <img src={image} className="cardImg w-full rounded-xl"/>
        <div className="tag bg-[#F4D04E] rounded-sm max-w-min p-2 m-1 font-extrabold text-xs m-5 ml-0">Learning</div>
        <div className="date text-xs font-semibold mb-3">Published 21 Dec 2023</div>
        <h3 className="font-extrabold text-xl cursor-pointer hover:text-[#F4D04E]">HTML & CSS foundations</h3>
        <div className="description text-gray-500 text-base">These languages are the backbone of every website, defining structure, content, and presentation</div>
        <div className="profile inline-flex items-center mt-5"><img className=" max-h-9" src={profileImg} /> <p className="ml-3 text-sm font-extrabold">Greg Hooper</p></div>
<div className="sr-only">Learning Published 21 Dec 2023 HTML & CSS foundations These languages
        are the backbone of every website, defining structure, content, and
        presentation. Greg Hooper
        <div class="attribution">
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="https://www.brunoserbai.org/" target="_blank">Bruno Serbai</a>.
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
