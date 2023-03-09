import React from "react";
import './List.scss'

class List extends React.Component {

    render() {
        return(     
            <div>
                {this.props.allTodo && this.props.allTodo.map((elm, index) => {
                    return(
                        <div>
                            <div className="listParentContainer" >
                                <ul style={{display: "flex"}}>
                                    <span 
                                        className="checkbox" 
                                        onClick={() => this.props.markAsDone(elm)}
                                    >
                                        <input type={"checkbox"}/>
                                    </span>
                                    <li 
                                        className="listElement"
                                        style={{textDecoration: elm.isCompleted? "line-through": "none"}} 
                                    >
                                        {elm.inputValue}
                                    </li>
                                </ul>    
                                <span 
                                    className="deleteButton"
                                    onClick={() => this.props.deleteTodo(elm)} 
                                >x</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
export default List;