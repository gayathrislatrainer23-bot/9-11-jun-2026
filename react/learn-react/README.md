<!-- 8/5/2026 ------------------------------------------>
1.React- js library
2.vite && cra
terminal ---  ctrl+j

3. work flow
node-module --> store dependencies

4. public- static files
5. index.html - entry point, single page
6. src - dynamic folder
7. package.json -keep  meta data of dependencies
8. bable is a compailer/transpailer to convert jsx to js.

<!-- 6/8/2026 -->
app.jsx main - component
8. comp is building block of react
   2 types comp
   1. class comp and  functional comp

1. functional comp
    --> js fun it returns jsx
jsx- syntax extension of js .
jsx -- js xml , html like syntax

    function BoxModel(){

        return (

        )
    }

export default - make the component available for import to another file
import - it use to bring/access  a component/function/variable from another file

<!-- task:1
html element in app.jsx -->

rule
1. one parent element can return
 2.  {} embed js variables
 3. inline -style using {{}}
 4. className instead of class 
 5. event also camelCase.

BoxModel --PascalCase
boxModel -camelCase

<!-- export and export default ?? -->
Props
property used to passing data from parent to child . 

Props ={
    "userName": "Manu",
    "age": 23
}
const {userName, age } =Props

1: WeatherInfo with Object Prop
    Weatherdisplay - child
     Create a component that accepts a single object as a prop
          (example: { city: "Chennai", temp: 30 }) and displays:
     output:
              Current temperature in Chennai is 30°C


 2: User Login Status with Conditional Prop

        Pass a user object as a prop 
         (example: { name: "Manu", isLoggedIn: true }).

     output:

"Welcome back!" if isLoggedIn is true, otherwise show "Please login".
parent - element one child

task: hide and show
p--> 'hai welcome'
ishow true 


 3: Colors with Array Prop
 Pass an array of colors as a prop (example: ["Red", "Blue", "green"]).
    Display them in one line like:
     output:
         Primary colors are: Red, Blue, Yellow

colorPrimary(){
    <colorDisplay data1>
}

colorSecondary(){
     <colorDisplay data2>
}


vegetables =[
  {
    name: "carrot",
    color:"orange",
    price: 30
  },
  {
   name: "potato",
   color: "brown",
   price: 20
  }
]

State : spacial memory inside comp that hold data which can change over time
hooks: special fun:s used to state management ,life cycle metnods and  side effect
useState : hook used to manage state.
const [state, setState] = useState(0)
events:action performed by user
synthetic events : react wrap html events.

let  age = 30
   age = 45
   fun  -- useState ()  --- hook


useState : hook used to manage state.

import {useState} from ' react'

                    let  [CurrentState,SetState] = useState(initialValue)
                        [age,setAge] = useState(30)
                      setAge(45)
                      age =45
                      setAge(age+2)



                        [msg ,setMsg] = useState('hello')

onClick 
OnClick

 count  
 +  1+1 =2
 _ 2-1 =1

Assignment-state


Create a component of message that show 'Welcome'. when the button clicked show ' you  clicked the button'

lifecycle methods in class comp:

componentDidMount - create
componentDidUpdate - comp update
componentWillUnmount - delete from dom 

<!-- 18/8/2026 -->
usEffect -- > hook in react -- perform side effect and  handling lifecycle method
side Effects:
1. Api calling
profile comp -->  side effect -- fetch(url) --> 
2. updating dom

login --> post ---> api
navigate to dashboard
--> render --> side effect  --> products api -->


useEffect ?? 

syntax:

useEffect(()=>{
  <!-- side effect code -->

})

case: 1 --> run after all renders

useEffect(()=>{
  <!-- side effect code -->

})

profile(){
    useEffect(()=>{
console.log('profile page is showing)

})

    return(

    )
}


case: 2 --> run after initial render
useSffect(()=>,[])

useEffect(()=>{
  <!-- side effect code -->
  console.log('profile page  RENDER INITIaly)
},[])--> dependancy array

dependancy - array - second argument in useEffect

case: 3 --> run after state change   render

const [name, setNAme] =useState("")

useEffect(()=>{
      console.log('profile page  RENDER INITIaly +props state change)

},[name,age])


 console : 1.you are logged in  all  // dashboard
 alert : 2. the page is loaded   []
 alert : 3.you are loggedin / you are not loggedin  [state]  logout btn 


4. Show and Hide Button

p comp(
    show = true / FALSE
    <!--  -->
    button click  setshow(!show) 

  show &&  child
  <!-- show ? CHILD1 : CHILD2 -->

)
show true   child show   flase   : not visible

a. Create a component with content that can be toggled visible or hidden.
b. Use a button to show or hide the content dynamically.
