import {Request, Response, NextFunction} from 'express'
import { HttpException } from '../utils/errors'

export function exceptionFilter(error, req: Request, res: Response, next: NextFunction) {
    let statusCode = 500
    let errorMessage = 'Internal Server Error'

    if(error instanceof HttpException) {
        statusCode = error.statusCode
        errorMessage = error.message
    }

    res.status(statusCode).json({error: errorMessage})
}