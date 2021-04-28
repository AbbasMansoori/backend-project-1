const faker = require("faker");

function fakeUser() {
  const traits = [
    "Ballon lover",
    "Peoples person",
    "Go getter",
    "Wine enthusiast",
    "Collector of fine arts",
    "Keeper of Towers",
    "Ball player",
  ];
  const fakedate = faker.date.between("1980-01-01", "2021-01-01");
  const fakeUsers = {};
  fakeUsers.name = faker.name.findName();
  fakeUsers.Birthday = `${fakedate}`.slice(0, 15);
  // console.log(`${fakedate}`.slice(0, 18));
  fakeUsers.address = faker.address.streetAddress();
  fakeUsers.occupation = faker.name.jobTitle();
  fakeUsers.country = faker.address.country();
  fakeUsers.traits = `Is known to be a ${
  traits[Math.floor(Math.random() * traits.length)]
  }`;
  fakeUsers.picture = faker.image.avatar();
  return fakeUsers;
}

module.exports = { fakeUser };
