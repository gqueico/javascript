const patients = [
  {
    name: 'Luiz',
    age: 20,
    weight: 100,
    height: 190
  },
  {
    name: 'Alexandra',
    age: 27,
    weight: 70,
    height: 170
  },
  {
    name: 'Carlos',
    age: 42,
    weight: 90,
    height: 180
  }
];

let patientsNames = []

// for(let index = 0; index < patients.length; index++) {
//   patientsNames[index] = patients[index].name;
// };

for(let patient of patients) {
  patientsNames.push(patient.name);
};

for(let index = 0; index < patients.length; index++) {
  alert(`${patients[index].name} tem ${patients[index].age} anos, pesa ${patients[index].weight}kg e tem uma altura de ${patients[index].height}cm.`);
};