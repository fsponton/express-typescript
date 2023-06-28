import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

//creo const de tipo diaryEntry (types.d.ts) - el as Array<DiaryEntry> es para validar que viene el tipo que decimos, sirve cuando consumimos una api de jsons o jsons
const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return { id, date, weather, visibility }
    })
}

export const findById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find(d => d.id === id)
    if (entry !== undefined) {
        const { comment, ...restOfDiary } = entry
        return restOfDiary
    }
    return undefined
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const newDiary = {
        id: Math.max(...diaries.map(d => d.id)) + 1, // a la id mas alta le suma 1 
        ...newDiaryEntry
    }
    diaries.push(newDiary)
    return newDiary
}

