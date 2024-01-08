import "./App.scss";
import * as data from "./data/backwords.json";
function App() {
  const words = data.words;
    const starCount = 80;

    const createStars = () => {
        const stars = [];
        for (let i = 1; i <= starCount; i++) {
            stars.push(<div className={`star star${i}`} key={i}></div>);
        }
        return stars;
    };

  return (
    <main>
      <div className="background-words">
        {words.map((word, i) => (
          <p className="back-word" key={i}>
            {word}
          </p>
        ))}
      </div>
      <div className="background-stars">{createStars()}</div>
      <h1>Hello World</h1>
    </main>
  );
}

export default App;
