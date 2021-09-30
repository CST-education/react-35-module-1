import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'
import { Gallery } from './components/Gallery/Gallery'
import { Hero } from './components/Hero/Hero'
import Title from './components/Title/Title'
import array from './db/gallery.json'
console.log(array)
const galleryImages = {
  title: 'images',
  description: 'Best images in the World!!!',
  images: array,
}
const newStylesForBtn = {
  // color: 'white',
  // background: 'black',
}
const { title, description, images } = galleryImages

function App() {
  return (
    <div className="App">
      <h1>FE-35 Module 1</h1>
      <Hero />
      <Button style={newStylesForBtn} id="bsBtn" variant="outline-success">
        Success
      </Button>
      <section>
        <h2>Lesson 1</h2>
        <Gallery i={images}>
          {/* IF */}
          {title === 'images' && <Title value={title} />}
          {/* IF */}
          {/* if...else = TERNARY */}
          {title === 'Images' ? (
            <h2>Условие выполнено</h2>
          ) : (
            <h2>Условие НЕ выполнено</h2>
          )}
          {/* if...else = TERNARY */}
          <p>Just Text</p>
        </Gallery>
      </section>
      <section className="frame">
        <div className="titleWrapper">
          <h2 className="title">Lesson 2</h2>
        </div>
        <h3>Animation Buttons</h3>
        <ul className="btnList">
          <li>
            <button className="custom-btn btn-1">Read More</button>
          </li>
          <li>
            <button className="custom-btn btn-2">Read More</button>
          </li>
          <li>
            <button className="custom-btn btn-3">
              <span>Read More</span>
            </button>
          </li>
          <li>
            <button className="custom-btn btn-4">
              <span>Read More</span>
            </button>
          </li>
          <li>
            <button className="custom-btn btn-5">
              <span>Read More</span>
            </button>
          </li>
          <li>
            <button className="custom-btn btn-6">
              <span>Read More</span>
            </button>
          </li>
          <li>
            <button className="custom-btn btn-7">
              <span>Read More</span>
            </button>
          </li>
          <li>
            <button className="custom-btn btn-8">
              <span>Read More</span>
            </button>
          </li>
          <li>
            <button className="custom-btn btn-9">Read More</button>
          </li>
          <li>
            <button className="custom-btn btn-10">Read More</button>
          </li>
          <li>
            <button className="custom-btn btn-11">
              Read More<div className="dot"></div>
            </button>
          </li>
          <li>
            <button className="custom-btn btn-12">
              <span>Click!</span>
              <span>Read More</span>
            </button>
          </li>
          <li>
            <button className="custom-btn btn-13">Read More</button>
          </li>
          <li>
            <button className="custom-btn btn-14">Read More</button>
          </li>
          <li>
            <button className="custom-btn btn-15">Read More</button>
          </li>
          <li>
            <button className="custom-btn btn-16">Read More</button>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default App
