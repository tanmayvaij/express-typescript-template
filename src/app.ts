import express, { Express, Request, Response } from "express"

const app: Express = express()

app.get("/", (req: Request, res: Response) => {
    res.send("Hello Express-Typescript")
})

app.listen(5000 , () => {
    console.log("Started express-typescript app successfully")
})
