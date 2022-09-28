function equalArrays(arr1, arr2) {
  arr1.forEach((elementOne) => {
    arr2.forEach((elementTwo) => {
      if (elementOne === elementTwo) {
        console.log(elementOne);
      }
    });
  });
}

equalArrays(["1", "2", "3", "4", "5"], ["1", "2", "4", "4", "5"]);
