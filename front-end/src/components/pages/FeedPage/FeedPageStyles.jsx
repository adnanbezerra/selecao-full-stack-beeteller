import styled from "styled-components";

export const Container = styled.div`
  margin-top: 90px;
  z-index: 1;
  position: absolute;
  width: 100%;
  padding: 0 10%;
  box-sizing: border-box;

  @media (max-width: 800px) {
    padding: 0 5%;
  }
`

export const Title = styled.h2`
  color: #333333;
  font-size: 36px;
  margin-top: 35px;
  margin-bottom: 10px;
  font-weight: 500;
`

export const TopRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const MaxMinRow = styled.div`
  display: flex; 
  margin-left: 180px;

  @media (max-width: 800px) {
    margin-left: 100px;
  }
`

export const Minimum = styled.p`
  margin-right: 135px;

  @media (max-width: 800px) {
    margin-right: 10px;    
  }
`

export const QuotationCardsRow = styled.div`
  display: flex;

  overflow: auto;
  box-sizing: border-box;

  height: 230px;
  align-items: center;
  width: 100%;

  padding-left: 20px;
  margin-left: -20px;
  
  scrollbar-width: none;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
`

export const Cotacoes = styled.h2`
  color: #333333;
  font-size: 36px;
  margin: 23px 0 48px 0;
  font-weight: 500;
`

export const QuotationRowContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InfoRow = styled.div`
  display: flex;
  justify-content: space-between;
  color: #828282;
  font-size: 14px;
  font-weight: 500;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 25px;

  p{
    :hover {
      cursor: pointer;
    }
  }
`

export const CoinSelector = styled.div`
  display: flex;
  border: 1px solid #E0E0E0;
  border-radius: 4px;
  width: 190px;
  height: 40px;
  justify-content: center;
  align-items: center;
  color: #333333;
  font-size: 18px;
  font-weight: 500;
`
