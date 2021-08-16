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

router.use(cors())

router.get('/', (req, res) => res.json({test: 'api router success'}))

router.get('/News/All', async (req, res) => {
    var articles = await newsFetcher.getAllArticles()
    res.json(articles)
})

router.get('/News/Single', async (req, res) => {    
    var article = await newsFetcher.getSingleArticle(req.query.articleKey)
    res.json(article)
})

router.get('/News/Next', async (req, res) => {
    var article = await newsFetcher.getNextArticle()
    res.json(article)
})

router.get('/Weather/Latest', async (req, res) => {
    var weatherReport = await weatherFetcher.getLatestWeatherReport()
    res.json(weatherReport)
})

router.get('/Weather/All', async (req, res) => {
    var weatherReports = await weatherFetcher.getAllWeatherReports()
    res.json(weatherReports)
})

app.use(subdomain('api.infoscreen', router))
app.use(express.static(path.join(path.resolve(), 'public')))
app.listen(80, '0.0.0.0')