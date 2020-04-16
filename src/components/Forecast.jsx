import React, { Fragment } from 'react';
import List from "./List";
import Error from "./Error";

const Forecast = ({ state, setState }) => {
  const { name, main } = state.result
  const type = state.type === false ? <span>&#x2103;</span> : <span>&#x2109;</span>;
  return (
    <Fragment>
      {name ?
        <div className="card-panel white col s12">
          <div className="black-text">
            <h2>El clima de {name} es:</h2>
            <p className="temperatura">{main.temp} {type}</p>
            <p>Presion:{main.pressure}</p>
            <p>Humedad:{main.humidity}<span>&#x25;</span></p>
            <p>Temperatura Maxima: {main.temp_max} {type}</p>
            <p>Temperatura Minima:{main.temp_min} {type}</p>
          </div>
        </div>
        : null}
      {state.error ? <Error mensage="No hay resultado" /> : null}
      {state.list.length > 0 ?
        <List state={state} setState={setState} />
        : null}
    </Fragment>
  )
}

export default Forecast