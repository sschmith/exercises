import BinaryTree from "../src/BinaryTree";

function sumNodes(inputArray: Array<number>): number {
  const tree = new BinaryTree();
  let total = 0;

  tree.fill(inputArray);
  total = tree.sumChildren();

  console.info("sumNodes: ", total);

  return total;
}

sumNodes([1, 2, 3]);
sumNodes([3, 2, 5, 9, -1, 10]);
sumNodes([5, 12, 6, 7, -1, 14, 9, 6, 7]);
sumNodes([1]);
sumNodes([-1]);
