# Primeira API usando GraphQL

O GraphQL substitui o padrão REST de uma API, resolvendo alguns problemas presentes neste padrão, como o under fatching e o over fatching.
Neste projeto criamos duas APIs usando o GraphQL e o Apollo Server.

- A primeira API, foi feita de maneira simples, sem utilizar o Type GraphQL e criando o schema de maneira manual,

- A segunda API, utiliza o Type GraphQL para gerar o schema de maneira automática

## Ferramentas e Tecnologias
- `Node JS`
- `Typescript`
- `GraphQL`
- `Apollo Server`
- `TypeGraphQL`

## Passo a passo
1. *Criação do diretório*
Para criar uma projeto Node, primeiro criamos um diretório com o nome do projeto

2. *Inicialização*
Dentro da pasta iniciamos o npm, para possibilitar a adição de bibliotecas
```bash
  npm init -y
```

3. *Adicionando Typescript*
Instalando o typescript e o ts-node-dev, que serão utilizados para rodar o projeto Node
```bash
  npm install typescript ts-node-dev -D
```

4. *Inicializando o Typescript*
Criando arquivo `tsconfig.json`
```bash
  npx tsc --init
```

5. *Criação do Script do Ts Node Dev*
Adicionado o script ao arquivo `package.json`
```json
  "scripts": {
    "dev:simple": "tsnd --respawn --transpile-only simple-server.ts"
  },
```

Também criamos o arquivo `simple-server.ts`.

6. *Criação do servidor GraphQL*
Para criação de um simples servidor GraphQL, iremos instalar as bibliotecas do `GraphQL` e do `Apollo Server`
```bash
  npm install graphql apollo-server
```

Dentro do ecossistema Node, o Apollo Server é a ferramenta mais popular, e mais utilizada. Ele seria quase como um framework para utilização do GraphQL em backend com Node.

7. *Instalação do TypeGraphQL*
Para trabalhar com o TypeScript e GraphQL, (Pode ser que ocorra erro de incompatibilidade de versão com o graphql, qualquer coisa é só remover o graphql e instalar junto com o type-graphql)
```bash
  npm i graphql class-validator type-graphql
```

```bash
  npm i reflect-metadata
```

Demais configurações [clique aqui](https://typegraphql.com/docs/installation.html)

## Rodando Servidor
Primeiramente instale as dependências
```bash
  npm install
```

Este projeto contem duas APIs em GraphQL, para rodar uma ou outra, utilize os comandos
```bash
  # Simples
  npm run dev:simple

  # Mais complexa
  npm run dev
```