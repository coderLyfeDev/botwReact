const { Client } = require("pg")
const dotenv = require("dotenv")
dotenv.config()
 
const connectDb = async () => {
    try {
        const client = new Client({
            user: 'postgres',
            host: 'tparty.cik9seytcp8h.us-east-1.rds.amazonaws.com',
            database: 'postgres',
            password: 'Botw1!!!',
            port: '5432'
        })
 
        await client.connect()
        const res = await client.query('SELECT * FROM t_party')
        console.log(res)
        await client.end()
    } catch (error) {
        console.log(error)
    }
}
 
connectDb()
