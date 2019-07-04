# fix-proportion

## Install
```
npm i fix-proportion
```

## Usage
```
import fixProportion from "fix-proportion"
```

```
fixProportion(element, proportion)
```

## Example
```
// index.html
<div>
    <div id="target">I want 16:9<div/>
</div>
```

```
// script.js
var target = document.querySelector('#target')
var proportion = '16:9'
fixProportion(target, proportion)
```