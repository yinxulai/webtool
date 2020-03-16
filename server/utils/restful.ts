import { Response } from 'express'
export default function restful(response: Response, code: number, message?: string, data?: any) {
    return response.json({ data: data, code: code, message: message })
}

export function restfulError(response: Response, code: number, message?: string, data?: any) {
    return response.json({ data: data, code: code, message: message })
}
