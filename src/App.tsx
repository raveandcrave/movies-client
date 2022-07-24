import React, {FC} from 'react';
import axios from 'axios';
import AppRouter from './components/AppRouter';

const App: FC = () => {
  // const options = {
  //   method: "GET",
  //   url: "https://movie-database-alternative.p.rapidapi.com/",
  //   params: { s: "blade runner", r: "json", page: "1" },
  //   headers: {
  //     "X-RapidAPI-Key": "51dac984c0msh6298306414999f7p1bd150jsn14acc49ea9df",
  //     "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
  //   },
  // };

  const options = {
    method: 'GET',
    url: 'https://api.kinopoisk.dev/movie',
    params: {
      token: 'ZQQ8GMN-TN54SGK-NB3MKEC-ZKB8V06',
      field: 'name',
      search: 'бегущий по лезвию',
      isStrict: false,
    },
    // headers: {
    //   "X-RapidAPI-Key": "51dac984c0msh6298306414999f7p1bd150jsn14acc49ea9df",
    //   "X-RapidAPI-Host": "movie-database-alternative.p.rapidapi.com",
    // },
  };

  // axios
  //   .request(options)
  //   .then(function (response) {
  //     console.log(response.data);
  //   })
  //   .catch(function (error) {
  //     console.error(error);
  //   });

  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

export default App;
