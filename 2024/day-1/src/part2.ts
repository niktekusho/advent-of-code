import { parseInput, readInput } from "./shared";

async function main() {
  console.time("main");
  const lines = await readInput();

  console.log("lines count", lines.length);

  const { leftList, rightList } = parseInput(lines);

  console.timeEnd("parse input");

  console.time("solve puzzle");

  // count the number of occurrences of each number in the right list
  const rightListCounts = rightList.reduce(
    (acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    },
    {} as Record<number, number>,
  );

  let similarityScore = 0;
  for (const left of leftList) {
    const rightCount = rightListCounts[left] || 0;
    similarityScore += rightCount * left;
  }

  console.timeEnd("solve puzzle");
  console.log("similarity score", similarityScore);
  console.timeEnd("main");
}

main().catch(console.error);
