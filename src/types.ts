export enum Weather {
    Sunny = 'sunny',
    Rainy = 'rainy',
    Cloudy = 'cloudy',
    Windy = 'windy',
    Stormy = 'stormy'
}

export enum Visibility {
    Grate = 'great',
    Good = 'good',
    Ok = 'ok',
    Poor = 'poor'
}
export interface DiaryEntry {
    id: number
    date: string
    weather: Weather
    visibility: Visibility
    comment: string
}

//extends de una interface
// interface SpecialDiaryEntry extends DiaryEntry {
//     flightNumber: number
// }

// selecciona los tipos de una interface que se quieren para exportar el type. 
//export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>

//Omite todo menos el que queremos. 
export type NonSensitiveInfoDiaryEntry = Omit<DiaryEntry, 'comment'>

export type NewDiaryEntry = Omit<DiaryEntry, 'id'>


