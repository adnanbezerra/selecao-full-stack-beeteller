import { CoinName, Container, Date, IconContainer, InformationsColumn, MaxMinValues, Variation } from "./QuotationRowStyle";
import { FiDollarSign } from 'react-icons/fi';
import { BiBitcoin } from 'react-icons/bi';
import { MdEuro } from 'react-icons/md';

export default function CotationRow({ date, minimum, maximum, variation, coin }) {
  function getIcon(coin) {
    if (coin === 'Dolar Americano') {
      return <FiDollarSign />
    } else if (coin === 'Bitcoin') {
      return <BiBitcoin />
    } else {
      return <MdEuro />
    }
  }

  const isPositive = variation > 0;

  return (
    <Container>
      <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
        <IconContainer>
          {getIcon(coin)}
        </IconContainer>

        <InformationsColumn>
          <CoinName>
            {coin}
          </CoinName>
          <Date>
            {date}
          </Date>
        </InformationsColumn>
      </div>

      <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
        <MaxMinValues>{maximum}</MaxMinValues>
        <MaxMinValues>{minimum}</MaxMinValues>
      </div>

      <div style={{ display: 'flex', height: '100%', alignItems: 'center' }}>
        <Variation isPositive={isPositive}>
          {isPositive ? '+' : ''}
          {variation}%
        </Variation>
      </div>
    </Container>
  )
}