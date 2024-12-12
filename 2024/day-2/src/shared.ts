import { readFile } from "fs/promises";
import { EOL } from "os";
import { join } from "path";

export function parseInput(lines: string[]) {
  const reports: number[][] = [];
  for (const reportLine of lines) {
    const reportTuple = reportLine.split(" ").map((value) => parseInt(value));
    reports.push(reportTuple);
  }
  return reports;
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
