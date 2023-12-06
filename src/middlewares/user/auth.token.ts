import { middlewareParams } from '../../interfaces/midlewareParams'

export async function authToken({req, res, next}: middlewareParams) {
    next()
}