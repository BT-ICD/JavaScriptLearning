export interface IProjectList {
    projectId:number,
    name:string,
    about:string,
    notes:string,
    sourceCodeLocation:string,
}
export interface IProjectAdd{
    name:string,
    about:string,
    notes:string,
    sourceCodeLocation:string
}
export interface IProjectEdit{
    projectId:number,
    name:string,
    about:string,
    notes:string,
    sourceCodeLocation:string
}