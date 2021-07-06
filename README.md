<p align="center">
  <img alt="logo" style="border-radius:8px" src="./.github/logo.png">
</p>

<p align="center">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-yellow.svg">
</p>

## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/pt-br)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [Typescript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [JSONWebToken](https://github.com/auth0/)

## 💻 Projeto

Esse projeto implementa de maneira simplifica a autenticação com refresh-token armazenando-o no banco de dados sqlite (podendo ser facilmente trocado por qualquer outro), para simular o fluxo inteiro de autenticação também existe um modelo de usuário no banco de dados.

## 🚀 Como executar

- Clone o repositório;
- Rode `yarn` para baixar as dependências;
- Copie o arquivo `.env.example` para o arquivo `.env` e preencha de forma adequada;
- Rode `yarn prima migration dev` para criar as tabelas do banco de dados;
- Rode o `yarn dev` para iniciar a aplicação.

Por fim, a aplicação estará disponível em `http://localhost:3333`

## 🚧 Como compilar

- Rode `yarn build` para compilar;
- Rode `yarn start` para rodar o projeto.

---

## 📄 Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

