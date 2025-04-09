const game1 = {
    nameOfProduct: "Doom",
    price: 50
}
function objectToArray(obj) {
  return Object.entries(obj).map(([key, value]) => {
    return { key, value };
  });
} console.log(objectToArray(game1))
