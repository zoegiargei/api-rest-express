import { NextFunction } from "express"

export interface middlewareParams {
    req: Request,
    res: Response,
    next: NextFunction
}