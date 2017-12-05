/**
 * Uuid generator, v4
 */
class Uuid {
  get() {
    const decToHex = [];
    let uuid = "";

    for (let i = 0; i <= 15; i++) {
      decToHex[i] = i.toString(16);
    }

    for (var i = 1; i <= 36; i++) {
      if (i === 9 || i === 14 || i === 19 || i === 24) {
        uuid += "-";
      } else if (i === 15) {
        uuid += 4;
      } else if (i === 20) {
        uuid += decToHex[(Math.random() * 4 | 0 + 8)];
      } else {
        uuid += decToHex[(Math.random() * 15 | 0)];
      }
    }

    return uuid;
  }
}

export default Uuid;
