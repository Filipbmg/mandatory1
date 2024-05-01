import { readPage, renderPage } from './templatingEngine.js'

const intro = readPage('./public/pages/intro.html')
export const introPage = renderPage(intro)

const cleancode = readPage('./public/pages/cleancode.html')
export const cleancodePage = renderPage(cleancode)

const fundamentals = readPage('./public/pages/fundamentals.html')
export const fundamentalsPage = renderPage(fundamentals)

const rendering = readPage('./public/pages/rendering.html')
export const renderingPage = renderPage(rendering)

const nodejs = readPage('./public/pages/nodejs.html')
export const nodeJsPage = renderPage(nodejs)

const tools = readPage('./public/pages/tools.html')
export const toolsPage = renderPage(tools)















