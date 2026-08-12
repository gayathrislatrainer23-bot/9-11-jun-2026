<!-- 8/5/2026 -------------------------------------->
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