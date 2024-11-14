import router, { Router } from "express"
import publicApiRouter from "./public"

const apiRouter: Router = router()
apiRouter.use("/public", publicApiRouter)

export default apiRouter

