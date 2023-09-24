import Node from "./Node";
import type { Nullable } from "../types/Nullable";

export default class PositiveNode extends Node {
  static MIN_VALUE: number = -1;

  constructor(data: number) {
    const positiveData = data >= -1 ? data : PositiveNode.MIN_VALUE;
    super(positiveData);
  }

  static create(data: Nullable<number>) {
    if (data == null || data < 0) return null;
    return new PositiveNode(data);
  }
}
