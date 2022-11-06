const express = require('express')
const mongoose = require('mongoose')
const articleRouter = require('./routes/articles')
const app = express()

mongoose.connect('mongodb://127.0.0.1/blog',{ 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {

    const articles = [{
        title: 'Sample Article',
        createdAt: new Date(),
        description: 'Article Text'
    }]


    res.render('articles/index', { articles: articles})
})

app.use('/articles', articleRouter)
app.listen(3000) 