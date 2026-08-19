
import './App.css'
import hero from './assets/hero.png'
import BoxModel from './components/BoxModel';
import {age} from './components/BoxModel'
import ColorInfo from './components/colorInfo';
import StudentList from './components/StudentsList';
import Vegitables from './components/Vegitables';
import WeatherInfo from './components/WeatherInfo';
import LoginStatus from './components/LoginStatus';
import AgeVarification from './components/AgeVarification';
import HideAndShow from './components/HideAndShow';
import Counter from './components/Counter';
import Token from './components/Token';
import ImageDisplay from './components/ImageDisplay';
import SimpleForm from './components/SimpleForm';
import SideEffect from './components/SideEffect';
import FunctionalComponent from './components/FunctionalComponent';
function App() {
let name = 'Manu';
let age = 23
let isStudent = false;


  return (
  <div className=" app container"> 
{/* <p>{name}</p> */}
 {/* js embaded */}
{/* <h1 style={{color:'red',background:'#fff'}}> this is a jsx rule that inline style using  </h1> */}
{/* <BoxModel userName = {name} age ={age} /> */}
{/* <name /> */}
{/* <WeatherInfo/>
<ColorInfo/> */}
{/* <StudentList /> */}
{/* <Vegitables /> */}
{/* <LoginStatus/> */}
{/* {
  isStudent ? <LoginStatus/>  :  <StudentList />

}
{
    age == 23 && <WeatherInfo/>
} */}
{/* <AgeVarification/> */}
{/* <HideAndShow/> */}
{/* <Counter/> */}
{/* <Token/> */}
{/* <ImageDisplay/> */}
{/* <SimpleForm/> */}
{/* <SideEffect/> */}
{/* <ColorInfo/>  */}
<FunctionalComponent/>
<>

</>
  </div>
  )
}

export default App


// <p>hai</p>
// <h1>heading 1 {name}</h1>
// <h2>heading 2 {age}</h2>
// <h3>heading 3{String(isStudent)}</h3>
// <h4>heading 4</h4>
// <h5>heading 5</h5>
// <h6>heading 6</h6>
// <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. <br /> Porro, sed.</p>
// {/* <form action="">

// </form> */}
// {/* <iframe src={hero} frameborder="0"></iframe> */}
// <iframe src={hero} frameborder="0"></iframe>
// <br />
// <iframe width="560" height="315" src="https://www.youtube.com/embed/FYErehuSuuw?si=61CSY1udWCXN9NDa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>