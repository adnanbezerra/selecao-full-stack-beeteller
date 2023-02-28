import styled from "styled-components";

export const Container = styled.div`
  z-index: 1;
  position: absolute;
  height: 100%;
  width: 100%;

  @media(min-width: 1000px) {
    display: flex;
  }
`

export const ImageContainer = styled.div`
  display: none;

  @media(min-width: 1000px) {
    display: flex;
    width: 50%;

    img {
      width: 100%;
    }
  }
`

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 0 5%;
  box-sizing: border-box;

  @media(min-width: 1000px) {
    width: 50%;
    padding: 0 0 0 10%;
    box-sizing: border-box;
  }

  @media(min-width: 600px) {
    padding: 0 10%;
    box-sizing: border-box;
  }
`

export const PageTitle = styled.p`
  font-size: 36px;
  color: #333333;
  margin-bottom: 15px;
`

export const Subtitle = styled.p`
  font-size: 24px;
  color: #828282;
`

export const Label = styled.label`
  margin-bottom: 8px;
  color: #333333;
  font-size: 14px;
`

export const Input = styled.input`
  border: 1px solid #E0E0E0;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  width: 100%;
  height: 50px;
  margin-bottom: 24px;
  padding-left: 20px;
  box-sizing: border-box;

  ::placeholder {
    font-size: 14px;
    color: #BDBDBD;
  }
`

export const FormButton = styled.button`
  background: #F4C23B;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  width: 100%;
  height: 50px;
  border: 0;

  &:hover{
    cursor: pointer;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 60px;
  margin-bottom: 15px;
`

export const RegisterLink = styled.p`
  color: #F4C23B;
  font-size: 14px;
`

export const TextsRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
