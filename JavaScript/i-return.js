'use strict';

function* genFn() {
  yield 10;
  yield 20;
  yield 30;
}

{
  const g = genFn();
  const val1 = g.next();
  const val2 = g.next();
  const val3 = g.next();
  const val4 = g.return(40);
  console.log({ val1, val2, val3, val4 });
}

{
  const g = genFn();
  const val1 = g.next();
  const val2 = g.return(40);
  const val3 = g.next();
  const val4 = g.return(50);
  console.log({ val1, val2, val3, val4 });
}
