
const Greet = ({person})=>{
console.log('person', person)
    return(
        <div className="greet">
       <p>{person.name}</p>
       <p>{person.salary}</p>
       <p>{person.gender}</p>
        </div>
    )
}
export default Greet;