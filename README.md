# click-outside

Listen for clicks that happen outside of a DOM element.

## Usage

```javascript
import clickOutside from '@underdogio/click-outside'

const el = document.getElementById('el')

const unlisten = clickOutside(el, event => {
  console.log('Someone clicked outside of el!')
})

// Remove event listener
unlisten()
```

## Installation

```bash
yarn add @underdogio/click-outside
```
