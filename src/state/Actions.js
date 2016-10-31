import store from './Store';

const Actions = {
  dispatch: store.dispatch,
  test: function() {
    this.dispatch({type: 'testing'});
  },
  addGrade: function(name, grade, key) {
    let newGrade = {'Name': name, 'Grade': grade, 'Key': key};
    this.dispatch({type: 'addGrade', value: newGrade})
  },
  newName: function(name) {
    this.dispatch({type: 'newName', value: name})
  },
  newGrade: function(grade) {
    this.dispatch({type: 'newGrade', value: grade})
  },
  updateName: function(name, key) {
    let updatedName = {'Name': name, 'Key': key}
    this.dispatch({type: 'updateName', value: updatedName})
  },
  updateGrade: function(grade, key) {
    let updatedGrade = {'Grade': grade, 'Key': key}
    this.dispatch({type: 'updateGrade', value: updatedGrade})
  },
  error: function(errorMessage) {
    this.dispatch({type: 'error', value: errorMessage});
  },
  clearError: function() {
    this.dispatch({type: 'error', value: ''})
  }
}

export default Actions;
