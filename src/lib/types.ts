// this matches:
// https://github.com/based-zrt/unitech-backend/blob/master/src/main/java/tech/unideb/backend/dto/ProfileInfoResponse.java
export interface ProfileInfo {
    username: string
    role: string
    email: string
    uploadSecret: string
    uploadCount: number
    usedSpace: number
    maxSpace: number
    uploads: Array<UploadInfo>
}

export interface UploadInfo {
    id: string
    user: string
    url: string
    size: number
    fileName: number
    uploadDate: number
}
