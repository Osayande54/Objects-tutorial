function User(name, surname, country, age) {
  this.name = name;
  this.surname = surname;
  this.country = country;
  this.age = age;
}

User.prototype.About = function () {
  console.log(
    `${this.name} ${this.surname} is from ${this.country} and is aged ${this.age}`
  );
};

const user1 = new User("Bola", "Ahmed", "Nigeria", 80);
console.log(user1);
