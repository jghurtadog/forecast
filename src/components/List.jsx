import React from "react"

const List = ({ state, setState }) => {

  const onDelete = (city) => {
    let filteredArray = state.list.filter(item => item.city !== city)
    setState({ ...state, error: false, list: filteredArray });
  };

  const onSee = (city, country) => {
    let filteredArray = state.list.filter(item => item.city !== city)
    setState({ ...state, city: city, country: country, consult: true, error: false, list: filteredArray });
  };

  const { list } = state
  return (
    <div className="card-panel white col s12">
      <div className="black-text">
        <h2>Listado de Climas</h2>
        <ul className="listado-tareas">
          {
            list.length === 0
              ? (<li className="tarea sombra"><p>No hay Climas</p></li>) : list.map(t => (
                <li className="tarea sombra">{t.city + ", " + t.country} <div className="acciones"><button type="button" onClick={() => onSee(t.city, t.country)}>Ver</button><button type="button" onClick={() => onDelete(t.city)}>Eliminar</button></div></li>
              ))
          }
        </ul>
      </div>
    </div>
  );
}


export default List;