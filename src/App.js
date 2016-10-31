import React, { Component } from 'react';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import actions from './state/Actions';
import purefunctions from './Pure';

class App extends Component {
  nameInputHandler(name) {
    if (name.match(/^[a-zA-Z ]+$/)) {
      this.props.actions.newName(name);
      this.props.actions.clearError();
    } else {
      this.props.actions.error("Please enter just alphabet characters into the name field");
    }
  }

  gradeInputHandler(grade) {
    if (purefunctions.isNumeric(grade)) {
      this.props.actions.newGrade(grade);
      this.props.actions.clearError();
    } else {
      this.props.actions.error("Please enter just numbers into the grade field");
    }
  }

  updateNameHandler(name, key) {
    if (name.match(/^[a-zA-Z ]+$/)) {
      this.props.actions.updateName(name, key);
      this.props.actions.clearError();
    } else {
      this.props.actions.error("Please enter just alphabet characters into the name field");
    }
  }

  updateGradeHandler(grade, key) {
    if (purefunctions.isNumeric(grade)) {
      this.props.actions.updateGrade(grade, key);
      this.props.actions.clearError();
    } else {
      this.props.actions.error("Please enter just numbers into the grade field");
    }
  }

  submitHandler(name, grade) {
    if (this.props.newName && this.props.newGrade) {
      let key = this.props.grades.length;
      this.props.actions.addGrade(this.props.newName, Number(this.props.newGrade), key);
    } else if (this.props.newName.length === 0 && !this.props.newGrade) {
      this.props.actions.error("Please enter values into the fields");
    } else if (this.props.newName.length === 0) {
      this.props.actions.error("Please enter a name");
    } else if (!this.props.newGrade) {
      this.props.actions.error("Please enter a grade");
    }
  }

  componentWillMount() {
    this.props.actions.clearError();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>LogRhythm Coding Test</h2>
        </div>
        <p className="App-intro">
          Please enter a name and grade
        </p>
        <form className="grade-entry" onSubmit={(e) => { e.preventDefault(); this.submitHandler(this.props.name, this.props.newGrade)}}>
          <input type="text" name="name" placeholder="Name" onChange={ (e) =>  this.nameInputHandler(e.target.value) } />
          <input type="text" name="grade" placeholder="Grade" onChange={ (e) => this.gradeInputHandler(e.target.value) } />
          <button type="submit">Submit</button>
          {
            this.props.error ?
            <p className="error">{this.props.error}</p>
            : null
          }
        </form>
        <table className="statistics-table">
          <thead>
          <tr>
            <th>Lowest Grade</th>
            <th>Highest Grade</th>
            <th>Average Grade</th>
          </tr>
          </thead>
          <tbody>
          <tr>
            <td>{purefunctions.lowestGrade(this.props.flattenedGrades)}</td>
            <td>{purefunctions.highestGrade(this.props.flattenedGrades)}</td>
            <td>{purefunctions.averageGrade(this.props.flattenedGrades)}</td>
          </tr>
          </tbody>
        </table>
        <table className="grades-table">
          <thead>
          <tr>
            <th>Name</th>
            <th>Grade</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.grades.map((item, index) => {
              return (
                <tr key={item.Key} className={item.Grade > 65 ? "notFailing" : "failing"}>
                  <td>
                    <input className="subtle-input"
                      onBlur={(e) => this.updateNameHandler(e.target.value, item.Key) }
                      onKeyPress={(e) => { if (e.key === "Enter" ) { this.updateNameHandler(e.target.value, item.Key); }}}
                      defaultValue={item.Name} />
                  </td>
                  <td>
                    <input className="subtle-input"
                      onBlur={(e) => this.updateGradeHandler(e.target.value, item.Key) }
                      onKeyPress={(e) => { if (e.key === "Enter" ) { this.updateGradeHandler(e.target.value, item.Key); }}}
                      defaultValue={item.Grade} />
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    grades: state.grades,
    flattenedGrades: state.flattenedGrades,
    newName: state.newName,
    newGrade: state.newGrade,
    error: state.error,
  };
}

const mapDispatchToProps = function(dispatch, ownProps) {
  return { actions: actions };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
