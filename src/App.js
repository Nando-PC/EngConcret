import { useState } from 'react';
import { Container, ResultContainer, Button, ButtonCusto, Option } from './components/styles';
import { Menu, Alvenaria, Concreto, Revestimento, Argamassa, Informacao, OrcamentoAlvenaria, OrcamentoRevestimento} from './components';



function App() {
  const[hasCalc, setHasCalc] = useState(true);
  const[hasInfo, setHasInfo] = useState(false);
  const[hasRev, setHasRev] = useState(false);
  const[custRev, setCustRev] = useState(false);
  const[custAlv, setCustAlv] = useState(false)

  function calcActive() {      
    setHasCalc(true);
    setHasInfo(false);
    setHasRev(false);
    setCustAlv(false);
    setCustRev(false);
  }
  function infoActive() {
    setHasCalc(false);
    setHasInfo(true);
    setHasRev(false);
    setCustAlv(false);
    setCustRev(false);
  }
  function revActive() {
    setHasCalc(false);
    setHasInfo(false);
    setHasRev(true);
    setCustAlv(false);
    setCustRev(false);
  }

  function custAlvActive(){
    setHasCalc(false);
    setHasInfo(false);
    setHasRev(false);
    setCustAlv(true);
    setCustRev(false);
  }

  function custRevActive(){
    setHasCalc(false);
    setHasInfo(false);
    setHasRev(false);
    setCustAlv(false);
    setCustRev(true);
  }


  return (
    <Container>
      <Menu />
      <Option>
        <Button onClick={revActive}>Revestimento</Button>
        <ButtonCusto onClick={custRevActive}>Revestimento$</ButtonCusto>
        <Button onClick={calcActive}>Alvenaria</Button>
        <ButtonCusto onClick={custAlvActive}>Alvenaria$</ButtonCusto>
        <Button onClick={infoActive}>Info</Button>
      </Option>
      {hasCalc && (
        <ResultContainer>
          <Alvenaria />
          <Concreto />
        </ResultContainer>
      )}
      {hasInfo && (
        <Informacao />
      )}
      {hasRev && (
        <ResultContainer>
           <Revestimento />
           <Argamassa />
      </ResultContainer>
      )}
      {custAlv && (
        <OrcamentoAlvenaria />
      )}
      {custRev && (
        <OrcamentoRevestimento />
      )}
    </Container>
  );
}

export default App;
