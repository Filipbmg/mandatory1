import fs from 'fs'

export function readPage (path) {
  return fs.readFileSync(path).toString()
}
export function renderPage (page, config = {}) {
    const sidebar = fs.readFileSync("./public/components/sidebar.html").toString();
    const footer = fs.readFileSync('./public/components/footer/footer.html').toString()
  return sidebar + page + footer
}
