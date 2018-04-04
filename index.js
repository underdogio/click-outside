// Invokes a callback when a click happens outside of the target element
module.exports = function onClickOutside (element, fn) {
  // Return if we are not in a browser
  if (typeof document === 'undefined') {
    return
  }

  // Invokes callback if user clicks outside the target element
  function listener (event) {
    var target = event.target

    // Return if click happened within or on the target element
    if (element.contains(target) || element === target) {
      return
    }

    // Invoke callback
    fn(event)
  }

  document.addEventListener('click', listener)

  // Return a function to remove the event listener
  return function removeEventListener () {
    document.removeEventListener('click', listener)
  }
}
