Demo

```
.map((result)=>{
  return result*0.1;
})
```

```
.take(1)
```

```
Rx.Observable.create((observer)=>{
   setInterval(()=>{
     observer.next(_.random(0, 100));
   }, 1000)
})
```

```
.filter((result)=>{
  return result > 50;
})
```

```
.takeUntil(Rx.Observable.timer(5000))
```

```
.takeUntil(Rx.Observable.fromEvent(document.querySelector('line-chart'), 'click'))
```


```
Rx.Observable.fromEvent(document.querySelector('line-chart'), 'mousemove')
```


```
.map((event)=>{
  return event.screenX;
})
```

```
.merge(Rx.Observable.create((observer)=>{
   setInterval(()=>{
     observer.next(_.random(0, 100));
   }, 1000)
}))
```

Clicks on document
```
Rx.Observable.fromEvent(document, 'click')
```
```
.buffer(Rx.Observable.interval(1000))
```
```
.map((result)=>{
  return result.length*10;
})
```
```
.filter((result)=>{
  return result > 0;
})
```


bugs
- you cant run the same observable twice
- you cant remove a map
