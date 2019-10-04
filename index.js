// Write your solution in this file!
const driver = {};

<<<<<<< HEAD
function updateDriverWithKeyAndValue(driver, key, value){
  const newDriver = { ...driver };
=======
function updateDriverWithKeyAndValue(driver, key, value) {
  const newDriver = Driver.assign([], driver);
>>>>>>> e7db58e32cc9e547ecf69af2d94ae191e4e76b7b

  newDriver[key] = value;

  return newDriver;
}
<<<<<<< HEAD

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
  driver[key] = value;

  return driver;
}

function deleteFromDriverByKey(driver, key){
  const newDriver = { ...driver };

  delete newDriver[key];

  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key){
  delete driver[key];

  return driver;
}
=======
>>>>>>> e7db58e32cc9e547ecf69af2d94ae191e4e76b7b
