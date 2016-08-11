Генераторы в JavaScript. Часть 1
================================

@aqrln

---

### Итерабельные объекты и итераторы в ES6

Среди нововведений в  ES6,  помимо  новых  синтаксических  конструкций  и  типов
данных, есть и два новых интерфейса: протокол итерабельных объектов  и  протокол
итераторов.

MDN:

* [Iterable protocol](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols#iterable)
* [Iterator protocol](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Iteration_protocols#iterator)

---

### Iterable Protocol

```javascript
let myIterable = {
  ...

  [Symbol.iterator]() {
    let iterator = ...;
    return iterator;
  }

  ...
}
```

---

### Iterator Protocol

```javascript
let iterator = {
  ...

  next() {
    // Если ещё остались значения
    return {
      value: currentValue,
      done: false
    };

    // Если значения закончились
    return {
      value: undefined,
      done: true
    }
  }
}
```

---

### Примеры итерабельных объектов

 * Array
 * TypedArray
 * String
 * Buffer
 * Map
 * Set

---

### Методы коллекций, которые возвращают итераторы

 * keys()
 * values()
 * entries()

---

### Некоторые функции, которые принимают итерабельные объекты

 * Конструкторы новых коллекций в ES6 (Map, Set...)
 * Array.from()
 * Promise.all(), Promise.race()

---

### Синтаксические конструкции, которые работают с итерабельными объектами

 * Цикл for-of
 * Spread
 * Destructuring assignment
 * yield*

---

### Генераторы

Generator function — это функция, возвращающая специальный  итератор  (generator
object),  управляющий  её  выполнением.   Оператор  `yield`  в  теле   функции
приостанавливает   выполнение,   метод   `next()`   итератора   —    продолжает.

---

Объекты-генераторы одновременно являются и итерабельными объектами, и
итераторами:

```javascript
> function* generatorFunction() { } 
undefined
> let generatorObject = generatorFunction() 
undefined
> generatorObject.next 
[Function: next]
> generatorObject[Symbol.iterator]() === generatorObject 
true
```

---

### Yield

Оператор `yield` служит  для  двунаправленного  обмена  данными  с  генератором.
Значение, стоящее после ключевого слова `yield`,  становится  текущим  значением
итератора, а в метод  `next()`  опционально  можно  передать  значение,  которое
примет yield-выражение.

---

### Yield*

```javascript
yield* from iterable;
```

#### ≈

```javascript
for (let value of iterable) {
  yield value;
}
```

---

### Yield* Expression

```javascript
function* g1() {
  yield* [1, 2, 3];
  return 'result';
}

let result = null;

function* g2() {
  result = yield* g1();
}

console.log([...g2()]); // [1, 2, 3]
console.log(result);    // 'result' 
```

---

# Q&A
