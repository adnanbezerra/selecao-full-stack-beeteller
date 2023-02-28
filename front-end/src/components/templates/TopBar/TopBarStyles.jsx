import styled from 'styled-components';

export const Container = styled.header`
  height: 85px;
  width: 100%;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 3;
  background-color: white;

  img {
    margin-right: 10px;
  }
`

export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Divider = styled.div`
  height: 45px;
  background-color: #BDBDBD;
  width: 1px;
  margin-right: 10px;
`
