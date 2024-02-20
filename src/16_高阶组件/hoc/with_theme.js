import themeContext from "../context/theme_context";

export default function withTheme(OriginComponent) {
    return (props) => 
        <themeContext.Consumer>
            {
                value => <OriginComponent {...props} {...value}></OriginComponent>
            }
        </themeContext.Consumer>
}