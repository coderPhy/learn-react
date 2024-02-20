import React from 'react'
// import ThemeContext from '../context/theme_context'
import withTheme from '../hoc/with_theme'

// export class Product extends PureComponent {
//   render() {
//     return (
//       <div>
//         <h1>Product</h1>
//         <ThemeContext.Consumer>
//         {
//             value => {
//                 return <h2>theme: {value.color} - {value.size}</h2>
//             }
//         }
//         </ThemeContext.Consumer>
//       </div>
//     )
//   }
// }

// export default Product

function Product(props) {
    return <>
        <h1>Product: {props.color} - {props.size}</h1>
    </>
}

export default withTheme(Product) 