const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Porta del server

const { MongoClient } = require('mongodb');
const uri = 'mongodb://localhost:27017/il-tuo-database'; // URL del tuo database

// Configura la connessione al database
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
  if (err) {
    console.error('Errore durante la connessione al database:', err);
  } else {
    console.log('Connessione al database avvenuta con successo!');
    // Inizia a configurare le tue API e le gestione delle richieste qui
  }
});

// Configura le route del tuo server e inizia ad ascoltare le richieste
app.get('/', (req, res) => {
  res.send('Benvenuto nel tuo server!');
});

app.listen(port, () => {
  console.log(`Server in ascolto sulla porta ${port}`);
});
