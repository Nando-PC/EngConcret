import { useState } from "react";

import { Estilo, Title, InfoContainer, Label } from "../styles";

const OrcamentoRevestimento = () => {
    const [qtdeRevestimento, setQtdeRevestimento] = useState(0);
    const [custoRevestimento,setCustoRevestimento] = useState(0);
    
    const [qtdeArgamassa, setQtdeArgamassa] = useState(0);
    const [custoArgamassa, setCustoArgamassa] = useState(0);
    const [total, setTotal] = useState(0);

    function handleQtdeRevestimento(e) {
        setQtdeRevestimento(e.target.value);
    }

    function handleCustoRevestimento(e) {
        setCustoRevestimento(e.target.value);
    }

    function handleQtdeArgamassa(e) {
        setQtdeArgamassa(e.target.value);
    }

    function handleCustoArgamassa(e) {
        setCustoArgamassa(e.target.value);
    }
    function handleClick() {
        let calculo = (qtdeRevestimento*custoRevestimento)+(qtdeArgamassa*custoArgamassa);
        setTotal(Number.parseFloat(calculo).toFixed(2));
    } 
    
    return(
        <InfoContainer>            
            <form onClick={handleClick}>
                <Title>Orçamento de Revestimento</Title>
                <Label>                    
                    <Estilo>Qual a área total de Revestimento(m²)</Estilo>
                    <input style={{marginLeft: '59px'}} type="number" name="value" value={qtdeRevestimento} onChange={handleQtdeRevestimento} />
                </Label>
                <Label>
                    <Estilo>Valor do Revestimento(R$/m²)</Estilo>
                    <input style={{marginLeft: '108px'}} type="number" name="value" value={custoRevestimento} onChange={handleCustoRevestimento} />
                </Label>
                <Label>
                    <Estilo>Quantos sacos de argamassa serão utilizados</Estilo>
                    <input style={{marginLeft: '20px'}} type="number" name="value" value={qtdeArgamassa} onChange={handleQtdeArgamassa} />
                </Label>
                <Label>
                    <Estilo>Valor do saco de argamassa(R$/unidade)</Estilo>
                    <input style={{marginLeft: '45px'}} type="number" name="value" value={custoArgamassa} onChange={handleCustoArgamassa} />
                </Label>
                <input type="button" value="Enviar" style={{ marginTop: '20px' }} />
            </form>
            <Estilo>Valor Total deste Orçamento: R$ {total}</Estilo>
        </InfoContainer> 
        
    )
}

export default OrcamentoRevestimento;