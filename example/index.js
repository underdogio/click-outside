import clickOutside from '../'

const el = document.getElementById('el')

clickOutside(el, event => {
  const {background} = document.body.style

  if (background === 'crimson') {
    document.body.style.background = 'navy'
  } else {
    document.body.style.background = 'crimson'
  }
})
