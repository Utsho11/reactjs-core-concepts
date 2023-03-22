import logo from './logo.svg';
import './App.css';


function App(){
  const persons = ['Utsho','Sakib Al Hasan','Arijit Singh']
  const personDetails = [{name:'Utsho',job:'Student'},
                         {name:'Sakib Al Hasan',job:'Cricketer'},
                         {name:'Arijit Singh',job:'Singer'},]
  return(
    <div>
      {
      persons.map(person => <Person name={person}></Person>)
    } 
    {
      personDetails.map(personDetail => <Person name={personDetail.name} profession={personDetail.job}></Person> )
    }
  {/* <Person name='Utsho' profession='Student'></Person>
  <Person name='Sakib Al Hasan' profession='Cricketer'></Person>
  <Person name='Arijit Singh' profession='Singer'></Person> */}
    </div>
  )
}

function Person(props){
  return(
    <div className='container'>
      <h1>{props.name}</h1>
      <p>Profession: {props.profession}</p>
    </div>
  )
}

export default App;
