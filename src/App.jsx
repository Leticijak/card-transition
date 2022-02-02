import { useState } from "react"
import { imgInfo } from "./data"

function App() {
  return (
    <>
      <div className='card-wrapper'>
        {imgInfo.map((img) => (
          <div className='img-wrap' key={img.id}>
            <button>view</button>
            <img className='img-img' src={img.url} width={250} alt='image' />
            <div className='card-body'>
              <h1>{img.title}</h1>
              <p>{img.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default App
