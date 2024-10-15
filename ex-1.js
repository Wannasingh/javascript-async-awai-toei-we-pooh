//Exercise #1

let getJohnProfile = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve({
          name: "John",
          age: 20,
          hobbies: ["Coding", "Football"],
        }),
      1000
    );
  });
};
let res = getJohnProfile()
  .then((resolve) => {
    resolve;
  })
  .catch();
console.log(res);
// Start coding here
