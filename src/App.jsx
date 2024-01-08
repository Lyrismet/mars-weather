import './App.scss'
import * as data from './data/backwords.json'
function App() {

    const words = data.words;
  return (
    <main>
        <div className="background-words">
          {words.map((word, i) => (
            <p className="back-word" key={i}>{word}</p>
          ))}
        </div>
      <h1>Hello World</h1>
    </main>
  )
}

export default App
