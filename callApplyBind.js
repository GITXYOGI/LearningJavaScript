// -------call method

let name = {
  firstName: "YOGESH",
  lastName: "YADUVANSHI",
  myName: function (city, state) {
    console.log(
      this.firstName + " " + this.lastName + " from " + city + "," + state
    );
  },
};
let anotherName = {
  firstName: "Sachin",
  lastName: "Rao",
};

name.myName("palwal", "haryana");
name.myName.call(anotherName, "gorakhpur", "uttar pradesh");

// apply method-------------

oneMoreName = {
  firstName: "varsha",
  lastName: "rawat",
};

name.myName.apply(oneMoreName, ["dehradun", "uttrakhand"]);


//---------bind 

personName  = {
  firstName: "Luv",
  lastName: "Kush",
};

let personName1 = name.myName.bind(personName);
console.log(personName1);
