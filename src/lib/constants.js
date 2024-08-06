import { atom } from "jotai";

const pictures = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'];

export const pageAtom = atom(0);

export const pages = [
  { front: "front", back: pictures[0], },
];

for (let i = 1; i < pictures.length - 1; i += 2) {
  pages.push({
    front: pictures[i % pictures.length],
    back: pictures[(i + 1) % pictures.length],
  });
}

pages.push({
  front: pictures[pictures.length - 1],
  back: "back",
});

export const backgroundText = ["Nature", "3D", "Interactive", "Digital Realm", "Three.js", "React Three Fiber", "Creative", "Explore"];

export const PAGE_WIDTH = 1.28;
export const PAGE_HEIGHT = 1.71; // 4:3 aspect ratio
export const PAGE_DEPTH = 0.003;
export const PAGE_SEGMENTS = 30;
export const SEGMENT_WIDTH = PAGE_WIDTH / PAGE_SEGMENTS;

export const easingFactor = 0.5; // Controls the speed of the easing
export const easingFactorFold = 0.3; // Controls the speed of the easing
export const insideCurveStrength = 0.18; // Controls the strength of the curve
export const outsideCurveStrength = 0.05; // Controls the strength of the curve
export const turningCurveStrength = 0.09; // Controls the strength of the curve
