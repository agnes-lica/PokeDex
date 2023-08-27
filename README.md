# PokeDex desafio Mandabem da Makasí

O desafio tem como objetivo a criação de uma aplicação que consome uma API de pokemon e gera aleatóriamente um pokemon por vez na tela.

Para a aplicação foi utilizado a API propria da **Makasí**.

## Tecnologias utilizadas

**_JavaScript | Typescript | Axios | React | Vercel | Yarn | Node.js_**

### Motivação para escolha das tecnologias

A escolha dessas tecnologias se deu por conta da facilidade de criação de uma aplicação _single page_ com chamada básica de API.

O **Typescript** foi utilizado para uma melhor performace do desenvolvedor durante a criação e manutenção do código.

O **Axios** foi escolhido pois ele fornece uma camada de simplificação para requisições e tratamento de erros.

## Funcionalidade

A aplicação contém apenas uma página, nela são apresentados dois botões **Gerar Carta** ou **Buscar**. A primeira gera um pokemon aleatório na tela, já a segunda lhe permite fazer uma busca por nome de pokemon no input.

## Executando o projeto

Clone esse repositório em seu computador:

```bash
git clone git@github.com:agnes-lica/PokeDex.git
```

Vá até a pasta do projeto pelo terminal:

```bash
cd PokeDex
```

Instale as dependências do projeto:

```bash
yarn
```

Inicie o servidor:

```bash
yarn start
```

## Estrutura do projeto

- **public/**: Aqui ficam algumas imagens utilizadas na aplicação
- **src/**: Aqui ficam todos os arquivos da aplicação
- **src/pages**: Nessa pasta fica o arquivo da página do projeto;
- **src/providers**: Nessa pasta fica todos os arquivos de contexto da aplicação;
    - **src/providers/pokemonContext**: aqui fica os arquivos de contexto apenas para requisição dos pokemons na API.
- **src/routes**: Nessa pasta fica o arquivo de rotas do projeto;
- **src/services**: Aqui ficam os arquivos que definem a url para requisições da API;
- **src/utils**: Aqui ficam arquivos para códigos uteis, como o de geração de número aleatório.

## Link do deploy

- [PokeDex](https://aindanaoexiste/)

## Links da API e Documentação

- API de Pokemon: https://dev-api-teste.mandarin.com.br/pokemons
- Documentação: https://pokemon.mandarin.com.br

## Contato

Para entrar em contato comigo me mande um e-mail ou uma mensagem nas redes sociais:

- LinkedIn: https://www.linkedin.com/in/agnesmr/
- E-mail: agnes.lica@gmail.com
