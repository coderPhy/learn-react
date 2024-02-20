import { PureComponent } from "react";

function enhancedUserInfo(OriginComponent) {
    class NewComponent extends PureComponent {
        constructor() {
            super()
            this.state = {
                userInfo: {
                    name: "coder",
                    age: 24
                }
            }
        }
        render() {
            return <OriginComponent {...this.props} {...this.state.userInfo}></OriginComponent>
        }
    }

    return NewComponent
}

export default enhancedUserInfo