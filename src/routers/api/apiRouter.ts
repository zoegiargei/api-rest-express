import { Router } from 'express'
import { userRouter } from './userRouter'
import { productRouter } from './productsRouter'
import { cartRouter } from './cartRouter'
import { favRouter } from './favRouter'

export const apiRouter: Router = Router()

apiRouter.use(userRouter)
apiRouter.use(productRouter)
apiRouter.use(cartRouter)
apiRouter.use(favRouter)

apiRouter.use((req, res) => {
    res.status(404).send('<h1>404: Not found<h1/>')
})
