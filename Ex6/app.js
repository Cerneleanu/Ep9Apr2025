const game1 = {game: 'assassin', price: 60}
const game2 = {platform: 'ps5', price: 50}
function mergeObjects(obj1, obj2) {
    return { ...obj1, ...obj2 };
} console.log(mergeObjects(game1, game2))