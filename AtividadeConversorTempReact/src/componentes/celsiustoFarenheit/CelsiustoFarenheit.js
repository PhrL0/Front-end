import React, {useState} from "react";
import '../celsiustoFarenheit/style.css'

function CelsiustoFarenheit(){
    const [celsius, setCelsius] = useState('');
    const [resultado, setResultado] = useState('');

    const converteCelsiusFerenheit = () => {
        const celsiusTemp = parseFloat(celsius);
     

        if(!isNaN(celsiusTemp)){
            const resultado = (celsiusTemp * (9/5)) + 32;
            setResultado(resultado)
        } else{
            alert("Valores invalidos")
        }
    }
    return (
        <div className="container">
            <input type="number" className="celsius" placeholder="Celsius" value={celsius} onChange={(e) => setCelsius(e.target.value)}></input>
            <button onClick={converteCelsiusFerenheit} className="btn">Converter</button>
            <h3 className="resultado">Resultado:{resultado}</h3>
        </div>
    )
}
export default CelsiustoFarenheit
    