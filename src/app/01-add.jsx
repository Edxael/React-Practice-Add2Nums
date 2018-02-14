import React, { Component } from 'react'
import './style.css'

export default class extends Component {
    constructor(props){
        super(props)
        this.state = { num1: '', num2: '', total: '' }
    }

    exe1(){
        console.log('hello from function exe1')
        console.log(this.state)

        this.setState({ total: ( parseInt(this.state.num1, 0) + parseInt(this.state.num2, 0) ) })
        setTimeout(() => { console.log(this.state) }, 500)
        setTimeout( () => { this.setState({ num1: '', num2: '', total: '' }) }, 3000 )
    }

    render(){
        return(
            <div>
                {/* <p>Hello from the add component</p> */}

                <div className="main-container">
                <h1>Add Numbrers</h1>

                <input type="text" className="inputs" value={ this.state.num1 } onChange={ (ev) => { this.setState({ num1: ev.target.value }) } } />
                <br/><br/>

                <input type="text" className="inputs" value={ this.state.num2 } onChange = { (ev) => { this.setState({ num2: ev.target.value }) } } />
                <br/><br/>

                <button onClick={ () => { this.exe1() } } >Add Numbers</button>
                <br/><br/>

                <input type="text" className="out1" value={this.state.total} />
                </div>

            </div>
        )
    }
}
