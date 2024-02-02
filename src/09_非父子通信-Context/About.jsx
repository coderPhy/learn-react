import React from 'react'
import themeContext from './context/theme-context'


export default function About() {
  return (
    <div className='about'>
        <h1>About</h1>
        <themeContext.Consumer>
            {
                value => <div>{value.color}</div>
            }
        </themeContext.Consumer>
    </div>
  )
}
