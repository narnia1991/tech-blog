Here are some of the practices I've gathered and have been exercising throughout the years of experience.

# Boolean Typecast and conditions

If creating a condition and your variable came from an optional parameter, empty object, or empty array, or has a value, cast it as a boolean by using `!!` to properly assert truthfulness

TLDR.
<Code language="javascript">
const x = [] //true
const x = [].length //0
const x = !![].length //false
const x = {} //true
const x = !!Object.keys({}) //true
const x = !!Object.keys({}).length //false
const x = 0 && "dog" //0
const x = !!0 && !!"dog" //false
</Code>

See https://developer.mozilla.org/en-US/docs/Glossary/Truthy and https://developer.mozilla.org/en-US/docs/Glossary/Falsy for reference.

# Performance

## useMemo

If you are iterating an array in your component or you have a variable with a lot of computations, It's better to use `useMemo` to memoize the variable. This will disregard re-compute on rerender if the dependency array didn't change.

## Name your functions

If assigning a function in your parameter or action/event handler, put the function in a named variable/callback.

<Code language="javascript">
❌ onClick={()=> {...}}
✔️ const handleClick = useCallback(()=> {...},[])
&nbsp;&nbsp;
    // ...
    onClick = {handleClick}
</Code>

Explanation: Unnamed functions are assigned to a different reference on each render which will trigger a rerender

<Code language="javascript">
() => thisFunc('id') === () => thisFunc('id') // false
</Code>

### How about if I need to pass a parameter in the event handler?

You can use `curried functions` like so

<Code language="javascript">
const handleClick = useCallback((param)=> () => {...},[])
&nbsp;&nbsp;
// ...
onClick = {handleClick(param)}
</Code>

## Do you really need to do that?

One question I ask myself if I'm creating an iteration is, `Do you really need to do that?`
For example _`thisArray.map().filter()`_ This will iterate over the array twice. So, to ease some burden to the client, you may just do _`thisArray.filter()`_ then do both the map and filter mutations there

## While reducing, don't spread like butter

One of my favorite and most powerful array functions in JS is the [Array.reduce](https://www.w3schools.com/jsref/jsref_reduce.asp) function. Common practice is to use the spread function inside like

<Code language="javascript">
const segregateThis = [
  {type: "animal", name: "dog"},
  {type: "fruit", name: "banana"},
  {type: "animal", name: "cat"},
  {type: "fruit", name: "apple"},
]
&nbsp;&nbsp;
const {animals, fruits} = segregateThis.reduce((acc,curr)=>{
if(type === "animal"){
&nbsp;&nbsp;acc = {...acc, animals: [...acc.animals, curr.name]}
}
if(type === "fruit"){
&nbsp;&nbsp;acc = {...acc, fruits: [...acc.fruits, curr.name]}
}
&nbsp;&nbsp;return acc
},{animals:[], fruits:[]})
</Code>

this looks good but under the hood, spread operator uses Object.assign twice,

<Code language="javascript">
Object.assign(Object.assign({}, acc), {animals: acc.animals.push.apply(acc.animals, curr.name)})
</Code>

We can reduce the performance impact of this by utilizing the variable created by reduce

<Code language="javascript">
const {animals, fruits} = segregateThis.reduce((acc,curr)=>{
if(type === "animal"){
&nbsp;&nbsp;acc.animals.push(curr.name)
}
if(type === "fruit"){
&nbsp;&nbsp;acc.fruits.push(curr.name)
}
&nbsp;&nbsp;return acc
},{animals:[], fruits:[]})
</Code>

This will result into the same output but without the performance impact that creating 3+ new Object brings, especially with large datasets
You can watch a great video explaining this [here](https://www.youtube.com/watch?v=tcZbY-Q0TIE)

# Typescript

## Do you really need to?

General rule of thumb I follow when coding typescript is type inference.
Or you can call, the lazy dev's excuse of not declaring a type
I don't care if you don't declare the type as long as it's inferred.
[read it here](https://www.typescriptlang.org/docs/handbook/type-inference.html)

TLDR
If typescript is smart enought to guess the type, let it do it.

e.g.

<Code language="javascript">
let x = 3; // typeof x = number
let x = [0, 1, null]; // typeof x = (number | null)[]
const [isBoolean, setIsBoolean] = useState(false) // typeof isBoolean = boolean
</Code>

## Don't answer "anything" when asked what you want to eat

Likewise, don't put "any" if declaring a type. This is antipattern to typescript and might be a root of succeeding "any" type declarations. Utilize the tool of VSCode on hover to look for the proper type expected by your function.

# State Structure

### I prefer storing my states on an Object.

I created an article for this [here](https://narnia1991.github.io/tech-blog/objects-vs-arrays)

TLDR: It provides easier lookups and avoids duplicates promoting data integrity.

### Keep your data shallow.

As stated [in the firebase docs](https://firebase.google.com/docs/database/web/structure-data#best_practices_for_data_structure)
It's best practice to keep your structure as shallow as possible.

I will still update this if ever I remembered more.
