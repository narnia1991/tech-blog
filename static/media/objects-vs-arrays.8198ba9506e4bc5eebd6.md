# Arrays or Objects? That is the question.

<br/>

The first thing you have to plan when creating an app is the state management.
Here comes the question of what type of state should you implement? Array of Objects or Objects keyed by a unique id.

Let's have a comparison. Let's say we have an array that is returned by the backend.
<Code language="javascript">
const data = [
&nbsp;&nbsp;{id: 1,value: "value 1"},
&nbsp;&nbsp;{id: 2,value: "value 2"},
&nbsp;&nbsp;{id: 3,value: "value 3"},
]
</Code>
<br/>

### Arrays

State:  
<Code language="javascript">
const state = [
&nbsp;&nbsp;{id: 1,value: "value 1"},
&nbsp;&nbsp;{id: 2,value: "value 2"},
&nbsp;&nbsp;{id: 3,value: "value 3"}
]
</Code>
<br/>

Rendering:
<Code language="javascript">
arr.map(item =>
&nbsp;&nbsp;\<div key={item.id}>{item.value}\</div>
)
</Code>
<br/>

Getting an item by id
<Code language="javascript">
arr.find(item => item.id===2)
</Code>

<br/>

### Objects

State:  
<Code language="javascript">
const stateObj = apiData.reduce((acc, {id, value})=> {
&nbsp;&nbsp;acc[id] = {value}
&nbsp;&nbsp;return acc
},{})
//Output:
{
&nbsp;&nbsp;"1" : {value: "value 1"},
&nbsp;&nbsp;"2" : {value: "value 2"},
&nbsp;&nbsp;"3" : {value: "value 3"},
}
</Code>

<br/>

Rendering:
<Code>
Object.entries(obj).map(([key, value]) =>
&nbsp;&nbsp;\<div key={key}>{value}\</div>
)
</Code>
<br/>

Getting an item by id
<Code>
const item = obj[id]
</Code>

<br/>

The main benefit of **Object** as a state is the **lookup**.
Since you can get an item easily using a key, it's better and more performant than looping through the array everytime you need to get an item.

Second benefit is the security that there will be **no duplicate entries**.
Since objects require unique keys, we can avoid having duplicate entries on our state.

<br/>

#### Challenges

One of the challenges I faced while using objects as a state store is sorting. The solution I found was to create another variable for storing the sorting so you can keep the main object simple.

<Code language="javascript">
const stateObj = { 
  state: {
    "1" : {value: "value 1"},
    "2" : {value: "value 2"},
    "3" : {value: "value 3"},
  },
  sorting: ["3", "1", "2"]
}
</Code>

#### Tips

Keep your state object shallow. This will maintain a level of sanity when your code gets complicated.

#### Things not yet covered in this article

Inserting elements, Array/Object manipulation and others.
