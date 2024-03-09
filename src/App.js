import './App.css';
import React, { useState } from 'react';

// funtional component
// function App ()
// {
// // Class and constructor

//    class Student
//    {
//     id 
//     name
//     email
//     address

//     constructor(tempid,tempname,tempemail,tempaddress)
//     {
//       this.id=tempid
//       this.name=tempname
//       this.email=tempemail
//       this.address=tempaddress
//     }
//     print()
//     {
//       console.log("id",this.id)
//       console.log("name",this.name)
//       console.log("email",this.email)
//       console.log("adress",this.address)

//     }
    
//    }
//      const student1 = new Student(123,"yashita","yashita@gole.in","hbudfmksjfisk")
//      student1.print()
//     //  student1.id=123
//     //  student1.name= "yashita"
//     //  student1.email="yahiuya@ncjd.chn"
//     //  student1.adress="hvyfjsjiscojlcho"
    
//     class Monitor extends Student
//     {
//       batch
      
//       constructor(batchTemp,tempid,tempname,tempemail,tempaddress)
//       {
//         super(tempid,tempname,tempemail,tempaddress)
//          this.batch=batchTemp
        
//       }
//       print()
//         {
//           super.print()
//           console.log("Batch:"+this.batch)
//         }
      
//     }
//     let yashi = new Monitor("2-3pm",123,"yashita","yashita@gole.in","hbudfmksjfisk")
//     console.log("Yashi:", yashi)
//     yashi.print()
    
//     let variable = <div>Hello shivamji</div>


  // return(
  //  <div>Hello yashiji<br/>{variable}</div>
  // );
  // }

  // class component
// class App extends React.Component
// {
//   clickOnIt()
//       {
//         console.log("Button is clicked")
//       }

//   render()
//     { 
      

//       return <div>
//         <p>
//           <ul>
//             <li>list 1</li>
//             <li>list 2</li>
//             <li>list 3</li>
//           </ul>
//           <button onClick={ ()=> this.clickOnIt() }>Click me!!</button>
//         </p>
//       </div>

//     }
  
// }
// const App = (props)=>
// {
//   console.log("props:", props)
//   console.log("props color:", props.color)
//   console.log("props Size:", props.size)
//   console.log("ClickEvent:", props.clickEvent)
//   return <div style={{backgroundColor:props.color}}>
//     This is component
//     <button onClick={props.clickEvent}>Click me</button>
//     </div>
// }

// class App extends React.Component
// {
//   state = 
//   {
//     counter : 0,
//     component : <ChildComponent/>
//   }

//   constructor(props)
//   {
//     super(props)
//     console.log("Constructor of App component")
//   }
//   static getDerivedStateFromProps ()
//   {
//     console.log("getDerivedStateFromProps ")
//   }
//   incrementCounter = () =>
//     {
//     this.setState({counter:this.state.counter +1})   
//     }

//     shouldComponentUpdate()
//     {
//       console.log("shouldComponentUpdate")
//       return true
//     }
//     getSnapshotBeforeUpdate(prevProps, prevState)
  
//     {
//       console.log("getSnapshotBeforeUpdate")
//       return true
//     }

//     componentDidMount()
//       {
//         console.log("ComponentDidMount")
//       }
//     unmountingChild = () =>
//     {
//       this.setState({
//         counter:this.state.counter,
//         component: "This child component is Unmounted"
//       })
//     }
  
//   render()
//   {
//     console.log("Render Method")


//     return <div style={{backgroundColor:this.props.color}}>
//       Hello
//       <button onClick={this.props.clickEvent}>Click me</button>
//       counter:{this.state.counter}
//       <button onClick={this.incrementCounter}>Increment counter</button>
//       <br/>
//       Mounting Child component <br/>

//       {this.state.component}
//       <br/>
//       <button onClick={this.unmountingChild}>Unmounting Child Component</button>
      
//       {/* <ChildComponent/><br/> */}
      
//       </div>
//   }
// }

// class ChildComponent extends React.Component
// {
//   componentWillUnmount()
//   {
//  console.log("Unmounting Child Component")
//   }

//   render()
//     {
//       return <div>This is my child Comment</div>
//     }
  
// }

const App = () =>
{
//   function fun1 (a, b)
//   {
//     console.log("This is a function1: "+a+", "+b)
//   }
//   const fun2 = (a, b) =>
//   {
//     console.log("This is a function2: "+a+", "+b)
//   }

// fun2(fun1, 3)

// let myArray = [1, 2, 
//   ()=>{
//     console.log("This is my Array")
//   },10]
//   console.log(myArray)
//   console.log(myArray[2]())
//   console.log(myArray[2])

// const myObject = {
//   name:"Yashi",
//   age:21,
//   myFuntion: ()=>
//   {
//     console.log("this is from inside a function")
//   }
// }
// console.log("Name:", myObject.name)
// console.log("function:",myObject.myFuntion())

// const Object1 = 
// {
//   a:"A",
//   b:"B"
// }
// const Object2 = Object.assign({}, Object1)

// console.log("Object1:", Object1)
// console.log("Object2:", Object2)

// Object1.a = "a"
// console.log("Object1:", Object1)
// console.log("Object2:", Object2)

// myFunction()

// function myFunction()
// {
// console.log("this is my function")
// }


// console.log("abc:", abc)
// var abc = 10

// function makeHelloFunction()
// {
//   const message = "Hello"
  
//   function sayHello()
//   {
//     console.log(message)
//   }
//   return sayHello
// }
// const sayHello = makeHelloFunction()
// sayHello()

// ( () =>
// {
//   console.log("I am a self excuting function")
// })()

// let a = 10
// let b = String(a)
// let c = a+""
// console.log("Number:", a)
// console.log(typeof a)
// console.log("string:", b)
// console.log(typeof b)
// console.log("string:", c)
// console.log(typeof c)

const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


const childCallbackFunction = (data) =>
{
  console.log("Call back Function called in parent")
  console.log("Child Data:"+data)
}
const handleFormSubmit = (e) =>
{
e.preventDefault();
console.log("Email:"+email+",Password:"+password)
}
  return<div>
    Hello This is Parent Component 
    <ChildComponent prop1="prop1 data" prop2="prop2" callBackFunction={childCallbackFunction}/>
    <form onSubmit={handleFormSubmit}>
      <h2>Login form</h2>
      <label>
        Email:
        <input type='email' defaultValue={email} onChange={ e =>setEmail(e.target.value) }required/>
      </label><br/>
      <label>
        Password:
        <input type='password' defaultValue={password} onChange={ e =>setPassword(e.target.value)}required/>
      </label><br/>
      <button>Submit</button>
    </form>
    </div>
}

const ChildComponent = (props) =>
{
  console.log("Prop1 Received:", props.prop1)
  console.log("Prop2 Received:", props.prop2)
  return<div>
    Child Component<br/>
    prop1 Received from Parent : {props.prop1}<br/>
    prop1 Received from Parent : {props.prop2}<br/>
    <button onClick={()=>props.callBackFunction("My child's Data")}>Click me</button>


    </div>
}


export default App;