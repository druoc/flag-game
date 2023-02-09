import { Heading } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import axios from "axios";
const App = () => {
  //state variables
  const [countries, setCountries] = useState([]);

  //make a request to the api and assign it to 'countries'
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(({ data }) => {
        setCountries(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  useEffect(() => {
    console.log(countries[0]);
  }, []);

  return <Heading>Guess the Flag!</Heading>;
};

export default App;
