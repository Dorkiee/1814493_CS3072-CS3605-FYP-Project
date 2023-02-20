import axios from "axios"
import React, {Component} from "react"
import { Link } from 'react-router-dom';

export default class  enrollCourseTable extends Component {

    render () {
        return (
            <div>
                <h3>{this.props.obj.courseName}</h3>
            <tr>
            <td>
                <Link className="view-link" to={"/mycourse/" + this.props.obj._id}>
                    Take Course
                </Link>
                    
            </td>
            </tr>

            </div>
        )
    }
}