const express = require('express')
const articleRouter = require('./routes/articles')
const app = express()


app.set('view engine', 'ejs')

app.use('/articles', articleRouter)

app.get('/', (req, res) => {

    const articles = [{
        title: 'Sample Article',
        createdAt: Date.now(),
        description: 'Article Text'
    }]


    res.render('index', { text: "Hello"})
})

app.listen(3000)