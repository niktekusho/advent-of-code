import { parseInput, readInput } from "./shared";

function isReportSafe(report: number[]) {
  // - The levels are either all increasing or all decreasing.
  // - Any two adjacent levels differ by at least one and at most three.

  const isIncreasingInitial = report[0] < report[1];
  const isDecreasingInitial = report[0] > report[1];
  let levelsDelta = Math.abs(report[0] - report[1]);
  let reportSafe =
    (isIncreasingInitial || isDecreasingInitial) &&
    levelsDelta >= 1 &&
    levelsDelta <= 3;

  let i = 1;

  while (reportSafe && i < report.length - 1) {
    const currentLevel = report[i];
    const nextLevel = report[i + 1];
    const isIncreasing = currentLevel < nextLevel;
    const isDecreasing = currentLevel > nextLevel;
    i++;
    levelsDelta = Math.abs(currentLevel - nextLevel);
    reportSafe =
      reportSafe &&
      (isIncreasing === isIncreasingInitial ||
        isDecreasing === isDecreasingInitial) &&
      levelsDelta >= 1 &&
      levelsDelta <= 3;

    // console.log(
    //   `reportSafe ${reportSafe}, currentLevel ${currentLevel}, nextLevel ${nextLevel}, isIncreasing ${isIncreasing}, isDecreasing ${isDecreasing}, levelsDelta ${levelsDelta}`,
    // );
  }

  console.log("isReportSafe", report, reportSafe);

  return reportSafe;
}

async function main() {
  console.time("main");
  const lines = await readInput();

  console.log("lines count", lines.length);

  const reports = parseInput(lines);

  console.timeEnd("parse input");

  console.time("solve puzzle");

  const safeReports = reports.filter(isReportSafe);

  console.log("safe reports count", safeReports.length);

  console.timeEnd("solve puzzle");
  console.timeEnd("main");
}

main().catch(console.error);
