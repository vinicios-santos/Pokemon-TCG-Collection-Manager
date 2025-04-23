const axios = require('axios');
const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const POKEMON_TCG_API_URL = 'https://api.pokemontcg.io/v2';

// Servir arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, 'public')));

async function searchPokemonCard(name, number) {
    try {
        const response = await axios.get(`${POKEMON_TCG_API_URL}/cards`, {
            params: {
                q: `name:${name} number:${number}`
            }
        });

        if (response.data.data && response.data.data.length > 0) {
            const card = response.data.data[0];
            return {
                name: card.name,
                number: card.number,
                imageUrl: card.images.large
            };
        } else {
            return null;
        }
    } catch (error) {
        console.error('Erro ao buscar carta:', error.message);
        throw error;
    }
}

// Rota para buscar cartas
app.get('/search', async (req, res) => {
    try {
        const { name, number } = req.query;
        
        if (!name || !number) {
            return res.status(400).json({ error: 'Nome e número são obrigatórios' });
        }

        const card = await searchPokemonCard(name, number);
        
        if (card) {
            res.json(card);
        } else {
            res.status(404).json({ error: 'Carta não encontrada' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Rota principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}); 