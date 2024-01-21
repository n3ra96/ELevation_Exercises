import logo from './logo.svg';
import './App.css';

/////Spot Check 1

export function Sum() {
  const num1 = 9
    const num2 = 3
    return (
        <div>
            The sum is {num1 + num2}
        </div>
    )
}

/////Spot Check 2

function Nav() {
  return (
      <div id="nav">
          <span>Home</span>
          <span>About</span>
      </div>
  )
}

function LandingPage() {
  return (
      <h1>Welcome</h1>
  )
}

/////Spot Check 3

function AboutUs() {
  return <p>This is an example of an about us page~</p>
}

/////Spot Check 4

function About () {
  return (
  <div>
    <SignUp/>
    <Blurb/>
  </div>
  )
  
}


function SignUp (){
  return (
    <div>Sign up please!!</div>
)
}

function Blurb (){
  return (
    <div>blaghhhh</div>
)
}

function App() {
    // let isUserLoggedIn = localStorage.getItem('loggedIn') 
    // let componentToDisplay = isUserLoggedIn ?
    //     <LandingPage /> :
    //     <AboutUs />

    // return (
    //     <div className="app">
    //         <Nav />
    //         {componentToDisplay}
    //     </div>
    // )

    return (
      <div className="app">
          <Nav /> 
          <LandingPage />
          <About />
      </div>
  )

}


export default App;
