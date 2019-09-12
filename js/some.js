var operatives = [
  { id: 12, name: 'Baze Malbus', pilot: false },
  { id: 44, name: 'Bodhi Rook', pilot: true },
  { id: 59, name: 'Chirrut Îmwe', pilot: false },
  { id: 122, name: 'Jyn Erso', pilot: false }
];

var listHasPilots = false;

// operatives.forEach(function (operative) {
//   if (operative.pilot) {
//     listHasPilots = true;
//   }
// });

// operatives.forEach(operative => {
//   if(!operative.pilot) {
//     operative.pilot = true;
//   }
// });

const listHasPilots = operatives.some(operative => operative.pilot);

console.log(operatives);
