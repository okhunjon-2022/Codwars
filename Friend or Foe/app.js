function friend(friends) {
  //your code here
  let show = friends.filter((value, index, array) => {
    if (value.length === 4) {
      return true;
    }
  });

  return show;
}
console.log(friend(["Ryan", "Jimmy", "wdws", "123", "4", "Cool Man"]));
