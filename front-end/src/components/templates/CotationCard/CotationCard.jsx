import { Container, CotationContainer, DolarTurismo, IconContainer, RS, Value, ValueContainer } from "./ContationCardStyle";
import { FiDollarSign } from 'react-icons/fi';
import { BiBitcoin } from 'react-icons/bi';

export default function CotationCard({ mainCoin, secondCoin, value }) {
  function getIcon(mainCoin) {
    if (mainCoin === 'BRL') {
      return <FiDollarSign />
    } else {
      return <BiBitcoin />
    }
  }

  return (
    <Container>
      <CotationContainer>
        <p>{mainCoin} / {secondCoin}</p>

        <ValueContainer>
          <RS>R$</RS>
          <Value>{value}</Value>
        </ValueContainer>

        <DolarTurismo>
          {mainCoin === 'BRL' ? 'Dolar turismo' : <></>}
        </DolarTurismo>
      </CotationContainer>

      <IconContainer>
        {getIcon(mainCoin)}
      </IconContainer>
    </Container>
  )
}