import  { PureComponent, Fragment } from 'react'

export class App extends PureComponent {
  render() {
    return (
        // <Fragment>
        //     <h2>Title</h2>
        //     <h2>Text</h2>
        // </Fragment>
        <>
            <h2>Title</h2> 
            <h2>Text</h2>
        </>
    )
  }
}

export default App