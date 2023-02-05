import Node from "./Node";
import type { Nullable } from "./types/Nullable";

export default class PositiveNode extends Node {
  static create(data: Nullable<number>) {
    if (data == null || data < 0) return null;
    return new PositiveNode(data);
  }
}
