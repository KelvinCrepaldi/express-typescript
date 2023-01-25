# express-typescript

just a simple starter example
express + typescript

## iniciar um projeto express+typescript super básico:

    > npm init -y
    > npm install typescript @types/node @types/express -D
    > npm install express uuid

criar tsconfig.json:

    > tsc --init

## Inicializador de typescript que substitui nodemon+sucrase:

    > npm install ts-node-dev -D

escrever um script de inicialização em package.json

```json
    "scripts":{
        "dev": "ts-node-dev src/app.ts"
    }
```

para iniciar o projeto:

    > npm run dev

## tipagem de bibliotecas:

    > npm install -D @types/nomedabiblioteca

exemplo:

    > npm install -D @types/express

# exemplo de estrutura:

    projeto/
    ├── node_modules/
    ├── src/
    │   ├── controllers/
    │   ├── database/
    │   ├── interfaces/
    │   ├── services/
    │   ├── app.ts
    │   └── routes.ts
    ├── tsconfig.json
    ├── package.json
    └── yarn.lock
