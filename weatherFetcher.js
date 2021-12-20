import path from 'path'
import grpc from '@grpc/grpc-js'
import protoLoader from '@grpc/proto-loader'

const url = process.env.WEATHER_FETCHER_URL || 'ipv4:192.168.1.14:5001'

export default class WeatherFetcher {
    constructor() {
        const protoPath = path.join(path.resolve(), 'proto', 'weather.proto')

        const packageDefinition = protoLoader.loadSync(
            protoPath,
            {
                keepCase: true,
                longs: String,
                enums: String,
                defaults: true,
                oneofs: true
            })

        const weather = grpc.loadPackageDefinition(packageDefinition).weather

        const credentials = grpc.credentials.createInsecure()
        this.client = new weather.WeatherFetcher(url, credentials)
        this.nextUpdate = Date.now() - 1000
    }

    async getAllWeatherReports(clientId) {
        return await new Promise((resolve, reject) => {
            var call = this.client.GetAllWeatherReports({})

            var reports = []
            call.on('error', error => reject(error))
            call.on('data', response => {
                reports.push(this.parseReport(response))
            })

            call.on('end', () => resolve(reports))
        })
    }

    async getLatestWeatherReport(clientId) {
        return await new Promise((resolve, reject) => this.client.GetLatestWeatherReport({}, (error, response) => {
            if (error) {
                return reject(error)
            }
            resolve(this.parseReport(response))
        }))
    }

    parseReport(response) {
        const report = response.weather

        var startTime = new Date(1970, 0, 1)
        startTime.setSeconds(report.WeatherForecast.startTime.seconds)
        report.WeatherForecast.startTime = startTime

        var endTime = new Date(1970, 0, 1)
        endTime.setSeconds(report.WeatherForecast.endTime.seconds)
        report.WeatherForecast.endTime = endTime

        Object.entries(report.WeatherForecast.Forecast)
        .map(([key, value]) => value)
        .forEach(forecast => {            
            var validTime = new Date(1970, 0, 1)
            validTime.setSeconds(forecast.ValidTime.seconds)
            forecast.ValidTime = validTime;
        })

        return report
    }
}