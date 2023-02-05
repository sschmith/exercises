import type { Nullable } from "./types/Nullable";

export default class Node {
  data: number;
  left: Nullable<Node>;
  right: Nullable<Node>;

  constructor(data: number) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
