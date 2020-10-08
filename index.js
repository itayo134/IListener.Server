const express = require('express');
const { v4: uuidv4 } = require('uuid');
const hasBadWords = require('./bad_words');

const app = express();
app.use(express.json({extended: false}));

const posts = {};

app.get('/posts', (req, res) => {
    console.log(`returing all posts: ${JSON.stringify(Object.values(posts))}`);
    res.send(Object.values(posts));
});

app.post('/', (req, res) => {
    const title = req.body.title;
    const message = req.body.message;
    const id = uuidv4();
    let containsBadWords = hasBadWords(title, message);

    const post = {
        title,
        message,
        id,
        containsBadWords
    };

    posts[id] = post;
    res.send(post);
});

app.listen(3000, () => {
    console.log("listening");
});