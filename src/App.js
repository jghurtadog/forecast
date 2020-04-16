import React, { Fragment, useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Forecast from "./components/Forecast";
import Map from "./components/Map";

function App() {
  //state
  const initialState = {
    city: "",
    country: "",
    type:true,
    consult: false,
    result: {},
    list:
      JSON.parse(localStorage.getItem("forecast")) !== null
        ? JSON.parse(localStorage.getItem("forecast"))
        : [],
    error: false,
  };
  const [state, setState] = useState(initialState);
  const { city, country, consult, type } = state;

  useEffect(() => {
    const searchAPI = async () => {
      if (consult) {
        const units = type === false ? `&units=metric` : null; 
        const appId = "a287a793316ef92c2b1c836f33a69f68";
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}${units}&appid=${appId}`;
        const respuesta = await fetch(url);
        const result = await respuesta.json();
        const index = state.list.findIndex((item) => item.city === city);
        if (result.cod === 200) {
          setState({
            ...state,
            result: result,
            consult: false,
            error: false,
            list:
              index === -1
                ? [...state.list, { city: city, country: country }]
                : [...state.list],
          });
        } else if (result.cod === "404") {
          setState({ ...state, result: {}, consult: false, error: true });
        }
      }
    };
    searchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [consult]);

  return (
    <Fragment>
      <Header title="Forecast ReactJS" />
      <div className="contenedor-form">
        <div className="container">
          <div className="col m3 s6">
            <Form state={state} setState={setState} />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col m3 s12">
          <Forecast state={state} setState={setState} />
        </div>
        <div className="row">
          <div className="col m9 s12">
            <Map result={state.result} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
