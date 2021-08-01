exports.getRandomId = (resources) => {
  if (!resources.length) throw Error('No resources');
  let randomId = resources[0].id;
  for (const resource of resources) {
    const randomNumber = Math.random() * 100 + 1;
    randomId = randomNumber >= 50 ? resource.id : randomId;
  }
  return randomId;
};

exports.getRandomIdByType = async (Model) => {
  const resources = await Model.findAll();
  return getRandomId(resources);
};
