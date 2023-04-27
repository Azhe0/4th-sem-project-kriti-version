
import { nanoid } from 'nanoid';

const classes= [
    {
        id: nanoid(),
        className: 'Cs Batch 2020 MCSC 207' ,
  subject: 'Numerical Methods ',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing el vehicula erra maximus.',
  classCode: 'nxfirhjdj45',
    },
{
 id: nanoid(),
 className: 'Cs Batch 2021 MATH 207' ,
  subject: 'Statistics ',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing el vehicula erra maximus.',
  classCode: 'hhgdjnh45',
    },
];


function addClasses(newClasses) {
    const classCode = Math.random().toString(36).substr(2, 8);
  const newClassesWithId = {
    ...newClasses,
    id: nanoid(),
    classCode:classCode,
    
  };
  classes = [...classes, newClassesWithId];
}

// function updateClasses(id, newClasses) {
//   const newClassesWithId = {
//     ...newClasses,
//     id,
//   };
//   classess = classess.map((d) => (d.id === id ? newClassesWithId : d));
// }

export { classes, addClasses, updateClasses };