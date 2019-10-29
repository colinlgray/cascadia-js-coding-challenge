const userBySkill = users => {
  const skillMap = {};
  if (!users) {
    return skillMap;
  }
  for (let i = 0; i < users.length; i++) {
    for (let j = 0; j < users[i].skills.length; j++) {
      if (!skillMap[users[i].skills[j]]) {
        skillMap[users[i].skills[j]] = [];
      }
      skillMap[users[i].skills[j]] = skillMap[users[i].skills[j]].concat(
        users[i].name
      );
    }
  }

  return skillMap;
};

module.exports = userBySkill;
