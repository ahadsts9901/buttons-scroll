import { useRef } from "react"
import './App.css'
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";

function App() {

  const numbers = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
    41, 42, 43, 44, 45, 46, 47, 48, 49, 50
  ];

  const containerRef = useRef(null);

  const scrollBackward = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300;
    }
  };

  const scrollForward = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300;
    }
  };

  return (
    <>
      <div className='buttonContainer'>
        <button className='button' onClick={scrollBackward}><IoChevronBackOutline /></button>
        <button className='button' onClick={scrollForward}><IoChevronForwardOutline /></button>
      </div>
      <div className='container' ref={containerRef}>
        {
          numbers.map((number, index) => (
            <div key={index} className="count">
              <p>{number}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default App
