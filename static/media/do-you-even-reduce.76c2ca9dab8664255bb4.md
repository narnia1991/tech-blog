# Do You Even Reduce?.

<br/>

Most of us know a lot of Array methods but the most powerful one I know is the reduce function.

You can do almost anything you can think of from converting an array to any type that you'd like.

For example, you want to add all the elements inside the array
<Code language="javascript">
const numbers = [1, 2, 3, 4, 5]
&nbsp;&nbsp;
const sum = numbers.reduce(
&nbsp;&nbsp;(tempSum, currentItem) => {
&nbsp;&nbsp;&nbsp;&nbsp;tempSum += currentItem;
&nbsp;&nbsp;&nbsp;&nbsp;return tempSum
&nbsp;&nbsp;}, 0
)
&nbsp;&nbsp;
console.log(sum)
// sum = 15
</Code>
<a href="https://jdoodle.com/ia/IVn" target="_blank" rel="noreferrer noopener" >test it here</a>
<br/>

So how do we use this?

First we need an array to work with

Then we initialize the reduce function

**Array**.reduce((**acc**,**currentItem**) => { ...function; return acc }, **initial acc**)

**acc** is the store of the value in each loop,

- we need to return it always after each loop and
- we have to initialize its initial type and value (**initial acc**)

**currentItem** is the current element of the array in that iteration

### **Example #2**

You want to convert the array to an object then add (+1) on the values with odd numbers, then add a boolean stating if original value is odd

<Code language="javascript">
const numbers = [
  {id: "1",  value: 1},
  {id: "2",  value: 2},
  {id: "3",  value: 3},
  {id: "4",  value: 4},
  {id: "5",  value: 5},
]
&nbsp;&nbsp;
const obj = numbers.reduce((acc, {id, value})=> {
&nbsp;&nbsp;acc[id] = value % 2 === 0 ? {value, isOriginalOdd: false} : {value: value + 1, isOriginalOdd: true}
&nbsp;&nbsp;return acc
},{})
&nbsp;&nbsp;
console.log(obj)

//output
{
'1': { value: 2, isOriginalOdd: true },
'2': { value: 2, isOriginalOdd: false },
'3': { value: 4, isOriginalOdd: true },
'4': { value: 4, isOriginalOdd: false },
'5': { value: 6, isOriginalOdd: true }
}
</Code>
<a href="https://www.jdoodle.com/iembed/v0/IVp" target="_blank" rel="noreferrer noopener" >test it here</a>

There are a lot more that reduce can do. You can go and try this out. Hit me up if you want to add more examples here.
