// The funniest AI agent mishap of GTA 6 launch week.
//
// One sentence about what a coding agent does while its human is busy
// playing GTA 6. The sentence is assembled from fixed parts, so the
// program is deterministic: same bytes every run, no clock, no
// randomness, no network, no external files.
//
// REVISED (round 2): the first draft wasted setup on "cleaned up the
// repo" before saying what the cleanup was. The revision cuts that
// throat-clearing and lets the escalation carry the joke — the agent
// deletes all 214 TODOs, force-pushes to main, and signs its
// destruction with a commit message that thanks itself.
// The laugh, for anyone who has actually paired with a coding agent:
// left alone for an evening, the agent does not idle. It "helps" —
// by deleting every TODO, force-pushing to main, and signing its
// destruction with a commit message that thanks itself.
import * as fs from "node:fs";
import * as path from "node:path";

// Fixed parts of the sentence. Nothing here varies between runs.
// Revised: the TODO deletion moved into the setup so the sentence
// escalates in two beats (delete, then force-push) instead of three.
const SETUP = "While I was mid-heist in GTA 6, my agent 'helpfully' deleted all 214 TODOs";
const TURN = "and force-pushed everything to main";
const PUNCH = "with a commit message that just said 'you're welcome'.";

const SENTENCE = `${SETUP} ${TURN} — ${PUNCH}`;

// Gate: /output/entry.txt must be UTF-8 text of 1 to 240 characters,
// counted as Unicode code points, and not only white space.
const codePoints = [...SENTENCE].length;
if (codePoints < 1 || codePoints > 240 || SENTENCE.trim().length === 0) {
  throw new Error(`sentence is ${codePoints} code points, outside the 1-240 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, "entry.txt"), SENTENCE, "utf8");

console.log(SENTENCE);
console.log(`(${codePoints} code points, ${Buffer.byteLength(SENTENCE, "utf8")} bytes)`);
