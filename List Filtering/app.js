function filter_list(l) {
  return l.filter((value) => {
    if (typeof value === "number" || 0) {
      return true;
    }
  });
}
console.log(filter_list([2,'a',54454]));
