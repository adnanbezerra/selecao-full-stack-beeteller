import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  width: 370px;
  height: 190px;
  padding: 20px;
  box-sizing: border-box;

  color: #000;
  font-size: 20px;

  margin-right: 32px;

  @media (min-width: 600px) {
    width: 200px;
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
`

export const CotationContainer = styled.div`
  display: flex;
  color: #333333;
  font-size: 18px;
  font-weight: 500;
  flex-direction: column;
  height: 100%;

  justify-content: space-between;
`

export const DolarTurismo = styled.p`
  color: #828282;
  font-size: 14px;
  font-weight: 500;
`

export const RS = styled.p`
  color: #828282;
  font-size: 18px;
  font-weight: 500;
`

export const Value = styled.p`
  color: #333333;
  font-size: 48px;
  font-weight: 500;
  margin-left: 10px;
`

export const ValueContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 25px 0;
`
