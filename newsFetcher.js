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

    async getAllArticles(clientId) {
        return await new Promise((resolve, reject) => {
            var call = this.client.GetArticles({ ArticleLimit: 100 })

            var articles = []
            call.on('error', error => reject(error))
            call.on('data', response => {
                articles.push(this.parseArticle(response))
            })

            call.on('end', () => resolve(articles))
            
        }).catch((reason) => {
            console.log('Failed to get all articles for client: %s reason: %s', clientId, reason)
            return []
        })
    }

    async getSingleArticle(articleKey, clientId) {
        return await new Promise((resolve, reject) => this.client.GetArticle({ ArticleKey: articleKey }, (error, response) => {
            if (error) {
                return reject(error)
            }
            resolve(this.parseArticle(response))
        })).catch((reason) => {
            console.log('Failed to get article with key: %s for client: %s reason: %s', articleKey, clientId, reason)
        })
    }

    async getNextArticle(clientId) {
        var now = Date.now()

        if (this.validateArticleBuffer(now)) 
        {
            this.articleIndex = 0
            this.nextUpdate = now + 14400000 // 4 hours
            this.log(`Updating article buffer`)
            this.oldArticleBuffer = Object.assign([], this.articleBuffer)
            this.articleBuffer = await this.getAllArticles()
            this.log(`Recieved ${this.articleBuffer.length} articles`)

            if(this.validateArticleBuffer())
            {
                this.log(`Article buffer update failed, restoring backup`)
                this.articleBuffer = Object.assign([], this.oldArticleBuffer)
            }

            this.articleBuffer.sort((a1, a2) => {
                return a2.Published - a1.Published
            })
        }

        var currentArticle = this.articleBuffer[this.articleIndex]

        this.log(`Returning article ${this.articleIndex + 1} of ${this.articleBuffer.length}`)

        if (this.articleIndex >= this.articleBuffer.length - 1) {
            this.articleIndex = 0
        }
        else {
            this.articleIndex++
        }

        return currentArticle
    }
    
    parseArticle(response) {
        
        if(response.Status && response.Status.Code === 'Failure')
        {
            console.error('Failed to fetch article, reason: ' + response.Status.Message)
            return null
        }
        
        const article = response.Article
        
        var fetched = new Date(1970, 0, 1)
        fetched.setSeconds(article.Fetched.seconds)
        article.Fetched = fetched
        
        var published = new Date(1970, 0, 1)
        published.setSeconds(article.Published.seconds)
        article.Published = published
        return article
    }

    validateArticleBuffer(now) {
        if(now)
        {
            return now >= this.nextUpdate ||
                    this.articleBuffer == null ||
                    this.articleBuffer.lenght === 0 ||
                    this.articleBuffer.every(el => el === null);
        }

        return  this.articleBuffer == null ||
                this.articleBuffer.lenght === 0 ||
                this.articleBuffer.every(el => el === null)
    }

    log(message)
    {
        console.log(`${new Date().toISOString()} # ${message}`)
    }
}