import purefunctions from '../Pure';

const grades = [{
  "Name": "Sarah Smarty",
  "Grade": 98,
},{
  "Name": "Biff",
  "Grade": 33,
},{
  "Name": "Bill",
  "Grade": 80,
},{
  "Name": "Madison",
  "Grade": 90,
},{
  "Name": "Courtney",
  "Grade": 87,
},{
  "Name": "Stephen Hawking",
  "Grade": 121,
},{
  "Name": "Steve Absent",
  "Grade": 0,
},{
  "Name": "Johnny Normal",
  "Grade": 80,
}];

let initialState = {
  grades: grades,
  newName: "",
  newGrade: 0,
  flattenedGrades: [],
}

initialState.flattenedGrades = purefunctions.flattenGrades(initialState.grades);
initialState.grades = initialState.grades.map((item, index) => {
  item.Key = index;
  return item;
});

if (window.sessionStorage.getItem('state')) {
  initialState = JSON.parse(window.sessionStorage.getItem('state'));
  initialState.newName = "";
  initialState.newGrade = 0;
}

export default initialState;
