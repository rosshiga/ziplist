const listA = ['a', 'b', 'c'];
const listB = [1, 2, 3];

function zipList(listin1, listin2) {
  let array = [];
  let list1 = listin1.slice();
  let list2 = listin2.slice();
  while (list1.length !== 0 | list2.length !==) {
    if (list1.length !== 0) {
      array.push(list1.pop());
    }
    if (list2.length !== 0) {
      array.push(list2.pop());
    }
  }

  return array;

}


console.log(zipList(listA, listB));
