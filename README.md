# <p align = "center"> Teste de dev full-stack da Beeteller </p>

<p align="center">
   <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic.wixstatic.com%2Fmedia%2F6b4357_ff1a21eee4c74cd59dafe28a3695117f~mv2.jpg%2Fv1%2Ffill%2Fw_1080%2Ch_1081%2Cal_c%2F6b4357_ff1a21eee4c74cd59dafe28a3695117f~mv2.jpg&f=1&nofb=1&ipt=44956a8c45301911a3d86ad08f76efc79e5d253eaf00870a60844216be51896d&ipo=images" width="250px"/>
</p>

<p align = "center">
   <img src="https://img.shields.io/badge/author-adnanbezerra-4dae71?style=flat-square" />
   <img src="https://img.shields.io/github/languages/count/adnanbezerra/selecao-full-stack-beeteller?color=4dae71&style=flat-square" />
</p>


##  :clipboard: Descrição

Este é o teste técnico para o processo seletivo de desenvolvedor web full-stack pela empresa Beeteller. Para ele, é preciso criar uma aplicação web simples, que consiste em três telas: uma de login, uma de cadastro e uma para visualizar um feed com novidades referentes ao câmbio de ativos, com informações extraídas de APIs externas, todas as telas responsivas.

Para este projeto, eu irei utilizar React para o front e Node para o back. 

### Passo-a-passo para resolução do projeto:

- Primeiramente, leitura atenciosa do README do projeto e também estudo do Figma para entender o design;
- Criação do repositório no GitHub e configurações inicials;
- Criação do README inicial;
- Importação do [modelo de projeto back-end](https://github.com/adnanbezerra/backend-typescript) criado por mim;
- Fazer planos iniciais do front-end e do back-end;

***

## :computer: Tecnologias e Conceitos

- Node.js
- ReactJS
- JavaScript
- TypeScript
- Arquitetura com camadas
- PostgreSQL com Prisma
- JWT
- Testagem com Jest e Faker
- Axios
- Router-Dom
- Responsividade
- etc

***

## 🏁 Rodando o projeto

### Back-end

O back-end foi feito com [ExpressJS](https://github.com/expressjs/express), então é preciso que sua máquina tenha instaladas as versões estáveis mais recentes do [Node.js](https://nodejs.org/en/download/) e do [npm](https://www.npmjs.com/).

Primeiramente, você precisa clonar todo o projeto para a sua máquina:

```
git clone https://github.com/adnanbezerra/selecao-full-stack-beeteller.git
```

Então, dentro do diretório do back-end, você deve rodar o seguinte comando para instalar as dependências necessárias:

```
npm install
```

Agora, você preisa configurar o arquivo `.env`. Você deve copiar o que estiver dentro de `.env.example`, criar um arquivo `.env`, colar as informações copiadas e preencher as variáveis necessárias para fazer a aplicação funcionar em sua máquina. Para tanto, é preciso que você tenha o [Postgres](https://www.postgresql.org/) instalado, para gerar a DATABASE_URL com as informações de sua máquina.

Agora, você pode finalmente rodar o seu servidor localmente usando esse comando:

```
npm start
```

### Front-end

O front-end do projeto foi inicializado com o [Vite](https://vitejs.dev/), e, portanto, roda tanto o [Node.js](https://nodejs.org/en/download/) quanto [npm](https://www.npmjs.com), tal qual ocorre no back-end. Portanto, as dependências de funcionamento são as mesmas.

Agora, navegue até o diretório do back-end e rode o seguinte comando para instalar as dependencias>

```
npm install
```

Finalizado o processo, é só inicializar o servidor com:

```
npm run dev
```
