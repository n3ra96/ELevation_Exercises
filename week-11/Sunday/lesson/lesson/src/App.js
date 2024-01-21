import logo from './logo.svg';
import './App.css';

function App() {
  /////spot-check 1/////
  const getStuff = () => "Wild function'ed text"

  /////spot-check 2/////

  const getMorningGreeting = () => <div>Good Morning</div>
  const getEveningGreeting = () => <div>Good Evening</div>

  let isMorninig = new Date().getHours() < 12

  /////Exercise 1/////

  const showCompany = (name, revenue) =>  <div id="{name}">{name} makes {revenue} every year</div> 

  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]

  const showAll = (arr) => { return   arr.map((x) => showCompany(x.name, x.revenue)); }

  /////Exercise 2/////

  const getClassName = (temperature) => { if(temperature< 15){
    return <div id="weatherBox" class="freezing"></div> 
  }else{if(temperature>15 && temperature<30){
    return <div id="weatherBox" class="fair"></div>
  }else{
    return <div id="weatherBox" class="hell-scape"></div>
      }
    }
  }

  return (
    <div>
      <div className="ex-space">
        <h4 className='ex-title'>Spot-check 1</h4 >
        <div className="exercise" id="spotcheck-1">
          <h1>Stuff: {getStuff()}</h1>
        </div>
      </div>

      <h4 className='ex-title'>Spot-check 2</h4>
      <div className="exercise" id="spotcheck-2">
        {isMorninig ? getMorningGreeting() : getEveningGreeting()}
      </div>

      [
    getMorningGreeting(),
    getEveningGreeting(),
    <p>some text</p>
  ]

      <h4 className='ex-title'>Exercise 1</h4>
      <div className="exercise" id="ex-1">
        {showAll(companies) }
      </div>

      <h4 className='ex-title'>Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {getClassName(1)}
        {getClassName(16)}
        {getClassName(111)}
      </div>
    </div>
  )
}

export default App;
