import { Heading, Center, Image, Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  //state variables
  const [country, setCountry] = useState([]);
  const [randomIndex, setRandomIndex] = useState(0);
  const [userScore, setUserScore] = useState(0);

  //make a request to the api and assign it to 'countries'
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(({ data }) => {
        const countryData = data;
        const randomNumber = Math.random() * countryData.length;
        const rounded = Math.floor(randomNumber);
        setRandomIndex(rounded);
        return countryData;
      })
      .then((countryData) => {
        setCountry(countryData[randomIndex]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setRandomIndex]);

  useEffect(() => {
    console.log(country);
    console.log(randomIndex);
  }, [setRandomIndex]);

  return (
    <Center>
      <Heading>Guess the Flag!</Heading>
    </Center>
  );
};

export default App;
