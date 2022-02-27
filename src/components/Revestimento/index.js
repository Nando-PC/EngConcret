import { useState, useEffect } from 'react';
import { AlvenariaContainer, Formulario, Title, Estilo} from './../styles';

const Revestimento = () => {
    const [largura, setLargura] = useState(0);
    const [comprimento, setComprimento] = useState(0);
    const [value, setValue] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [caixa, setCaixa] = useState(0);

    function handleInputWidth(e){
        setLargura(e.target.value);
    }

    function handleInputLength(ev){
        setComprimento(ev.target.value);
    }

    function handleInputValue(evt){
        setValue(evt.target.value);
    }

    function handleClick() {
        const calculo = value/((comprimento*0.01)*(largura*0.01));
        setResultado(Number.parseFloat(calculo).toFixed(1));
    }

    useEffect(() => {
        setCaixa(Number.parseFloat(resultado/value).toFixed(1));
    }, [resultado, value]);

    return (
            <AlvenariaContainer>
                <Formulario onClick={handleClick}>
                    <label>
                        <Title style={{marginLeft: '50px'}}>Revestimento</Title>
                        <Estilo>Digite a Largura do Revestimento(em cm)</Estilo> 
                        <input style={{marginLeft: '40px'}} type="number" name="largura" value={largura} onChange={handleInputWidth} />
                    </label>
                    <label>
                    <Estilo>Digite o Comprimento do Revestimento(em cm)</Estilo>
                    <input style={{marginLeft: '60px'}} type="number" name="comprimento" value={comprimento} onChange={handleInputLength} />
                    </label>
                    <label>
                        <Estilo>Digite a Área para Revestimento(em m²)</Estilo>
                        <input style={{marginLeft: '40px'}} type="number" name="value" value={value} onChange={handleInputValue} />
                    </label>
                    <input type="button" value="Enviar" style={{ marginTop: '20px' }} />
                </Formulario>
                <Estilo>Quantidade de Revestimento(unidades): {resultado}</Estilo>
                <Estilo>Revestimentos por caixa(caixa=1m²): {caixa}</Estilo>               
            </AlvenariaContainer>
    )

}
export default Revestimento;