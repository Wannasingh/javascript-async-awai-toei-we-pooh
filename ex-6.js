// Exercise #6
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

let getJohnOrders = () => {
  return new Promise(function (resolve) {
    setTimeout(
      () =>
        resolve([
          {
            orderId: "001",
            items: ["apple", "banana"],
          },
          {
            orderId: "002",
            items: ["orange", "itim"],
          },
        ]),
      1500
    );
  });
};

let newGetJohnProfile = async () => {
  try {
    let res = await getJohnProfile();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
let newGetJohnOrders = async () => {
  try {
    let res = await getJohnOrders();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};
newGetJohnProfile();
newGetJohnOrders();
// Start coding here
