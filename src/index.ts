import express from 'express'// ESModules
// const express = require('express) -> commonjs

import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // middleware para transformar la req.body a json

const PORT = 3005

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
