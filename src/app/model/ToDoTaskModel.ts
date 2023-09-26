export class toDoTaskModel{
    id!:number;
	createdDate!:Date;
    lastUpdatedDate!:Date;
	desciption!:string;
	title!:string;
	colour!:{colorCode:string,colorId:number}
}