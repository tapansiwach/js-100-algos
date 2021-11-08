function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
  // find the stronger and weaker arms
  let yourStronger, yourOther, friendsStronger, friendsOther;
  if (yourLeft > yourRight) {
    yourStronger = yourLeft;
    yourOther = yourRight;
  } else {
    yourStronger = yourRight;
    yourOther = yourLeft;
  }

  if (friendsLeft > friendsRight) {
    friendsStronger = friendsLeft;
    friendsOther = friendsRight;
  } else {
    friendsStronger = friendsRight;
    friendsOther = friendsLeft;
  }

  // return true if strength of stronger and weaker arms are same
  return yourStronger === friendsStronger && yourOther === friendsOther;
}

// console.log(areEquallyStrong(10, 15, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 10))
// console.log(areEquallyStrong(15, 10, 15, 9))
