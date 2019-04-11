import React, {Component} from 'react'
import List from './list/index.js'
import Input from './input/index.js'

class Todo extends Component{
    constructor(props){
        super(props)
        this.state = {
            list:['a','b','c']
        }
    }
    render(){
        return (
            <div>
                <Input addTitle={this.addTitle.bind(this)}/>
                <List data={this.state.list}/>
                <List data={[1,11,33]}/>
            </div>
        )
    }
    addTitle(title){
        const  currentList =this.state.list
        this.setState({
            list:currentList.concat(title)
        })
    }
}

export default Todo
