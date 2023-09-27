## Command

Sababaraha paréntah sapertos JavaScript, ngan ukur bédana nyaéta kecap konci sareng basa ieu bakal narjamahkeun kana JavaScript sareng dijalankeun salaku JavaScript. Kuring nyaho, ieu ngan keur senang.
### Variable

Napelkeun variabel
```
ieuteh foo saruajeung "hello world"
// let foo = "hello world"

nyaeta foo saruajeung 123
// const foo = 123
```

Napelkeun deui variabel
```
mangrupa foo saruajeung "hello world 2"
// foo = "hello world 2"
```

**Boolean**

```
ieuteh foo saruajeung leres
// let foo = true

ieuteh foo saruajeung wajar
// let foo = true

ieuteh foo saruajeung lepat
// let foo = false
```

### Print / Console.log
```
nyetak "Hello world"
// console.log("Hello world")

nyetak foo
// console.log(foo)
```


### Condition

```
lamun foo saruajeung "Hello world"
  nyetak "its hello world"
cekap

// transform to
if(foo == "Hello world"){
  console.log("its hello world")
}
```

```
lamun foo leuwih gede 3
  nyetak "its bigger than 3"
munmeureun foo saruajeung 3
  nyetak "foo is 3"
munhenteu
  nyetak "its smaller than 3"
cekap

// transform to
if(foo > 3){
  console.log("its bigger than 3")
} else if (foo == 3) {
  console.log("foo is 3")
} else {
  console.log("its smaller than 3")
}
```

Comparison : 
- `saruajeung`: ' == ',
- `henteu`: ' != ',
- `leuwih gede`: ' > ',
- `leuwih leutik`: ' < ',
- `leuwih gede sarua jeung`: ' >= ',
- `leuwih leutik sarua jeung`: ' <= '

### Loop

#### **`For` loop**:
```
diulang i neupika 10
  lamun i leuwih gede 3
    nyetak "loop ke " + i
  cekap
cekap

// transform to
for (let i = 0; i < 10; i++) {
  if (i > 3){
    console.log("loop ke " + i);
  }
}
```

#### **`For of` loop**:
```
diulang kabeh foo tina bar
  nyetak foo
cekap

// transform to
for (const foo of bar) {
  console.log(foo);
}
```

#### **`break`** and **`continue`**:
```
eureun
// break;

luncat
// continue;
```

### Function
```
jadi ngeunaan my_story
    ieuteh umur saruajeung 21
    nyetak "Umur lu " + umur
eta sih

geroan my_story

jadi ngeunaan fungsi_param_banyak a b c
    nyetak "a: " + a
    nyetak "b: " + b
    nyetak "c: " + c
eta sih

geroan fungsi_param_banyak 3 4 5
```

### Async Function
```
mikiran my_story
    ieuteh umur saruajeung 21
    nyetak "Umur lu " + umur
eta sih

geroan my_story

jadi ngeunaan fungsi_param_banyak a b c
    nyetak "a: " + a
    nyetak "b: " + b
    nyetak "c: " + c
eta sih

geroan fungsi_param_banyak 3 4 5
```

### Try Catch & Exception
```
cobaan
  nyetak "Something wrong"
  parah "Error message"
nyekel
  nyetak "Catch error"
tungtungna
  nyetak "finish finally"
cekap


// transform to
try {
  console.log("Something wrong");
  throw new Error("Error message");
} catch {
  console.log("Catch error");
} finally {
  console.log("finish finally");
} 
```
