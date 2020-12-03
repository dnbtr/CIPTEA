### Backend refatorado para o AdonisJS 5 Preview

- De acordo com os devs, apesar de ser versão de preview, já está pronta para uso em produção;
- Algumas features ainda não estão implementadas;
- No Trello deles há um [roadmap](https://trello.com/b/3klaHbfP) mostrando o progresso da implementação das features;
- Para ajuda geral, digitar `$ node ace --help`;
- Para ajuda em algum comando específico, digitar `$ node ace [COMANDO] --help`, por exemplo `$ node ace make:controller --help`

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
- Para criar controllers - `$ node ace make:controller -r `

#### Progresso
[] - Login básico
[] - Sistema de token
[] - Reset de senha
[] - Esqueceu senha
[] - Upload básico de imagem
[X] - Models (mudou completamente em relação ao Adonis 4.1)

#### Middlewares
- Middlewares globais são registrados no `start/kernel.ts` dentro do objeto `Server.middleware.register`
- Logger no momento usa console.log. Substituir pelo [debug](https://www.npmjs.com/package/debug)??
  - Problema encontrado - ao chamar `request.header()`, há uma exception não tratada (ver se existe Issue aberta)

#### Login
- Baixar e invocar pacote de autenticação `$ yarn add @adonisjs/auth@alpha` e `$ node ace invoke @adonisjs/auth`


[Logger](https://preview.adonisjs.com/guides/logger)
- Se `NODE_ENV=development`, o Adonis faz pretty print dos logs
- No arquivo `config/app.ts`, a opção `generateRequestId = true`


#### Outros
- Adicionar `quote_type = single` no .editorconfig para usar apenas aspas simples no Prettier