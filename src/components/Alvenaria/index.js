import { useState } from "react";
import { Formulario, AlvenariaContainer, Estilo, Title } from "../styles";

import { alvenaria } from './../../services/mock';

const Alvenaria = () => {

    const [area,setArea] = useState(0);
    const [value, setValue] = useState(0);
    const [resultado, setResultado] = useState(0);
    
    function handleInputValue(e) {
        setValue(e.target.value);
    }

    function handleInputChange(event) {
        setArea(event.target.value);

        
    }

    function handleClick() {
        setResultado(Number.parseInt(value/area));
        // const resultado = Number.parseInt(value/area);
        // alert('A quantidade de alvenaria(em unidades) é:' +resultado );
    }
    
    return (
            <AlvenariaContainer>
                <Formulario onClick={handleClick}>
                    <label>
                        <Title style={{marginLeft: '30px'}}>Alvenaria</Title>
                        <Estilo>Qual o tipo de Alvenaria</Estilo> 
                        <select name="area" value={area} onChange={handleInputChange}>
                            {alvenaria.map((item, index) => (
                                <option value={item.area}>{item.descricao}</option>
                            ))}                            
                        </select>
                    </label>
                    <label>
                        <Estilo>Digite a área de alvenaria(em m²)</Estilo>
                        <input style={{marginLeft: '20px'}} type="number" name="value" value={value} onChange={handleInputValue} />
                    </label>
                    <input type="button" value="Enviar" style={{ marginTop: '20px' }} />
                </Formulario>
                <Estilo>Quantidade de Alvenaria(unidades): {resultado}</Estilo>               
            </AlvenariaContainer>
    )
}

export default Alvenaria;