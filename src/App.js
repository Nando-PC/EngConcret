import { useState } from 'react';
import { Container, ResultContainer, Button, Option } from './components/styles';
import { Menu, Alvenaria, Concreto, Informacao} from './components';



function App() {
  const[hasCalc, setHasCalc] = useState(true);
  const[hasInfo, setHasInfo] = useState(false);

  function calcActive() {      
    setHasCalc(true);
    setHasInfo(false);
  }
  function infoActive() {
    setHasCalc(false);
    setHasInfo(true);
  }

  return (
    <Container>
      <Menu />
      <Option>
        <Button onClick={calcActive}>Calculo</Button>
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
    </Container>
  );
}

export default App;
