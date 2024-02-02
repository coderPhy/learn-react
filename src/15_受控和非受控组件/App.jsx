import React, { Component } from 'react'

export class App extends Component {  
    constructor() {
        super()
        this.state = {
            username: "phy",
            password: "123",
            hobbies: [
                { value: "sing", text: "唱", isChecked: false },
                { value: "jump", text: "跳", isChecked: false },
                { value: "rap", text: "rap", isChecked: false },
            ],
            select: "",
            selects: []
        }
    }  
    handlerInputChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handlerCheckboxChange(event, currentIndex) {
        const hobbies = [...this.state.hobbies]
        hobbies[currentIndex].isChecked = event.target.checked
        this.setState({
            hobbies
        })
    }

    handlerSelectChange(event) {
        const arr = Array.from(event.target.selectedOptions, option => option.value)
        this.setState({
            select: arr[0]
        })
    }
    handlerSelectChange2(event) {
        const selects = Array.from(event.target.selectedOptions, option => option.value)
        this.setState({
            selects
        })
    }

    handlerSubmit(e) {
        e.preventDefault()
        console.log(
            "username:", this.state.username,
            ",password:",this.state.password,
            ",hobbies:", this.state.hobbies.filter(hobby => hobby.isChecked).map(hobby => hobby.value),
            ",select:", this.state.select,
            ",selects:", this.state.selects,
        )
    }

    render() {
        const { username, password, hobbies, select, selects } = this.state

        return (
        <div className='app'>
            <form onSubmit={e => this.handlerSubmit(e)}>
                {/* 单选 */}
                <label htmlFor='username'>
                    用户名: 
                    <input 
                        id='username'
                        type='text'
                        value={username}
                        name='username'
                        onChange={e => this.handlerInputChange(e)} 
                    />
                </label>
                <label htmlFor='password'>
                    密码:
                    <input 
                        id='password'
                        name="password"
                        type='text'
                        value={password}  
                        onChange={e => this.handlerInputChange(e)}  
                    />
                </label>
                {/* 多选 */}
                <div>
                    爱好：
                    <label htmlFor='checkbox'>
                        {
                            hobbies.map((hobby, index) => 
                                <label htmlFor={hobby.value} key={hobby.value}>
                                    <input 
                                        id={hobby.value}
                                        type="checkbox" 
                                        value={hobby.value} 
                                        checked={hobby.isChecked}
                                        onChange={ e => this.handlerCheckboxChange(e, index) } 
                                    ></input>
                                    {hobby.text}
                                </label>
                            )
                        }
                    </label>
                </div>

                {/* select单选 */}
                <div style={{marginTop: "10px", marginBottom: "10px"}}>
                    <select value={select} onChange={e => this.handlerSelectChange(e)} >
                        <option value="a">a</option>
                        <option value="b">b</option>
                        <option value="c">c</option>
                    </select>
                </div>

                {/* select多选 */}
                <div style={{marginTop: "10px", marginBottom: "10px"}}>
                    <select value={selects} multiple={true}
                        onChange={e => this.handlerSelectChange2(e)} >
                        <option value="a">a</option>
                        <option value="b">b</option>
                        <option value="c">c</option>
                        <option value="d">d</option>
                        <option value="e">e</option>
                    </select>
                </div>

                <div>
                    <button type="submit">提交</button>
                </div>
            </form>
        </div>
        )
    }
}

export default App