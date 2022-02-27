import { useState, useEffect } from 'react';

import { Result, Formulario, Estilo, Title } from '../styles';


const Argamassa = () => {
    const[value, setValue] = useState(0);
    const[rendimentoDois, setRendimentoDois] = useState(0);
    const[rendimentoTres, setRendimentoTres] = useState(0);

    useEffect(() => {
        setRendimentoTres(Number.parseFloat(value/3).toFixed(1));
    }, [value]);

    function handleInputValue(e) {
        setValue(e.target.value);
    }

    function handleClick(){
        const calculo = Number.parseFloat(value/2);
        setRendimentoDois(calculo.toFixed(1));        
    }

    return(
        <Result>
                <Formulario onClick={handleClick}>
                    <label>
                        <Title style={{marginLeft: '50px'}}>Argamassa Colante</Title>
                        <Estilo>Digite a Área para Revestimento(caixa/m²)</Estilo>
                        <input style={{marginLeft: '60px'}} type="number" name="value" value={value} onChange={handleInputValue} />
                    </label>
                    <input type="button" value="Enviar" style={{ marginTop: '20px' }} />
                </Formulario>
                <Estilo>Caixas de Revestimento(caixa=1m²): {value}</Estilo>
                <Estilo>Sacos de Argamassa(rendimento = 2 m²): {rendimentoDois} </Estilo>
                <Estilo>Sacos de Argamassa(rendimento = 3 m²): {rendimentoTres} </Estilo> 
        </Result>
    )
}

export default Argamassa;