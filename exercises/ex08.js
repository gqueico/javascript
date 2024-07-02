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

for(let patient of patients) {
  alert(`${patient.name} tem ${patient.age} anos, pesa ${patient.weight}kg e tem uma altura de ${patient.height}cm.`)
}