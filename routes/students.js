const express = require('express');
const router = express.Router();

// Find out how to set this up as a seperate JSON object so you don't have to copy/paste it everywhere
const studentGrades = [{
    id: 1,
    name: 'Lemon Cucumber',
    grades: [3.0, 3.1, 4.5]
  },
  {
    id: 2,
    name: 'Cauli Flower',
    grades: [2.5, 2.1, 2.9]
  },
  {
    id: 3,
    name: 'Butternut Squash',
    grades: [4.0, 4.0, 4.0]
  }
];

// Returns a list of all student names.
router.get('/', (req, res) => {
  var studentNames = studentGrades.map(student => student.name);

  res.send(`${studentNames }`);
});

// Return student information by their ID.
router.get('/:id', (req, res) => {
  const studentID = parseInt(req.params.id);
  console.log(req.params);
  const studentInfo = studentGrades.find(student => student.id === studentID);

  res.json(studentInfo);
});

router.post('/', (req, res) => {
  res.send('your basket has been uploaded');
});

module.exports = router;