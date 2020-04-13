export interface IServerList {
    serverId:number,
    serverName:string,
    serverTypeId:number,
    serverTypeName:string,
    notes:string,
}
export interface IServerAdd{
    serverName:string,
    serverTypeId:number,
    internalIP:string,
    externalIP:string,
    urlToAccess:string,
    notes:string,
}

export interface IServerEdit{
    serverId:number,
    serverName:string,
    serverTypeId:number,
    serverTypeName:string,
    internalIP:string,
    externalIP:string,
    urlToAccess:string,
    notes:string,
}