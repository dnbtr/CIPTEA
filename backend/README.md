### Backend refatorado para o AdonisJS 5 Preview

- De acordo com os devs, apesar de ser versão de preview, já está pronta para uso em produção;
- Algumas features ainda não estão implementadas;
- No Trello deles há um [roadmap](https://trello.com/b/3klaHbfP) mostrando o progresso da implementação das features;
- Para ajuda, digitar `$ node ace --help`;

#### Passo a passo:
- Deletar pasta backend antiga;
- `$ yarn create adonis-ts-app backend` e criar uma API (e não Web application);
- `$ yarn add @adonisjs/lucid@alpha` para instalar o LucidORM (@alpha é necessário para versão preview do Adonis);
- `$ node ace invoke @adonisjs/lucid` para instalar DB (SQLite no caso);
- `$ node ace make:migration [NOME-DA-TABELA]` para criar migrations;


#### Notas
- Como o AdonisJS 5 foi feito para ser integrado com o Typescript, ele foi todo reformulado
- Por isso, todos os pacotes e dependências são diferentes em relação à versão 4;
- Toda a instalação foi feita com yarn + CLI (node ace);
- Features novas em relação ao Adonis 4:
  - Pasta `contracts` serve para configurar tipagens do TS;
  - Pasta `providers` tem funções que podem ser chamadas de acordo com o estado da aplicação;
  - Pasta `commands` para criar aliases de comandos ?

#### Progresso
- Falta refatorar todo o código para funcionar no Adonis 5 (a versão antiga já está copiada nos devidos lugares);
- Falta copiar os Validators;