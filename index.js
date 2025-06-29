// Scooter Constructor
function Scooter(year, color, model) {
  this.year = year;
  this.color = color;
  this.model = model;
}

// Driver Constructor
function Driver(name, age, experience) {
  this.name = name;
  this.age = age;
  this.experience = experience;
}

// PickupLocation Constructor
function PickupLocation(address, city) {
  this.address = address;
  this.city = city;
}

// Example usage
const scooter1 = new Scooter(2022, 'red', 'X-Turbo');
const driver1 = new Driver('Alice', 30, '5 years');
const pickup1 = new PickupLocation('123 Main St', 'New York');

console.log('Scooter:', scooter1);
console.log('Driver:', driver1);
console.log('Pickup Location:', pickup1);
