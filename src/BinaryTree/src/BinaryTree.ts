import PositiveNode from "./node/PositiveNode";
import type { Nullable } from "./types/Nullable";

export default class BinaryTree {
  root: Nullable<PositiveNode>;

  constructor(root?: Nullable<PositiveNode>) {
    this.root = root;
  }

  fill(inputArray: Array<number>): void {
    let node: Nullable<PositiveNode> = null;
    if (!this.root) {
      this.root = PositiveNode.create(inputArray.shift());
      node = this.root;
    }
    this.#populate(inputArray, node);
  }

  #populate(inputArray: Array<number>, node: Nullable<PositiveNode>): void {
    if (inputArray.length <= 0) return;

    if (node == null) return;

    node.left = PositiveNode.create(inputArray.shift());
    node.right = PositiveNode.create(inputArray.shift());

    this.#populate(inputArray, node.left);
    this.#populate(inputArray, node.right);
  }

  sumChildren(node?: Nullable<PositiveNode>) {
    if (!node) node = this.root;
    return this.#performSum(node);
  }

  #performSum(node: Nullable<PositiveNode>): number {
    if (node == null) {
      return 0;
    }

    return (
      node.data + this.#performSum(node.left) + this.#performSum(node.right)
    );
  }
}
