const array = [1, 2, 3];

function sum(...args) {
  for (let i of args) {
    console.log(i + "\n");
  }
}

sum(array)