import { useState, useEffect } from 'react';

import { Result, Formulario, Title, Estilo } from '../styles';

import { alvenaria } from '../../services/mock';


const Concreto = () => {
    const[volume, setVolume] = useState(0);
    const[value, setValue] = useState(0);

    const[argamassa, setArgamassa] = useState(0);
    const[cimento, setCimento] = useState(0);
    const[areia, setAreia] = useState(0);
    const[agua, setAgua] = useState(0);

    useEffect(() => {
            const dCimento = 0.32; //traço/massaEspecifica ->1/3.1
            const dAreia = 2.26; // traçoAreia/massaEspAreia -> 6/2.65
            const dAgua = 0.5; // traçoAgua/massaEspecifica -> 0.5/1
            const consumoCimento = argamassa/(dCimento+dAreia+dAgua);
            setCimento(Number.parseInt(consumoCimento/50));
            setAreia(Number.parseInt((consumoCimento*6)/1500)); // 1500 = 1,5(areiaUnitário)* 1000(m3)
            setAgua(Number.parseInt(consumoCimento));
    }, [argamassa]);  

    
    function handleInputChange(e) {
        setVolume(e.target.value);
    }

    function handleInputValue(event) {
        setValue(event.target.value);
    }

    function handleClick() {        
        setArgamassa(Number.parseInt(volume*value));
                
    }  


    return (
        <Result>
                <Formulario onClick={handleClick}>
                    <label>
                        <Title>Consumo de Argamassa</Title>
                        <Estilo>Qual o tipo de Alvenaria</Estilo> 
                        <select style={{marginLeft: '43px'}} name="volume" value={volume} onChange={handleInputChange}>
                            {alvenaria.map((item, index) => (
                                <option value={item.volume}>{item.descricao}</option>
                            ))}                            
                        </select>
                    </label>
                    <label>
                        <Estilo>Quantidade de Alvenaria(unidades)</Estilo>
                        <input style={{marginLeft: '20px'}} type="number" name="value" value={value} onChange={handleInputValue} />
                    </label>
                    <input type="button" value="Enviar" style={{ marginTop: '20px' }} />
                </Formulario>
                <Estilo>Volume de Argamassa(em litros): {argamassa} </Estilo>
                <Estilo>Sacos de Cimento(50kg): {cimento}</Estilo>
                <Estilo>Areia média(m3): {areia}</Estilo>
                <Estilo>Consumo de água(em litros) {agua}</Estilo>               
        </Result>
    )
}

export default Concreto;