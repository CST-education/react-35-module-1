import './App.css'
import { Gallery } from './components/Gallery/Gallery'
import Title from './components/Title/Title'
const galleryImages = {
  title: 'Images',
  description: 'Best images in the World!!!',
  images: [
    {
      id: '1',
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Lotus_Exige_Sport_410%2C_Paris_Motor_Show_2018%2C_IMG_0306.jpg/1200px-Lotus_Exige_Sport_410%2C_Paris_Motor_Show_2018%2C_IMG_0306.jpg',
    },
    {
      id: '2',
      source:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Lotus_Elise_Sport_220%2C_Paris_Motor_Show_2018%2C_IMG_0277.jpg/274px-Lotus_Elise_Sport_220%2C_Paris_Motor_Show_2018%2C_IMG_0277.jpg',
    },
  ],
}
const { title, description, images } = galleryImages
function App() {
  return (
    <div className="App">
      FE-35 Module 1 Lesson 1
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
    </div>
  )
}

export default App
