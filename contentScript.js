(() => {
  console.log('hirukai start')

  const ghHeader = document.querySelector('.gh-header')
  const title = document.querySelector('.gh-header-title > span')

  if (!ghHeader || !title) return

  const button = document.createElement('button')

  button.type = 'button'
  button.textContent = 'copy as markdown'
  ghHeader.prepend(button)  

  button.addEventListener('click', (event) => {
    event.preventDefault()
    const titleStr = title.textContent.trim()
    const url = window.location.href
    const md = `[${titleStr}](${url})`
    navigator.clipboard.writeText(md).then(() => {
      console.log('hirukai: copy as markdown')
    }).catch((error) => {
      console.error(error)
    })
  })
})()
