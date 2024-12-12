import { parseInput, readInput } from "./shared";

async function main() {
  console.time("main");
  const lines = await readInput();

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
