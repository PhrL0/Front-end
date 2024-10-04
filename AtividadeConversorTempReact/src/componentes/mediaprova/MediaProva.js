import React, {useState} from "react";

function MediaProva(){
    //Definindo estados para armazenar os valores das três notas e da média
    const[nota1,setNota1] = useState(''); //Nota1
    const[nota2,setNota2] = useState('');
    const[nota3,setNota3] = useState('');
    const[media,setMedia] = useState(null);

    //Função para calcular a média
    const calcularMedia = () => {
        //Convertendo as notas para números decimais
        const num1 = parseFloat(nota1);
        const num2 = parseFloat(nota2);
        const num3 = parseFloat(nota3);

        //Verifica se os valores inseridos são válidos
        if(!isNaN(num1) && !isNaN(num2) && !isNaN(num3)){
            //Calculando a média das três notas
            const resultado = (num1 + num2 + num3) / 3;
            setMedia(resultado.toFixed(2));//Armazenando o resultado com duas casas decimais
        } else {
            alert("Por favor, insira valores.");
        }
    }
    return (
        <div>
            <h2>Calculadora Média</h2>
            <div>
                <input type="number" placeholder="Nota 1" value={nota1} onChange={(e) => setNota1(e.target.value)}></input>
            </div>
            <div>
                <input type="number" placeholder="Nota 2" value={nota2} onChange={(e) => setNota2(e.target.value)}></input>
            </div>
            <div>
                <input type="number" placeholder="Nota 3" value={nota3} onChange={(e) => setNota3(e.target.value)}></input>
            </div>
            <button onClick={calcularMedia}>Calcular Média</button>
            {media && <h3>Média:{media}</h3>}
        </div>
    )
}
export default MediaProva;