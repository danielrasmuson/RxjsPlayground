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
.map((result)=>{
    return Rx.Observable.of(result).delay(500);
})
```

```
.map((result)=>{
    return Rx.Observable.of(result).delay(500);
}).concatAll()
```

```
.concatMap((result)=>{
    return Rx.Observable.of(result).delay(500);
})
```





bugs
- you cant run the same observable twice
- you cant remove a map
