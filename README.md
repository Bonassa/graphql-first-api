# Primeira API usando GraphQL

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
```
  npm install graphql apollo-server
```

Dentro do ecossistema Node, o Apollo Server é a ferramenta mais popular, e mais utilizada. Ele seria quase como um framework para utilização do GraphQL em backend com Node.

## Rodando Servidor
Para iniciar o servidor em desenvolvimento
```
  npm run dev:simple
```