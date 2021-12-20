import NewsFetcher from './newsFetcher.js'
import WeatherFetcher from './weatherFetcher.js'
import express from 'express'
import path from 'path'
import subdomain from 'express-subdomain'
import cors from 'cors'

var newsFetcher = new NewsFetcher()
var weatherFetcher = new WeatherFetcher()
var app = express()
var router = express.Router()

app.use(cors())

router.get('/', (req, res) => res.json({test: 'api up and running'}))

router.get('/News/All', async (req, res) => {
    var clientId = req.query.clientId
    console.log('/News/All client id: %s', clientId)
    var articles = await newsFetcher.getAllArticles(clientId)
    res.json(articles)
})

router.get('/News/Single', async (req, res) => {
    var clientId = req.query.clientId
    console.log('/News/Single client id: %s', clientId)
    var article = await newsFetcher.getSingleArticle(req.query.articleKey, clientId)
    res.json(article)
})

router.get('/News/Next', async (req, res) => {
    var clientId = req.query.clientId
    console.log('/News/Next client id: %s', clientId)
    var article = await newsFetcher.getNextArticle(clientId)
    res.json(article)
})

router.get('/Weather/Latest', async (req, res) => {
    var clientId = req.query.clientId
    console.log('/Weather/Latest client id: %s', clientId)
    var weatherReport = await weatherFetcher.getLatestWeatherReport(clientId)
    res.json(weatherReport)
})

router.get('/Weather/All', async (req, res) => {
    var clientId = req.query.clientId
    console.log('/Weather/All client id: %s', clientId)
    var weatherReports = await weatherFetcher.getAllWeatherReports(clientId)
    res.json(weatherReports)
})

// app.get('*', function(req, res){
//     console.log(req.headers.host)
//     res.status(404).send('nah man, you\'re lost');
//   });

app.use(subdomain('api.infoscreen', router))
app.use(express.static(path.join(path.resolve(), 'public')))
app.listen(80, '0.0.0.0')