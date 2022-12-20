
import "../Components/styles/ErrorAxios.css"

function ErrorAxios() {
    return(
        <div className="error__container">
            <i className="fa-solid fa-triangle-exclamation"></i>
            <h3 className="error__text"> You only should enter numbers betwen 1 to 126 </h3>
        </div>
    )
}

export default ErrorAxios