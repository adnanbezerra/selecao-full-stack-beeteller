import { CoinSelector, Container, Cotacoes, InfoRow, MaxMinRow, Minimum, QuotationCardsRow, QuotationRowContainer, Title, TopRow } from "./FeedPageStyles";
import { TfiReload } from 'react-icons/tfi';
import CotationCard from "../../templates/CotationCard/QuotationCard";
import { useEffect, useReducer, useState } from "react";
import CotationRow from "../../templates/ContationRow/QuotationRow";
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import axios from 'axios';

export default function FeedPage() {

  const [comparisonsArray, setComparisonArray] = useState([
    { mainCoin: 'BRL', secondCoin: 'USD', value: 0 },
    { mainCoin: 'BTC', secondCoin: 'EUR', value: 0 },
    { mainCoin: 'BTC', secondCoin: 'USD', value: 0 }
  ]);
  const [quotationsRows, setQuotationsRows] = useState([]);
  const [lastSorted, setLastSorted] = useState('');
  const coins = ['Dolar Americano', 'Bitcoin', 'Euro'];
  const [coinRow, setCoinRow] = useState(0);
  
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);

  function loadValues(raiseCoinrow) {
    loadQuotationCardValues();
    loadQuotationRowsValues(raiseCoinrow);
    forceUpdate();
  }

  useEffect(() => {
    loadValues(0);
  }, []);

  function loadQuotationCardValues() {
    axios.get('https://economia.awesomeapi.com.br/last/USD-BRL,BTC-EUR,BTC-USD')
      .then((response) => {
        const firstValue = +response.data['USDBRL']['high'];
        const secondValue = +response.data['BTCEUR']['high'];
        const thirdValue = +response.data['BTCUSD']['high'];
        const newArray = [
          { ...comparisonsArray[0], value: firstValue.toFixed(2) },
          { ...comparisonsArray[1], value: secondValue.toFixed(2) },
          { ...comparisonsArray[2], value: thirdValue.toFixed(2) }
        ]
        setComparisonArray(newArray);
      })
      .catch((error) => {
        alert("Erro ao coletar dados da API externa!");
        console.error(error);
      })
  }

  function loadQuotationRowsValues(raiseCoinrow) {
    axios.get(`https://economia.awesomeapi.com.br/json/daily/${getCoinAbreviation(raiseCoinrow)}-BRL/10`)
      .then((response) => {
        const newArray = response.data.map(
          (entry) => {
            const minimum = +entry['low'];
            const maximum = +entry['high'];
            const percentage = +entry['pctChange'];
            return {
              date: formatSecondsToBRDate(entry['timestamp']),
              minimum: minimum.toFixed(4),
              maximum: maximum.toFixed(4),
              variation: percentage.toFixed(2),
            }
          }
        );
        setQuotationsRows(newArray);
        forceUpdate();
      })
      .catch((error) => {
        alert("Erro ao coletar dados da API externa!");
        console.error(error);
      })
  }

  function getDolarValues() {
    axios.get(`https://economia.awesomeapi.com.br/json/daily/USD-BRL/10`)
      .then((response) => {
        const newArray = response.data.map(
          (entry) => {
            const minimum = +entry['low'];
            const maximum = +entry['high'];
            const percentage = +entry['pctChange'];
            return {
              date: formatSecondsToBRDate(entry['timestamp']),
              minimum: minimum.toFixed(4),
              maximum: maximum.toFixed(4),
              variation: percentage.toFixed(2),
            }
          }
        );
        setQuotationsRows(newArray);
        forceUpdate();
      })
      .catch((error) => {
        alert("Erro ao coletar dados da API externa!");
        console.error(error);
      })
  }

  function formatSecondsToBRDate(entry) {
    const secondsToNumber = +entry;

    let t = new Date(1970, 0, 1);
    t.setSeconds(secondsToNumber);
    t = t.toLocaleString('pt-br');

    return t.slice(0, 10);
  }

  function getCoinAbreviation(raiseCoinrow) {
    if (coins[coinRow + raiseCoinrow] === 'Dolar Americano') {
      return 'USD';
    } else if (coins[coinRow + raiseCoinrow] === 'Euro') {
      return 'EUR';
    } else {
      return 'BTC';
    }
  }

  function getQuotationCards() {
    return (
      comparisonsArray.map(
        (comparison) => {
          return (
            <CotationCard
              key={`${comparison.mainCoin}/${comparison.secondCoin}`}
              mainCoin={comparison.mainCoin}
              secondCoin={comparison.secondCoin}
              value={comparison.value}
            />
          )
        }
      )
    )
  }

  function getQuotationRows() {
    return (
      quotationsRows.map(
        (quotation) => {
          return (
            <CotationRow
              key={quotation.date}
              date={quotation.date}
              minimum={quotation.minimum}
              maximum={quotation.maximum}
              variation={quotation.variation}
              coin={coins[coinRow]}
            />
          )
        }
      )
    )
  }

  function sortQuotationsBy(entry) {
    if (entry === lastSorted) {
      setQuotationsRows(
        quotationsRows.sort(
          (a, b) => {
            let fa = a['date'].toLowerCase(),
              fb = b['date'].toLowerCase();
            if (fa > fb) {
              return -1;
            }
            if (fa < fb) {
              return 1;
            }
            return 0;
          }
        )
      )
      setLastSorted("");
    } else {
      setQuotationsRows(
        quotationsRows.sort(
          (a, b) => {
            return b[entry] - a[entry];
          }
        )
      )
      setLastSorted(entry);
    }
  }

  function getProperArrow(entry) {
    if (entry === lastSorted) {
      return <IoIosArrowUp />
    } else {
      return <IoIosArrowDown />
    }
  }

  function changeCoin() {
    if (coinRow === 2) {
      setCoinRow(0);
      getDolarValues();
    } else {
      setCoinRow(coinRow + 1);
      loadValues(1);
    }
  }

  return (
    <Container>
      <TopRow>
        <Title>Moedas</Title>
        <TfiReload style={{ color: '#828282', fontSize: '18px' }} onClick={loadValues} />
      </TopRow>

      <QuotationCardsRow>
        {
          getQuotationCards()
        }
      </QuotationCardsRow>

      <TopRow>
        <Cotacoes>Cotações</Cotacoes>
        <CoinSelector onClick={changeCoin}>{coins[coinRow]} <IoIosArrowDown style={{ marginLeft: '5px' }} /></CoinSelector>
      </TopRow>

      <InfoRow>
        <p>Moeda</p>
        <MaxMinRow>
          <Minimum
            onClick={() => sortQuotationsBy('minimum')}
          >
            Mínima {getProperArrow('minimum')}
          </Minimum>
          <p onClick={() => sortQuotationsBy('maximum')}>
            Máxima {getProperArrow('maximum')}</p>
        </MaxMinRow>
        <p onClick={() => sortQuotationsBy('variation')}>Variação {getProperArrow('variation')}</p>
      </InfoRow>

      <QuotationRowContainer>
        {
          getQuotationRows()
        }
      </QuotationRowContainer>
    </Container>
  )
}
