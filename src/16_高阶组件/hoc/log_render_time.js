import { PureComponent } from "react"

function logRenderTime(OriginComponent) {
    return class NewComponent extends PureComponent {
        constructor () {
            super()
        }
        componentWillMount() {
            this.brginTime = new Date().getTime()
        }
        componentDidMount() {
            this.endTime = new Date().getTime()
            console.log(`${OriginComponent.name}:`, this.endTime - this.brginTime)
        }
        render() {
            return <OriginComponent {...this.props}></OriginComponent>
        }
    }
}


export default logRenderTime