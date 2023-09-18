export class toDoTaskModel{
    id!:number;
	createdDate!:Date;
    lastUpdatedDate!:Date;
	desciption!:string;
	title!:string;
	colourCode!:string;
	constructor(desciption:string,title:string,colorCode?:string){
		this.desciption=desciption
		this.title=title
		if(colorCode){
			this.colourCode=colorCode
		}
	}
}