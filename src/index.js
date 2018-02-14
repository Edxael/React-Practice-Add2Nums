import React from 'react'
import ReactDOM from 'react-dom'
import GatherCom from './app/00-gather'

class IndexComp extends React.Component{
    render(){
        return(
            <div>
                {/* <p> this is a class statelees component </p> */}
                <GatherCom/>
            </div>
        )
    }
} 

ReactDOM.render(<IndexComp />, document.getElementById('root') )
