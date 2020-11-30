### Backend refatorado para o AdonisJS 5 Preview

- De acordo com os devs, apesar de ser versão de preview, já está pronta para uso em produção;
- Algumas features ainda não estão implementadas;
- No Trello deles há um [roadmap](https://trello.com/b/3klaHbfP) mostrando o progresso da implementação das features;

#### Passo a passo:
- Deletar pasta backend antiga;
- `$ yarn create adonis-ts-app backend` e criar uma API (e não Web application);
- `$ yarn add @adonisjs/lucid@alpha` para instalar o LucidORM (@alpha é necessário para versão preview do Adonis);
- `$ node ace invoke @adonisjs/lucid` para instalar DB (SQLite no caso);
- `$ node ace make:migration [NOME-DA-TABELA]` para criar migrations;