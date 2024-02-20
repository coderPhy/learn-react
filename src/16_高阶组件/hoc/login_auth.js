function loginAuth(OriginComponent) {
    return props => {
        const token = localStorage.getItem("token")
        return token ? 
         <OriginComponent {...props}></OriginComponent> :
         <h2>请先登录，再...</h2>
    }
}

export default loginAuth