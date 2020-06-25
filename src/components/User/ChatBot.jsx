import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChatBot from 'react-simple-chatbot';
import './ChatBot.scss';

class Review extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      gender: '',
      age: '',
    };
  }

  componentWillMount() {
    const { steps } = this.props;
    const { name, gender, age } = steps;

    this.setState({ name, gender, age });
  }

  render() {
    const { name, gender, age } = this.state;
    return (
      <div style={{ width: '100%' }}>
        <h3>Summary</h3>
        <table>
          <tbody>
            <tr>
              <td>Name</td>
              <td>{name.value}</td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>{gender.value}</td>
            </tr>
            <tr>
              <td>Age</td>
              <td>{age.value}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Review.propTypes = {
  steps: PropTypes.object,
};

Review.defaultProps = {
  steps: undefined,
};

class SimpleForm extends Component {
  render() {
    return (
      <ChatBot
        steps={[
          {
            id: '1',
            message: 'What is your problem ?',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Où vous situez vous ?',
            trigger: 'gender',
          },
          {
            id: 'gender',
            user: true,
            trigger: '5',
          },
          {
            id: '5',
            message: 'Vous pouvez vous rendre à l\'Hopital de Purpan qui se situe place du Docteur Joseph Baylac - 31300 Toulouse'
          }

        ]}
      />
    );
  }
}

export default SimpleForm;