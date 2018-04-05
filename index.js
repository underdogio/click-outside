// Maintain a list of [element, listener] pairs. When a document click event is fired, we'll check all of the listeners
// in this list and invoke listeners whose element was clicked outside of.
var listeners = []

function onDocumentClick (event) {
  var target = event.target

  listeners.forEach(function (elementListener) {
    var element = elementListener[0]
    var listener = elementListener[1]

    // Return if click happened within or on the target element
    if (element.contains(target) || element === target) {
      return
    }

    // Invoke listener with original event
    listener(event)
  })
}

function addListener (element, listener) {
  // Add document click event listener if we don't have any listeners yet
  if (listeners.length === 0) {
    document.addEventListener('click', onDocumentClick)
  }

  listeners.push([element, listener])
}

function removeListener (element, listener) {
  var listenerIndex = -1
  listeners.some(function (elementListener, index) {
    if (elementListener[0] === element && elementListener[1] === listener) {
      listenerIndex = index
      return true
    }
  })

  if (listenerIndex < 0) {
    return false
  }

  listeners.splice(listenerIndex, 1)

  if (listeners.length === 0) {
    document.removeEventListener('click', onDocumentClick)
  }

  return true
}

// Invokes a callback when a click happens outside of the target element
module.exports = function clickOutside (element, listener) {
  // Return if we are not in a browser
  if (typeof document === 'undefined') {
    return
  }

  addListener(element, listener)

  // Return a function to remove the event listener
  return function removeEventListener () {
    return removeListener(element, listener)
  }
}
