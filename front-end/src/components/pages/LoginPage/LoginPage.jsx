import { Container, ContentContainer, Form, FormButton, ImageContainer, Input, Label, PageTitle, RegisterLink, Subtitle, TextsRow } from "./LoginPageStyles";
import login from '../../../assets/images/login.png';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import axios from 'axios';
import { BASE_URL } from "../../../mock/data";

export default function LoginPage() {
  const [form, setForm] = useState({ email: '', password: '' });
  const { token, setToken } = useContext(UserContext);
  const navigate = useNavigate();

  async function submitForm(e) {
    e.preventDefault();

    axios.post(`${BASE_URL}/sign-in`, form)
      .then(response => {
        setToken(response.data);
        navigate('/feed');
      })
      .catch(error => {
        alert("Problema na validação dos dados!");
        console.error(error);
      })
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
          Olá! Bem-vindo de volta.
        </PageTitle>
        <Subtitle>
          Faça login com seus dados inseridos durante o seu registro.
        </Subtitle>

        <Form onSubmit={submitForm}>
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type={'email'}
            placeholder={'Exemplo@email.com'}
            required
            value={form.email}
            onChange={e => setForm({ email: e.target.value, password: form.password })}
          />

          <TextsRow>
            <Label htmlFor="password">Senha</Label>
            <RegisterLink>Esqueceu a senha?</RegisterLink>
          </TextsRow>
          <Input
            id="password"
            type={'password'}
            placeholder={'Enter password'}
            required
            minLength={8}
            value={form.password}
            onChange={e => setForm({ password: e.target.value, email: form.email })}
          />

          <FormButton>Login</FormButton>
        </Form>

        <Link to={'/register'} style={{ textDecoration: 'none' }}>
          <RegisterLink>Não tem uma conta? Crie agora!</RegisterLink>
        </Link>
      </ContentContainer>
    </Container>
  )
}
        <Link to={'/register'} style={{ textDecoration: 'none' }}>
          <RegisterLink>Não tem uma conta? Crie agora!</RegisterLink>
        </Link>
      </ContentContainer>
    </Container>
  )
}