import Node from "./Node";
import type { Nullable } from "./types/Nullable";

export default class PositiveNode extends Node {
  constructor(data: number) {
    if (data < -1) {
      throw new Error(
        "Illegal argument passed to PositiveNode: " + data.toString()
      );
    }
    super(data);
  }
  static create(data: Nullable<number>) {
    if (data == null || data < 0) return null;
    return new PositiveNode(data);
  }
}
