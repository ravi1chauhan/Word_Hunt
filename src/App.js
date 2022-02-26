import { Container, Switch, withStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Definitions from './components/Definitions/Definitions';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const [meanings, setMeanings] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("en");
  const [LightTheme, setLightTheme] = useState(false);

  const GreySwitch = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);

      // console.log(data);
      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    dictionaryApi();
    // eslint-disable-next-line
  }, [word, category]);

  return (
    <div className="App"
      style={{
        height: "100vh", backgroundColor: LightTheme ? "#fff" : "#282c34",
        color: LightTheme ? "black" : "white",
        transition: "all 0.5s linear"
      }}
    >
      <Container
        maxWidth="md"
        style={{ display: "flex", flexDirection: "column", height: "100vh", justifyContent: "space-evenly" }}
      >
        <div
          style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}
        >
          <span>{LightTheme ? "Dark" : "Light"} Mode</span>
          <GreySwitch
            checked={LightTheme}
            onChange={() => setLightTheme(!LightTheme)}
          />
        </div>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} setMeanings={setMeanings}
          LightTheme={LightTheme} />
        {meanings && (
          <Definitions word={word} meanings={meanings} category={category} LightTheme={LightTheme} />
        )}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
