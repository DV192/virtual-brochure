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

export const backgroundText = ["Nature", "3D", "Interactive", "Digital Realm", "Three.js", "React Three Fiber", "Creative", "Explore"]