import { Layout } from "./classes/Layout";
import { Section } from "./index.d";

const sections: Section[] = [
  { width: 33, height: 50, content: "Left content" },
  { width: 33, height: 50, content: "center content" },
  { width: 33, height: 50, content: "right content" },
];

const layout = new Layout(sections);
layout.render();
