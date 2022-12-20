import axios from "axios"
import { useEffect, useState } from "react"
import ErrorAxios from "../Components/ErrorAxios"
import Locations from "../Components/Locations"
import Residents from "../Components/Residents"
import "./App.css"


function App() {
    const [location, setLocation] = useState()
    const [input, setInput] = useState()
    const [haserror, setHaserror] = useState(false)

    useEffect(() => {
        let endpoint
        if (input) {
            endpoint = `https://rickandmortyapi.com/api/location/${input}`
        } else {
            const randomIdLocation = Math.floor(Math.random() * 126) + 1
            endpoint = `https://rickandmortyapi.com/api/location/${randomIdLocation}`
        }
        
        axios.get(endpoint)
            .then(res => {
                setLocation(res.data)
                setHaserror(false)
            })
            .catch(err => {
                setHaserror(true)
                console.log(err)
            })
    }, [input])

    const handleSubmit = e => {
        e.preventDefault()
        setInput(e.target.inputSearch.value)
        e.target.reset()
    }

    return (
        <div className="app">
            <div className="container__img">
              <img className="imagen" src="/morpy.jpg" alt="banner_morpy" />
            </div>
            <h1 className="container__title"> Rick and Morty </h1>
            <form className="container__form" onSubmit={handleSubmit}>
                <input className="input__search" id="inputSearch" type="text" placeholder="number betwen 1-126"/>
                <button className="btn__search"> Search </button>
            </form>
            {
                haserror ? <ErrorAxios/> :
                < >
                    <Locations places={location}/>
                    <div className="residents__container">
                        { 
                            location?.residents.map( urlResidents => (
                                <Residents key={urlResidents}  urlPersonajes={urlResidents} />
                            ))
                        }
                    </div>
                </>
            }
        </div>
    )
}

export default App