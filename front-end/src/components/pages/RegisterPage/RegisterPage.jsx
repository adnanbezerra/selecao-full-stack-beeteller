import { Container, ContentContainer, Form, FormButton, ImageContainer, Input, Label, PageTitle, RegisterLink, Subtitle } from "./RegisterPageStyles";
import login from '../../../assets/images/login.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import axios from 'axios';
import { BASE_URL } from "../../../mock/data";

export default function RegisterPage() {
  const [form, setForm] = useState({ email: '', password: '', confirmPassword: '' });
  const { token } = useContext(UserContext);
  const navigate = useNavigate();
  const arePasswordsEqual = form.password === form.confirmPassword;

  async function submitForm(e) {
    e.preventDefault();

    if (arePasswordsEqual) {
      axios.post(`${BASE_URL}/sign-up`, form)
        .then(response => {
          navigate('/');
        })
        .catch(error => {
          alert("Problema na validação dos dados!");
          console.error(error);
        })
    } else {
      alert ("As senhas não conferem!");
    }
  }

  useEffect(() => {
    if (token) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <ImageContainer>
        <img src={login} alt="" />
      </ImageContainer>

      <ContentContainer>
        <PageTitle>
          Olá! Bem-vindo à Beeteller.
        </PageTitle>
        <Subtitle>
          Insira os dados para criar a sua conta.
        </Subtitle>

        <Form onSubmit={submitForm}>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type={'email'}
            placeholder={'Exemplo@email.com'}
            required
            value={form.email}
            onChange={e => setForm({ ...form, email: e.target.value })}
          />

          <Label htmlFor="password">Senha</Label>
          <Input
            id="password"
            type={'password'}
            placeholder={'Enter password'}
            required
            minLength={8}
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
          />

          <Label htmlFor="password">Confirmar a senha</Label>
          <Input
            id="password"
            type={'password'}
            placeholder={'Confirm password'}
            required
            minLength={8}
            value={form.confirmPassword}
            onChange={e => setForm({ ...form, confirmPassword: e.target.value })}
          />

          <FormButton>Cadastro</FormButton>
        </Form>

        <Link to={'/'} style={{ textDecoration: 'none' }}>
          <RegisterLink>Já tem conta? Faça login!</RegisterLink>
        </Link>
      </ContentContainer>
    </Container>
  )
}
