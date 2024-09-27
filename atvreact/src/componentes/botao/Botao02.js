import React from 'react';
import Swal from 'sweetalert2';

const Botao02 = () => {
    const handleClick = () => {
        Swal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
          });
    };

    return (
        <button onClick={handleClick}>Clique aqui</button>
    );
};

export default Botao02;
