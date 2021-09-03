module.exports = {
    getWisdom: (req, res) => res.status(200).send(wisdom),
    getWammy: (req, res) => res.status(200).send(wammy),
  getFortune: (req, res) => res.status(200).send(fortune),
  deleteFortune: (req, res) => {
    let index = fortunes.findIndex((elem) => elem.id === +req.params.id);
    fortune.splice(index, 1);
    res.status(200).send(fortune);
  },
  createFortune: (req, res) => {
    let { text } = req.body;
    let newFortune = {
      id: globalId,
    };
    fortune.push(newFortune);
    res.status(200).send(fortune);
    globalId++;
    wisom.push(Wisdom);
    wammy.push(Wammy);
    // wisom.push(Wisdom);
res.status(200).send(wammy);
// globalId++;
// wisom.push(Wisdom);
res.status(200).send(wisdom);
// globalID++;
  },
};

