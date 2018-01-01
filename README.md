# no-more-for-loops
A micro-library intended to reduce manual for-loops.  
Mainly oriented to creative coding and game programming.

OK, "no more" is exaggerated as this module doesn't cover all cases, but still.

---

## Usage

### Install
```
npm install no-more-for-loops --save
```

### Load

Both ES6 module and UMD (and also their minified versions) are available.

```javascript
// Examples: loading in ES6 or TypeScript

import * as nmfl from 'no-more-for-loops';

import { LoopableArray } from 'no-more-for-loops';
```

```html
<!-- Example: loading in HTML -->
<!-- This will define 'NoMoreForLoops' in the global namespace. -->

<script src="(your directory path)/no-more-for-loops.min.js"></script>
```


## Functions

### loopArray(), loopArrayBackwards()

Execute a provided function once for each array element.  

```javascript
loopArray(array, callback);
loopArrayBackwards(array, callback);

// Callback function
callback(currentValue[, index[, array]]);
```

### roundRobin()

Executes a provided function once for each pair within the array.

```javascript
roundRobin(array, callback);

// Callback function
callback(element, otherElement);
```

### nestedLoopJoin()

Joins two arrays and executes a provided function once for each joined pair.

```javascript
nestedLoopJoin(array, otherArray, callback);

// Callback function
callback(element, otherElement);
```


## Class

### LoopableArray

A class containing an array and the loop methods written above.

```javascript
new LoopableArray([initialCapacity]);
```

- Properties
  - `array` - raw array holding elements
  - `length`
- Methods
  - `get(index)`
  - `getLast()`
  - `push(element)`
  - `pushRawArray(array[, arrayLength])`
  - `pushAll(otherLoopableArray)`
  - `pop()`
  - `clear()`
  - `loop(callback)` - see loopArray() above
  - `loopBackwards(callback)` - see loopArrayBackwards() above
  - `roundRobin(callback)` - see above
  - `nestedLoopJoin(otherLoopableArray, callback)` - see above

```javascript
// Example

const myArray = new LoopableArray();

myArray.push(anyElement);
myArray.pushRawArray(anyArray);
myArray.pushAll(anyOtherLoopableArray);

const doSomething = (element) => { element.doSomething(); };  // A callback function.
myArray.loop(doSomething);  // Runs doSomething() of each element.

const collide = (element, otherElement) => { /* some code */ };  // A callback function.
myArray.roundRobin(collide);  // Runs collide() for each element pair within the array.
myArray.nestedLoopJoin(anyOtherLoopableArray, collide);  // Runs collide() for each element combination between two groups.
```

```javascript
// Composite pattern example

class DrawableArray extends LoopableArray {
  static drawFunc = (element) => { element.draw(); };  // A callback function.

  draw() {
    this.loop(DrawableArray.drawFunc);
  }
}

const subsetArrayA = new DrawableArray();
const subsetArrayB = new DrawableArray();

/* Push some elements to the subset arrays */

const drawableArray = new DrawableArray();
drawableArray.push(subsetArrayA);
drawableArray.push(subsetArrayB);

drawableArray.draw();  // Draws all elements recursively.
```


## Performance comparison

https://jsperf.com/no-more-for-loops-2018-01-01-a
