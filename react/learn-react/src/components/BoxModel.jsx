import Greet from "./Greet";

function BoxModel ({userName, age }){
// console.log('props:',props)
let person = {
    name : 'Raju',
    gender : 'male',
    salary : 35000

}
    return(
        <div className="boxmodel">
       {userName},
       {age}
      <Greet  person = {person}/>
        </div>
    )
}

export let age = 45; 
export default BoxModel;
