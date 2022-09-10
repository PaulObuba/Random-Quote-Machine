import React, {useState, useEffect} from 'react'
import './App.css';
import colorArray from './arrayOfColors'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
library.add(faTwitter)

function App() {
   const [quote, setQuote] = useState(['Happiness is not something readymade. It comes from your own actions.']);
   const [random, setRandom] = useState(0);
   const [colors, setColors] = useState(' #282c34')

   const fetchQuotes = () => {
     fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
     .then(response => response.json())
     .then(data => setQuote(data.quotes))
     .catch(error => console.log(error))
   }

    useEffect(() => {
      fetchQuotes()
    }, [])
  
    const setRandomNumber = () => {
      const ran = Math.floor(Math.random() * quote.length)
      setRandom(ran)
      setColors(colorArray[ran])
    }  


  return (
    <div className="App">
      <header className="App-header" style={{backgroundColor: colors, color: colors}}>
        <div className='quote-box'>
          <p className='text'> {quote[random].quote} </p>
          <p className='author'> - {quote[random].author} </p>
          <div className='button'>
            <a href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote[random].quote}`)} className='tweet-quote'  style={{backgroundColor: colors}}>
             <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
            <button className='new-quote' onClick={setRandomNumber} style={{backgroundColor: colors}}>New quote</button>
          </div>
        </div>
        <p className='name'>- by paul</p>
      </header>
    </div>
  );
}
export default App; 


