const getRandomId = (resources) => {
  if (!resources.length) throw Error('No resources');
  let randomId = resources[0].id;
  for (const resource of resources) {
    const randomNumber = Math.random() * 100 + 1;
    randomId = randomNumber >= 50 ? resource.id : randomId;
  }
  return randomId;
};

module.exports = {
  getRandomId,
};
