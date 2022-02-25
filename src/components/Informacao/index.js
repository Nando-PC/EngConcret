import { useState } from 'react';

import { InfoContainer } from "../styles";

import {alvenaria} from './../../services/mock';

const Informacao = () => {
    const[dimensao,setDimensao] = useState('');

    function handleChange(e){
        setDimensao(e.target.value);
    }

    return(
        <>
            <InfoContainer>
                <form>
                    <h1>Informações Complementares</h1>
                    <label>
                        Selecione o Tipo de Alvenaria: 
                        <select name="dimensoes" value={dimensao} onChange={handleChange}>
                            {alvenaria.map((item,index) => (
                                <option placeholder='Selecione' value={item.dimensoes}>{item.descricao}</option>
                            ))}
                        </select>
                    </label>
                </form>
                <p>Dimensões da alvenaria selecionada: {dimensao}</p>
                <ul>Observações: 
                    <li>Este aplicativo faz uso de Dosagem empírica;</li>
                    <li>Dimensionamento para alvenaria não-estrutural, ou seja, para vedação;</li>
                    <li>Traço de assentamento(argamassa) 1:6 cimento/areia;</li>
                    <li>Para cálculo do volume de argamassa, e = 1,0cm (espessura da argamassa);</li>
                </ul>
            </InfoContainer>            
        </>
    )
}

export default Informacao;