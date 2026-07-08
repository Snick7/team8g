import kemel from "../assets/players/kemel.jpg";
import erasyl from "../assets/players/erasyl.jpg";
import ruslan from "../assets/players/ruslan.jpg";
import ernur from "../assets/players/ernur.jpg";
import erbolat from "../assets/players/erbolat.jpg";
import serzhan from "../assets/players/serzhan.jpg";
import nurislam from "../assets/players/nurislam.jpg"
import alikhan from "../assets/players/alikhan.jpg";
import ersain from "../assets/players/ersain.jpg";
;
const players = [
  {
    id: 1,
    name: "Руслан",
    positions: ["Нап", "ЛВ"],
    photo: ruslan,
    age: 13,
    number: 7,
    rating: 91,

    matches: 0,
    goals: 0,
    assists: 0,
    pace: 95,
shooting: 97,
passing: 85,
dribbling: 89,
defending: 81,
physical: 89,

  },

  {
  id: 2,
  name: "Ернур",
  fullName: "Еркенулы Ернур",

  positions: ["Нап", "ЛВ"],
  photo: ernur,

  age: 13,
  number: 80,
  rating: 93,

  matches: 0,
  goals: 0,
  assists: 0,

  pace: 95,
  shooting: 90,
  passing: 85,
  dribbling: 97,
  defending: 42,
  physical: 78,
},
  {
  id: 3,
  fullName: "Жумабай Ерболат",

  name: "Ерболат",

  positions: ["Нап", "ЦП", "Врт"],

  photo: erbolat,

  age: 13,
  number: 1,

  rating: 85,

  pace: 79,
  shooting: 78,
  passing: 85,
  dribbling: 82,
  defending: 74,
  physical: 70,

  matches: 0,
  goals: 0,
  assists: 0,
},

  {
  id: 4,
  name: "Сержан",
  fullName: "Сембай Сержан",

  positions: ["ЦЗ", "ЦП"],
  photo: serzhan,

  age: 12,
  number: 4,
  rating: 79,

  matches: 0,
  goals: 0,
  assists: 0,

  pace: 70,
  shooting: 58,
  passing: 72,
  dribbling: 69,
  defending: 82,
  physical: 80,
},

 
{
  id: 5,
  name: "Нурислам",
  fullName: "Максот Нурислам",

  positions: ["ПВ", "ЦЗ"],
  photo: nurislam,

  age: 13,
  number: 10,
  rating: 89,

  matches: 0,
  goals: 0,
  assists: 0,

  pace: 84,
  shooting: 89,
  passing: 92,
  dribbling: 93,
  defending: 90,
  physical: 77,
},

{
  id: 6,
  name: "Ерасыл",
  positions: ["ЦЗ"],
  photo: erasyl,
  age: 14,
  number: 3,
  rating: 73,

  matches: 0,
  goals: 0,
  assists: 0,

  pace: 65,
  shooting: 53,
  passing: 55,
  dribbling: 35,
  defending: 70,
  physical: 60,
},

{
  id: 7,
  name: "Кемел",
  positions: ["ЦЗ", "Врт"],
  photo: kemel,
  age: 13,
  number: 2,
  rating: 80,

  matches: 0,
  goals: 0,
  assists: 0,

  pace: 66,
  shooting: 55,
  passing: 70,
  dribbling: 68,
  defending: 80,
  physical: 70,
},

{
  id: 8,
  name: "Алихан",
  fullName: "Алмаз Алихан",

  positions: ["ЛВ", "ЦП"],
  photo: alikhan,

  age: 13,
  number: 11,
  rating: 87,

  matches: 0,
  goals: 0,
  assists: 0,

  pace: 88,
  shooting: 80,
  passing: 89,
  dribbling: 87,
  defending: 68,
  physical: 81,
},
 {
  id: 9,
  name: "Ерсаин",
  fullName: "Гарифула Ерсаин",

  positions: ["ЦП"],
  photo: ersain,

  age: 13,
  number: 9,
  rating: 82,

  matches: 0,
  goals: 0,
  assists: 0,

  pace: 82,
  shooting: 78,
  passing: 84,
  dribbling: 85,
  defending: 70,
  physical: 79,
},
];

export default players;