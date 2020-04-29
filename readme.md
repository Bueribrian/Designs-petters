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

El metodo **filter()** crea un nuevo array con todos los elementos que cumpla la condición implementada por la función dada.

```
const arrayFiltered = array.filter(VarTemp => VarTemp === paramFilter )

```

#### Map

**map()** crea un nuevo array con los resultados de la llamada a la función indicada a cada uno de sus elementos

```
const array = ['Apple', 'Orange', 'Banana']
const newArray = array.map( tempVar => tempVar.length)
// Crea un nuevo array con los length de cada variable
// new Array  [5, 6, 6]...

```

#### Reduce

**reduce()** ejecuta una función reductora sobre cada elemento de un array, devolviendo como resultado un único valor.

```
const array = [1,2,3];
const newArray = array.reduce((accumuletor, currentValue) =>            accumuletor + currentValue
)

```
