import { bundle } from "@remotion/bundler";
import {
  renderMedia,
  renderStill,
  selectComposition,
} from "@remotion/renderer";
import { existsSync, mkdirSync, readdirSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(fileURLToPath(import.meta.url));
process.chdir(root);
const browserBase = path.join(
  homedir(),
  ".cache/puppeteer/chrome-headless-shell",
);
const browserExecutable = existsSync(browserBase)
  ? readdirSync(browserBase)
      .sort()
      .reverse()
      .map((v) =>
        path.join(
          browserBase,
          v,
          "chrome-headless-shell-win64/chrome-headless-shell.exe",
        ),
      )
      .find(existsSync)
  : undefined;
const serveUrl = await bundle({
  entryPoint: path.join(root, "src/index.ts"),
  publicDir: path.join(root, "public"),
  outDir: path.join(root, "build"),
});
const composition = await selectComposition({
  serveUrl,
  id: "KotaiHorizontal",
  browserExecutable,
});
mkdirSync("review", { recursive: true });
mkdirSync("renders", { recursive: true });
if (process.argv.includes("--review")) {
  const seconds = [
    1.8, 7, 13, 20, 28, 35.5, 43, 50, 55.7, 60.5, 67, 73.5, 78.7, 84, 91.5, 97,
    103, 112,
  ];
  for (let i = 0; i < seconds.length; i++) {
    await renderStill({
      serveUrl,
      composition,
      browserExecutable,
      output: `review/shot-${String(i + 1).padStart(2, "0")}.jpg`,
      frame: Math.round(seconds[i] * 30),
      scale: 0.5,
      imageFormat: "jpeg",
      logLevel: "error",
    });
    console.log(`Reviewed shot ${i + 1}/${seconds.length}`);
  }
  const cuts = [
    4.8, 10.5, 17.5, 24.8, 32.4, 40.6, 47.8, 53.8, 57.5, 64.4, 71.3, 76.5, 81.5,
    87.5, 94.5, 100.5, 106.5,
  ];
  for (let i = 0; i < cuts.length; i++) {
    for (const delta of [-0.1, 0.3]) {
      await renderStill({
        serveUrl,
        composition,
        browserExecutable,
        output: `review/cut-${String(i + 1).padStart(2, "0")}-${delta < 0 ? "a" : "b"}.jpg`,
        frame: Math.round((cuts[i] + delta) * 30),
        scale: 0.25,
        imageFormat: "jpeg",
        logLevel: "error",
      });
    }
  }
  writeFileSync(
    "review/render-settings.json",
    JSON.stringify(
      {
        duration: composition.durationInFrames / composition.fps,
        width: composition.width,
        height: composition.height,
        fps: composition.fps,
        seconds,
        cuts,
      },
      null,
      2,
    ),
  );
} else {
  let last = -1;
  await renderMedia({
    serveUrl,
    composition,
    browserExecutable,
    outputLocation: "renders/Kotai-Mejorando-juntos-1080p.mp4",
    codec: "h264",
    crf: 18,
    audioCodec: "aac",
    audioBitrate: "192k",
    pixelFormat: "yuv420p",
    concurrency: 4,
    x264Preset: "fast",
    logLevel: "error",
    onProgress: ({ progress }) => {
      const n = Math.floor((progress * 100) / 5) * 5;
      if (n !== last) {
        last = n;
        console.log(`Render ${n}%`);
      }
    },
  });
  await renderStill({
    serveUrl,
    composition,
    browserExecutable,
    output: "renders/portada.jpg",
    frame: 102,
    imageFormat: "jpeg",
    logLevel: "error",
  });
  console.log("MP4 and poster exported.");
}
