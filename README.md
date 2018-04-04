# click-outside

Listen for clicks that happen outside of a DOM element.

## Usage

```javascript
import clickOutside from '@underdogio/click-outside'

const el = document.getElementById('el')

clickOutside(el, event => {
  console.log('Someone clicked outside of el!')
})
```

## Installation

```bash
yarn add @underdogio/click-outside
```
