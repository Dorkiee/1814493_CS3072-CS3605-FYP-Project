import axios from "axios"
import React, {Component} from "react"
import { Link } from 'react-router-dom';


export default class  empTable extends Component {
//include tracking -- i can do this by incrementing one when the user "completed a course"
    render () {
        return (
            <tr>
                
                <td>{this.props.obj.firstName}</td>
                <td>{this.props.obj.lastName}</td>
                <td>{this.props.obj.username}</td>
                <td>{this.props.obj.department}</td>
                <td>{this.props.obj.role}</td>
                <td>
                    <Link className="edit-link" to={"/edits/" + this.props.obj._id}>
                        Go To Settings
                    </Link>
                    
                </td>
            </tr>
        )
    }
}