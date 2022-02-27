import { useState } from 'react';
import { Container, ResultContainer, Button, Option } from './components/styles';
import { Menu, Alvenaria, Concreto, Revestimento, Argamassa, Informacao} from './components';



function App() {
  const[hasCalc, setHasCalc] = useState(true);
  const[hasInfo, setHasInfo] = useState(false);
  const[hasRev, setHasRev] = useState(false);

  function calcActive() {      
    setHasCalc(true);
    setHasInfo(false);
    setHasRev(false);
  }
  function infoActive() {
    setHasCalc(false);
    setHasInfo(true);
    setHasRev(false);
  }
  function revActive() {
    setHasCalc(false);
    setHasInfo(false);
    setHasRev(true);
  }


  return (
    <Container>
      <Menu />
      <Option>
        <Button onClick={revActive}>Revestimento</Button>
        <Button onClick={calcActive}>Alvenaria</Button>
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
    </Container>
  );
}

export default App;
