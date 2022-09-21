function login(input) {
  let user = input[0];
  let count = 0;
  let noMoreTries = false;
  let correctPass = false;
  let index = 1;
  let password = "";
  while (!noMoreTries) {
    let splitString = input[index].split("");
    let reversedArray = splitString.reverse();
    password = reversedArray.join("");
    if (password == user) {
      correctPass = true;
      console.log(`User ${user} logged in.`);
      break;
    } else {
      count++;
      correctPass = false;
      console.log(`Incorrect password. Try again.`);
      if (count === 3) noMoreTries = true;
    }
    index++;
  }
  let splitString = input[index].split("");
  let reversedArray = splitString.reverse();
  password = reversedArray.join("");
  if (noMoreTries) {
    if (password == user) {
      correctPass = true;
      console.log(`User ${user} logged in.`);
    } else {
      console.log(`User ${user} blocked!`);
    }
  }
}

function log(input) {
  let userName = input.shift();
  let copy = userName;
  input.unshift(copy);
  let count = 0;

  for (let index = 1; index <= input.length; index++) {
    if (count === 3) {
      console.log(`User ${userName} blocked`);
      break;
    }
    let reverseString = input[index];
    reverseString = reverseString.split("");
    reverseString = reverseString.reverse();
    reverseString = reverseString.join("");

    if (reverseString !== userName) {
      console.log("Incorrect password. Try again.");
    } else {
      console.log(`User ${userName} logged in`);
    }
    count++;
  }
}

loginn(["Acer", "login", "go", "let me in", "recA"]);
loginn(["sunny", "rainy", "cloudy", "sunny", "sunny", "whatever", "bitch"]);

function loginn(input) {
  for (let index = 1; index < input.length; index++) {
    if (input[0].split("").reverse().join("") === input[index]) {
      console.log(`User ${input[0]} logged in.`);
    } else {
      if (index === 4) {
        console.log(`User ${input[0]} blocked!`);
        break;
      } else {
        console.log(`Incorrect password. Try again.`);
      }
    }
  }
}
