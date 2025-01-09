const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

// Route pour la page d'accueil
router.get('/', (req, res, next) => {
  try {
    res.render('index', { title: "Mini Messageboard", messages: messages });
  } catch (error) {
    next(error);
  }
});

// Route pour le formulaire de nouveau message
router.get('/new', (req, res) => {
  res.render('form');
});

// Route pour soumettre un nouveau message
router.post('/new', (req, res) => {
  const { messageText, messageUser } = req.body;
  messages.push({ text: messageText, user: messageUser, added: new Date() });
  res.redirect('/');
});

router.get('/message/:text', (req, res) => {
    const messageText = req.params.text;
    const message = messages.find(msg => msg.text === messageText);
    if (message) {
      res.render('message', { message: message });
    } else {
      res.send('Message not found');
    }
  });
  
module.exports = router;
