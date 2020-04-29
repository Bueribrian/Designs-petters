# Patrones de diseños

## High order functions / Funciones de alta prioridad

#### ForEach

Este metodo itera una variable especifica por todos los valores de las propiedades del objeto. para cada propiedad distinta, una sentencia especificada es ejecutada

```
array.forEach((variableTemporal, indice)= > {
    // Logica
})
```

#### Filter

El metodo **filter** crea un nuevo array con todos los elementos que cumpla la condición implementada por la función dada.

```
const arrayFiltered = array.filter(VarTemp => VarTemp === paramFilter )

```

#### Map

**Map()** crea un nuevo array con los resultados de la llamada a la función indicada a cada uno de sus elementos

```
const array = ['Apple', 'Orange', 'Banana']
const newArray = array.map( tempVar => tempVar.length)
// Crea un nuevo array con los length de cada variable
// new Array  [5, 6, 6]...

```
