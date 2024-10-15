//Exercise #2
let getJohnProfile = () => {
  return new Promise(function (_, reject) {
    setTimeout(
      () =>
        reject({
          errorCode: 500,
          message: "👿 Failed to request data from server",
        }),
      2000
    );
  });
};

console.log(
  getJohnProfile()
    .then((res) => {
      console.log(res);
      res;
    })
    .catch((reject) => {
      console.log(reject);
    })
);

// Start coding here
