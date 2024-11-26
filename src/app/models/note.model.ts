
export class NoteModel {
    id: number
    title: string
    date : Date
    constructor (id: number = 0,title : string = '', date: Date= new Date() ){
        this.id = id
        this.title= title
        this.date= date
    }
}