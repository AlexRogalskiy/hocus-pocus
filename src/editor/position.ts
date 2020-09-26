import { Position as ASTPosition } from "../ast";

export { Position };

class Position {
  readonly line: number;
  readonly character: number;

  constructor(line: number, character: number) {
    this.line = line;
    this.character = character;
  }

  static fromAST(astPosition: ASTPosition): Position {
    return new Position(astPosition.line - 1, astPosition.column);
  }

  isEqualTo(position: Position): boolean {
    return (
      this.isSameLineThan(position) && this.character === position.character
    );
  }

  isSameLineThan(position: Position): boolean {
    return this.line === position.line;
  }

  isBefore(position: Position): boolean {
    return (
      this.isEqualTo(position) ||
      this.line < position.line ||
      (this.isSameLineThan(position) && this.character < position.character)
    );
  }

  isAfter(position: Position): boolean {
    return this.isEqualTo(position) || !this.isBefore(position);
  }

  putAtStartOfLine(): Position {
    return new Position(this.line, 0);
  }

  putAtEndOfLine(): Position {
    // We don't know the exact character of end of line.
    // Use a very large number for editor to cap at end of line.
    return new Position(this.line, 999999999);
  }

  putAtPreviousLine(): Position {
    return new Position(this.line - 1, this.character);
  }

  putAtNextLine(): Position {
    return new Position(this.line + 1, this.character);
  }

  addLines(lines: number): Position {
    return new Position(this.line + lines, this.character);
  }

  putAtSameCharacter(position: Position): Position {
    return new Position(this.line, position.character);
  }
}
