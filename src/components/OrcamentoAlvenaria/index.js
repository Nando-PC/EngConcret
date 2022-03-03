import { useState } from "react";

import { Estilo, Title, InfoContainer, Label } from "../styles";

const OrcamentoAlvenaria = () => {
    const [qtdeAlvenaria, setQtdeAlvenaria] = useState(0);
    const [custoAlvenaria,setCustoAlvenaria] = useState(0);
    const [volAreia, setVolAreia] = useState(0);
    const [custoAreia, setCustoAreia] = useState(0);
    const [qtdeCimento, setQtdeCimento] = useState(0);
    const [custoCimento, setCustoCimento] = useState(0);
    const [total, setTotal] = useState(0);

    function handleQtdeAlvenaria(e) {
        setQtdeAlvenaria(e.target.value);
    }

    function handleCustoAlvenaria(e) {
        setCustoAlvenaria(e.target.value);
    }

    function handleVolAreia(e) {
        setVolAreia(e.target.value);
    }

    function handleCustoAreia(e) {
        setCustoAreia(e.target.value);
    }

    function handleQtdeCimento(e) {
        setQtdeCimento(e.target.value);
    }

    function handleCustoCimento(e) {
        setCustoCimento(e.target.value);
    }
    function handleClick() {
        let calculo = (qtdeAlvenaria*custoAlvenaria)+(volAreia*custoAreia)+(qtdeCimento*custoCimento)
        setTotal(Number.parseFloat(calculo).toFixed(2));
    } 
    
    return(
        <InfoContainer>            
            <form onClick={handleClick}>
                <Title>Orçamento de Alvenaria</Title>
                <Label>                    
                    <Estilo>Quantidade de Alvenaria(unidades)</Estilo>
                    <input style={{marginLeft: '61px'}} type="number" name="value" value={qtdeAlvenaria} onChange={handleQtdeAlvenaria} />
                </Label>
                <Label>
                    <Estilo>Valor da Alvenaria(R$/unidade)</Estilo>
                    <input style={{marginLeft: '85px'}} type="number" name="value" value={custoAlvenaria} onChange={handleCustoAlvenaria} />
                </Label>
                <Label>
                    <Estilo>Qual é o volume total de Areia(m³)</Estilo>
                    <input style={{marginLeft: '62px'}} type="number" name="value" value={volAreia} onChange={handleVolAreia} />
                </Label>
                <Label>
                    <Estilo>Valor da Areia(R$/m³)</Estilo>
                    <input style={{marginLeft: '140px'}} type="number" name="value" value={custoAreia} onChange={handleCustoAreia} />
                </Label>
                <Label>
                    <Estilo>Quantos sacos de cimento serão utilizados</Estilo>
                    <input style={{marginLeft: '18px'}} type="number" name="value" value={qtdeCimento} onChange={handleQtdeCimento} />
                </Label>
                <Label>
                    <Estilo>Valor do saco de cimento(R$/unidade)</Estilo>
                    <input style={{marginLeft: '43px'}} type="number" name="value" value={custoCimento} onChange={handleCustoCimento} />
                </Label>
                <input type="button" value="Enviar" style={{ marginTop: '20px' }} />
            </form>
            <Estilo>Valor Total deste Orçamento: R$ {total}</Estilo>
        </InfoContainer> 
        
    )
}

export default OrcamentoAlvenaria;