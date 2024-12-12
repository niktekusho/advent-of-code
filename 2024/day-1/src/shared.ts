import { readFile } from "fs/promises";
import { EOL } from "os";
import { join } from "path";

export function parseInput(lines: string[]) {
  const leftList: number[] = [];
  const rightList: number[] = [];
  for (const line of lines) {
    const tuple = line.split("   ").map((value) => parseInt(value));

    leftList.push(tuple[0]);
    rightList.push(tuple[1]);
  }
  return {
    leftList,
    rightList,
  };
}

export async function readInput() {
  const inputPath = join(import.meta.dirname, "input.txt");

  console.time("read input");
  const input = await readFile(inputPath, "utf8");

  console.timeEnd("read input");

  console.time("parse input");
  const lines = input.split(EOL).filter((line) => line.trim() !== "");
  return lines;
}
