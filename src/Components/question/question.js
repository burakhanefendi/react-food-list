import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col } from 'reactstrap';
import { dateTimeFormatter } from '../utils';
import './question.css';

class Question extends Component {

    render() {
        return (
          <Col xs="6" sm="3">
              <div className="question">
                  <Link to={this.props.questionData.url}>
                      <h5 className="question-title">{this.props.questionData.question}</h5>
                      <p><strong>published at</strong>: { dateTimeFormatter(this.props.questionData.published_at) }</p>
                      <p><strong>#choises</strong>: {this.props.questionData.choices.length}</p>
                  </Link>
              </div>
        </Col>
        );
    }
}

export default Question;
