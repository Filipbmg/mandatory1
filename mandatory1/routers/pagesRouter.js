import { introPage, cleancodePage, fundamentalsPage, renderingPage, nodeJsPage, toolsPage } from '../util/readPages.js'
import { Router } from 'express'


const router = Router()


router.get('/', (req, res) => {
  res.send(introPage)
})

router.get('/fundamentals', (req, res) => {
  res.send(fundamentalsPage)
})

router.get('/cleancode', (req, res) => {
  res.send(cleancodePage)
})

router.get('/rendering', (req, res) => {
  res.send(renderingPage)
})

router.get('/nodejs', (req, res) => {
  res.send(nodeJsPage)
})

router.get('/tools', (req, res) => {
  res.send(toolsPage)
})

export default router