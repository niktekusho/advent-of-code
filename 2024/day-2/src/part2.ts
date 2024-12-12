import { parseInput, readInput } from "./shared";

function isReportSafe(report: number[]) {
  // - The levels are either all increasing or all decreasing.
  // - Any two adjacent levels differ by at least one and at most three.
  // - If removing a single level from an unsafe report would make it safe, the report instead counts as safe.

  let isIncreasing: boolean | null = null;
  let isDecreasing: boolean | null = null;
  let levelsDelta = 0;
  let reportSafe = true;
  let dampenerTriggered = false;
  let lastValidLevel: number;

  // Rewrite the mess below into the following for loop

  // for (let i = 0; i < report.length; i++) {
  //   const level = report[i];
  // }

  // while (reportSafe && i < report.length - 1) {
  //   const currentLevel = report[i];
  //   const nextLevel = report[i + 1];
  //   const isCurrentlyIncreasing = currentLevel < nextLevel;
  //   const isCurrentlyDecreasing = currentLevel > nextLevel;

  //   if (isIncreasing === null) {
  //     isIncreasing = isCurrentlyIncreasing;
  //   }
  //   if (isDecreasing === null) {
  //     isDecreasing = isCurrentlyDecreasing;
  //   }

  //   levelsDelta = Math.abs(lastValidLevel - nextLevel);
  //   reportSafe =
  //     reportSafe &&
  //     (isCurrentlyIncreasing === isIncreasing ||
  //       isCurrentlyDecreasing === isDecreasing) &&
  //     levelsDelta >= 1 &&
  //     levelsDelta <= 3;

  //   // console.log(
  //   //   `reportSafe breakdown: reportSafe ${reportSafe}, lastValidLevel ${lastValidLevel}, nextLevel ${nextLevel}, isIncreasing ${isIncreasing}, isDecreasing ${isDecreasing}, levelsDelta ${levelsDelta}, dampenerTriggered ${dampenerTriggered}`,
  //   // );

  //   if (!reportSafe && !dampenerTriggered) {
  //     // console.log(
  //     //   `snapshot of the dampener: lastValidLevel: ${lastValidLevel}, i: ${i}, levelsDelta: ${levelsDelta}`,
  //     // );
  //     i += 2;
  //     dampenerTriggered = true;
  //     reportSafe = true;
  //   } else {
  //     i++;
  //     lastValidLevel = report[i];
  //   }

  //   console.log(
  //     `reportSafe ${reportSafe}, iteration ${i}, lastValidLevel ${lastValidLevel}, nextLevel ${nextLevel}, isIncreasing ${isIncreasing}, isDecreasing ${isDecreasing}, levelsDelta ${levelsDelta}, dampenerTriggered ${dampenerTriggered}`,
  //   );
  // }

  if (reportSafe && dampenerTriggered) {
    console.log("this report was safe but triggered the dampener", report);
  }

  return reportSafe;
}

async function main() {
  console.time("main");
  const lines = await readInput();

  console.log("lines count", lines.length);

  const reports = parseInput(lines);

  console.timeEnd("parse input");

  console.time("solve puzzle");

  // console.log("report safe:", isReportSafe([1, 3, 6, 7, 9]));
  // console.log("report safe:", isReportSafe([85, 84, 82, 80, 78, 76, 76, 70]));
  console.log("report safe:", isReportSafe([85, 84, 82, 80, 78, 76, 76, 70]));

  // const safeReports = reports.filter(isReportSafe);

  // console.log("safe reports count (with dampener)", safeReports.length);

  console.timeEnd("solve puzzle");
  console.timeEnd("main");
}

main().catch(console.error);
