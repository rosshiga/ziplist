const listA = ['a', 'b', 'c'];
const listB = [1, 2, 3];

function zipList(listin1, listin2) {
  const array = [];
  const list1 = listin1.slice();
  const list2 = listin2.slice();
  while (list1.length !== 0 || list2.length !== 0) {
    if (list1.length !== 0) {
      array.push(list1.shift());
    }
    if (list2.length !== 0) {
      array.push(list2.shift());
    }
  }

  return array;
}

function zipListTheSimpleWay(list1, list2) {
  return _.flatten(_.zip(list1, list2));
}

console.log(zipList(listA, listB));
console.log(zipListTheSimpleWay(listA, listB));
