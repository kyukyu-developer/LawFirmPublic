export interface Service {
    id?:string,
    description?: string,
    image?: string,
    sequence?: string,
    title_en?:string,
    title_mm?:string
}

export interface ServiceDetail {
    contactInfo?:string,
    description?: string,
    emailInfo?: string,
    id?: string,
    image?:string,
    imagesectionlists?:any,
    section_type?:any,
    sectionlists?:any,
    sequence?: string,
    sub_title?: string,
    title?: string
}

export interface SectionLists {
    id?:string,
    description?: string,
    section_id?: string,
    sequence?: string,
    title?:string
}