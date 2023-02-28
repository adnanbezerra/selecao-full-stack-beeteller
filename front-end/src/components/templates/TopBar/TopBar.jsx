import { Container, Divider, TextContainer } from "./TopBarStyles";
import beeteller from '../../../assets/images/beeteller.png';
import cotacoes from '../../../assets/images/cotacoes.png';
import vector from '../../../assets/images/vector.png';

export default function TopBar() {
  return (
    <Container>
      <TextContainer>
        <img src={beeteller} alt="Beeteller logo" />
        <Divider></Divider>
        <img src={cotacoes} alt="Cotações" />
        <img src={vector} alt="Vector icon" />
      </TextContainer>
      EN
    </Container>
  )
}