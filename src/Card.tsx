import "./Card.css";
import image from "./assets/images/illustration-article.svg"
import profileImg from "./assets/images/image-avatar.webp"
function App() {

  return (
    <>
      <div className="card">
        <img src={image} />
        <div className="tag">Learning</div>
        <div className="date">Published 21 Dec 2023</div>
        <h3>HTML & CSS foundations</h3>
        <div className="description">These languages are the backbone of every website, defining structure, content, and presentation</div>
        <div className="profile"><img src={profileImg} /> Greg Hooper</div>
      </div>
    </>
  );
}

export default App;
