import axios from "axios"
import React, {Component} from "react"
import { Link } from 'react-router-dom';
import cardFrame from './CSS/courseCards.css'

export default class  enrollCourseTable extends Component {

    render () {
        return (
    <div className="card-container">
        <div className="cardSize">
          <h3 className="card-title">{this.props.obj.courseName}</h3>
          <div className="card-action">
            <Link className="view-link" to={"/mycourse/" + this.props.obj._id}>
            Take Course
            </Link>
          </div>
        </div>
      </div>
        )
    }
}