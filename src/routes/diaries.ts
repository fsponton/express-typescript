import express from 'express'
import * as  diaryServices from "../services/diaryServices"
import toNewDiaryEntry from '../utils'

const router = express.Router()

router.get("/", (_, res) => {
    res.send(diaryServices.getEntriesWithoutSensitiveInfo())
})


router.get("/:id", (req, res) => {
    const diary = diaryServices.findById(Number(req.params.id))
    return (diary !== undefined)
        ? res.send(diary)
        : res.sendStatus(404)
})


router.post("/", (req, res) => {
    try {
        const newDiaryEntry = toNewDiaryEntry(req.body)

        const addedDiaryEntry = diaryServices.addDiary(newDiaryEntry)

        res.send(addedDiaryEntry)
    } catch (e: any) {
        res.status(400).send(e.message)
    }

})

export default router;