const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

const {
  getFortune,
  deleteFortune,
  createFortune
 } = require('./controller/ctrl.js')


  app.get("/api/fortune", (req, res) => {
    const fortune = ["the sun always rises after the darkness", "the journey is long for the hermit", "you will discover wealth in an unlikely place"];
  app.delete('/api/fortune/:id', deleteFortune)
  // app.create('api/fortune', createFortune)
  
  let randomIndex2 = Math.floor(Math.random() * fortune.length);
  let randomFortune = fortune[randomIndex2];
  res.status(200).send(randomFortune)
return;
})
app.get("/api/wammy", (req, res) => {
  const wammy = ["Double Wammy!",
					 "500 points!",
					 "You Win!",
  ];
const {
  getWammy
} = require('./controller/ctrl.js')

  // choose random compliment
  let randomIndex3 = Math.floor(Math.random() * wammy.length);
  let randomWammy = wammy[randomIndex3];

  res.status(200).send(randomWammy);
  return;
})
app.get("/api/wisdom", (req, res) => {
  const wisdom = ["Two is better than one!",
					 "Good and evil are polar opposites!",
					 "the sky is blue and the moon is cheese.",
  ];
  const {
    getWisdom
  } = require('./controller/ctrl.js')
  
    let randomIndex4 = Math.floor(Math.random() * wisdom.length);
    let randomWisdom = wisdom[randomIndex4];
  
    res.status(200).send(randomWisdom);
    return;
  });


app.listen(4000, () => console.log("Server running on 4000"));
