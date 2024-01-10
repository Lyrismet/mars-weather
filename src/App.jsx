import "./App.scss";
import {useState} from "react";
import {GetQuote} from "./api.js";
import * as data from "./data/backwords.json";
import {useTranslation} from "react-i18next";

function App() {
    const words = data.words;
    const starCount = 80;
    const {t} = useTranslation();
    const [quote, setQuote] = useState(null);
    const generate = () => {
        GetQuote()
            .then(result => setQuote({
        quote: result[0].quote,
        author: result[0].author
    })) ;

    }
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

            {quote ? <div className="frame"><h1>{quote.quote}</h1> <p className="author">{quote.author}</p></div> : null}
            <button className={`get-button ${quote ? "active" : ""}`} onClick={generate}>
                <span className='inner-button' >Get your inspirational quote!</span>
            </button>
        </main>
    );
}

export default App;
