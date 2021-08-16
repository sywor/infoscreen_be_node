import path from 'path'
import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

const url = process.env.NEWS_FETCHER_URL || 'ipv4:192.168.1.15:5001'

export default class NewsFetcher {
    constructor() {
        const protoPath = path.join(path.resolve(), 'proto', 'news.proto')

        const packageDefinition = protoLoader.loadSync(
            protoPath,
            {
                keepCase: true,
                longs: String,
                enums: String,
                defaults: true,
                oneofs: true
            })

        const news = grpc.loadPackageDefinition(packageDefinition).news

        const credentials = grpc.credentials.createInsecure()
        this.client = new news.NewsFetcher(url, credentials)
        this.nextUpdate = Date.now() - 1000
    }

    async getAllArticles() {
        return await new Promise((resolve, reject) => {
            var call = this.client.GetAllArticles({})

            var articles = []
            call.on('error', error => reject(error))
            call.on('data', response => {
                articles.push(this.parseArticle(response))
            })

            call.on('end', () => resolve(articles))
        })
    }

    async getSingleArticle(articleKey) {
        return await new Promise((resolve, reject) => this.client.GetArticle({ ArticleKey: articleKey }, (error, response) => {
            if (error) {
                return reject(error)
            }
            resolve(this.parseArticle(response))
        }))
    }

    async getNextArticle() {
        var now = Date.now()

        if (now >= this.nextUpdate || this.articleBuffer == null) {
            this.articleIndex = 0
            this.nextUpdate = now + 14400000 // 4 hours
            this.articleBuffer = await this.getAllArticles()
            this.articleBuffer.sort((a1, a2) => {
                return a2.Published - a1.Published
            })
        }

        var currentArticle = this.articleBuffer[this.articleIndex]

        if (this.articleIndex >= this.articleBuffer.lenght - 1) {
            this.articleIndex = 0
        }
        else {
            this.articleIndex++
        }

        return currentArticle
    }

    parseArticle(response) {
        const article = response.Article

        var fetched = new Date(1970, 0, 1)
        fetched.setSeconds(article.Fetched.seconds)
        article.Fetched = fetched

        var published = new Date(1970, 0, 1)
        published.setSeconds(article.Published.seconds)
        article.Published = published
        return article
    }
}