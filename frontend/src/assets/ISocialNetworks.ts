export interface ISocialNetWorks extends Array<ISocial>{
}
export interface ISocial {
    name: string,
    url : string,
    svgicon?: string
    svgUrl?: string
}