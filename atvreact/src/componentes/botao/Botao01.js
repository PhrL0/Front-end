const Botao01 = ()=> {
    function handleClick(){
        alert("Faculdade de Tecnologia")
    }
    return (
        <button onClick={handleClick}>Botão 1</button>
    );
}
export default Botao01;