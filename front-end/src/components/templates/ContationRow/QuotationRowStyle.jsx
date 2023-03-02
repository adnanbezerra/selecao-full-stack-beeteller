import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 10px;

  align-items: center;
  padding: 32px 16px;
  box-sizing: border-box;

  color: #000;
  font-size: 20px;

  justify-content: space-between;
`

export const MinMaxColumn = styled.div`
  display: flex;
  height: 100%;
  align-items: center;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`

export const IconContainer = styled.div`
  background-color: #F4C23B;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;  
  margin-right: 16px;

  @media (max-width: 800px) {
    width: 50px;
    height: 50px;
    margin-right: 8px;
  }
`

export const LeftContentContainer = styled.div`
  display: flex;
  height: 100%; 
  align-items: center;
  width: 211px;

  @media (max-width: 800px) {
    width: 150px;
    box-sizing: border-box;
  }
`

export const InformationsColumn = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
`

export const CoinName = styled.div`
  color: #333333;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;

  @media (max-width: 800px) {
    width: 90px;
  }
`

export const Date = styled.p`
  color: #828282;
  font-size: 14px;
  font-weight: 500;
`

export const MinValues = styled.p`
  color: #333333;
  font-size: 18px;
  font-weight: 500;
`

export const MaxValues = styled.p`
  color: #333333;
  font-size: 18px;
  font-weight: 500;
  margin-right: 145px;

  @media (max-width: 801px) {
    margin: 0;
  }
`

export const Variation = styled.div`
  padding: 8px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  color: #333333;
  border-radius: 8px; 

  background-color: ${props => props.isPositive ? '#F4C23B' : '#E0E0E0'};
`
