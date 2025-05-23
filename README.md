# Pokemon TCG API Integration

Este projeto permite buscar cartas do Pokémon TCG através da API oficial.

## Instalação

1. Instale as dependências:
```bash
npm install
```

2. Execute o projeto:
```bash
npm start
```

## Como usar

O código está configurado para buscar uma carta específica usando nome e número. Por padrão, ele busca a carta do Pikachu número 58 como exemplo.

Para buscar outras cartas, modifique os parâmetros na função `main()` no arquivo `index.js`:

```javascript
const card = await searchPokemonCard('NomeDoPokemon', 'NumeroDaCarta');
```

## Retorno

A função retorna um objeto com:
- name: Nome da carta
- number: Número da carta
- imageUrl: URL da imagem em alta resolução

## API

Este projeto utiliza a API oficial do Pokémon TCG:
- Documentação: https://docs.pokemontcg.io/
- Endpoint: https://api.pokemontcg.io/v2 #   P o k e m o n - T C G - C o l l e c t i o n - M a n a g e r  
 