import React, {Component} from "react"
import { Link } from 'react-router-dom';

export default class  courseTable extends Component {

    render () {
        return (
            <div>
                <h3>{this.props.obj.courseName}</h3>
            <tr>
            <td>
                <Link className="view-link" to={"/course/" + this.props.obj._id}>
                    View Course
                </Link>
                    
            </td>
            </tr>

            </div>
        )
    }
}