import React, {useState} from "react";
import CelsiustoFarenheit from "../../componentes/celsiustoFarenheit/CelsiustoFarenheit";

function ConverteTemp(){
    const [opcao, setOp] = useState('');


    const getOpcao = () => {
        const opcaoSelecionada = parseInt(opcao);
        console.log(opcaoSelecionada)
        console.log(typeof opcaoSelecionada)
        switch(opcaoSelecionada){
            case 1:
                console.log("ENTREI")
                return (
                    <div>
                         <CelsiustoFarenheit></CelsiustoFarenheit>
                    </div>
                )
            default:
                console.log("Erro");
                break;
        }
    }
    return (
        <div>
            <h2>Conversor de temperatura</h2>

            <p>1. Celsius to Farenheit</p>
            <p>2. Farenheit to Celsius</p>
            <p>3. Celsius to Kelvin</p>
            <p>4. Kelvin to Celsius</p>
            <p>5. Farenheit to Kelvin</p>
            <p>6. Kelvin to Farenheit</p>

            <input type="number" value={opcao} onChange={(e) => setOp(e.target.value)}></input>
            {getOpcao()}


        </div>


    )
    
}
export default ConverteTemp;