const rxjs = require('rxjs');
const Observable = rxjs.Observable; 

const observable = Observable.create(function (observer) {
  observer.next(1);
  observer.next(2);
  observer.next(3);
  setTimeout(() => {
    observer.next(4);
    observer.next(5);
    observer.complete();
  }, 1000);
});

console.log('just before subscribe');
observable.subscribe({
  next: x => console.log(`got value ${x}`),
  error: err => console.error(`Something wrong occurred: ${err}`),
  complete: () => console.log('done'),
});
console.log('just after subscribe');