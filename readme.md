Demo

```
.map((result)=>{
  return result*0.1;
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
