import React, { PureComponent } from 'react'
import enhancedUserInfo from './hoc/enhanced_props'
import About from './pages/About'


const Home = enhancedUserInfo(function (props) {
    return <>
        <h1>Home: {props.name}-{props.age}</h1>
        {props.banners.map(banner => <div key={banner}>{banner}</div>)}
    </>
})
const Profile = enhancedUserInfo(function (props) {
    return <h1>Profile: {props.name}-{props.age}</h1>
})
const Hello = enhancedUserInfo(function (props) {
    return <h1>Hello: {props.name}-{props.age}</h1>
})

export class App extends PureComponent {
  render() {
    return (
      <div className='app'>
        <h2>App</h2>
        <Home banners={["a", "b"]}/>
        <Profile />
        <Hello />
        <About></About>
      </div>
    )
  }
}

export default App