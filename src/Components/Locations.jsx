
import "../Components/styles/Locations.css"

function Locations({places}) {

    return(
        <main className="container__locations">
            <h2 className="title__locations">{places?.name} </h2>
            <ul className="list__locations">
              <li className="item__location">
                <span className="span__location"> Type: </span> {places?.type} 
              </li>
              <li className="item__location">
                <span className="span__location"> Dimension: </span> {places?.dimension} 
              </li>
              <li className="item__location">
                <span className="span__location"> Population: </span> {places?.residents.length} 
              </li>
            </ul>
        </main>
    )
}

export default Locations
