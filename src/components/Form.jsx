import React, { useState } from 'react'
import Error from "./Error";

const Form = ({ state, setState }) => {
  //state
  const [error, saveError] = useState(false);

  if (state.list !== null) {
    if (state.list.length <= 5) {
      localStorage.setItem('forecast', JSON.stringify(state.list));
    }
  }

  //function onChange     //update state
  const handleChange = e => {
    setState({
      ...state, [
        e.target.name]: e.target.value
    })
  }

  const handleCheckClick = () => {
    setState({...state, type: !state.type, consult: true });
  }

  //function handleSubmit
  const handleSubmit = e => {
    e.preventDefault();
    if (state.city.trim() === "" || state.country.trim() === "") {
      saveError(true);
      return;
    }
    saveError(false);
    setState({ ...state, consult: true });
  }

  const { city, country, type } = state;
  console.log("state", state)
  return (
    <form onSubmit={handleSubmit}>
      {error ? <Error mensage="Campos Obligatorios" /> : null}
      <div className="input-field col s12">
        <input
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}
        />
        <label htmlFor="city">Ciudad: </label>
      </div>
      <div className="input-field col s12">
        <select
          name="country"
          id="country"
          value={country}
          onChange={handleChange}
        >
          <option value="">-- Seleccione un Pais --</option>
          <option value="VE">Venezuela</option>
          <option value="CO">Colombia</option>
          <option value="AR">Argentina</option>
          <option value="PE">Perú</option>
          <option value="EC">Ecuador</option>
          <option value="BO">Bolivia</option>
          <option value="UY">Uruguay</option>
        </select>
        <label htmlFor="country">Pais: </label>
        <div className="switch">
          <label>
          Fahrenheit
      <input type="checkbox" name="type" value={type} onChange={handleCheckClick} />
            <span className="lever"></span>
          Celcius
    </label>
        </div>
      </div>
      <div className="input-field col s12">
        <input
          type="submit"
          value="Buscar"
          className="waves-effect waves-light btn-large btn-block yellow accent-4"
        />
      </div>
    </form>
  );
}

export default Form;