import { readFile } from "node:fs/promises";
import { EOL } from "node:os";
import { join } from "node:path";

function parseInput(lines: string[]) {
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

async function main() {
  console.time("main");
  const inputPath = join(import.meta.dirname, "./input.txt");

  console.time("read input");
  const input = await readFile(inputPath, "utf8");

  console.timeEnd("read input");

  console.time("parse input");
  const lines = input.split(EOL).filter((line) => line.trim() !== "");

  console.log("lines count", lines.length);

  const { leftList, rightList } = parseInput(lines);

  console.timeEnd("parse input");

  console.time("solve puzzle");

  const sortedLeftList = leftList.sort((a, b) => a - b);
  const sortedRightList = rightList.sort((a, b) => a - b);

  //   console.log("sorted left list", sortedLeftList);
  const distances = Array(sortedLeftList.length);
  for (let i = 0; i < sortedLeftList.length; i++) {
    // console.log(`left[${i}]=${sortedLeftList[i]} right[${i}]=${sortedRightList[i]}`);

    distances[i] = Math.abs(sortedRightList[i] - sortedLeftList[i]);

    // console.log(`distances[${i}]=${distances[i]}`);
  }

  const totalDistance = distances.reduce((acc, curr) => acc + curr, 0);
  console.timeEnd("solve puzzle");
  console.log("total distance", totalDistance);
  console.timeEnd("main");
}

main().catch(console.error);
