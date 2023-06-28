import { Section } from "../index.d";
import { print_content } from "../utils";

export class Layout {
  sections: Section[];

  constructor(sections: Section[]) {
    this.sections = sections;
  }

  pre_render(): void {
    console.clear();
  }

  render(): void {
    this.pre_render();
    const totalWidth = process.stdout.columns || 80;
    // const totalHeight = process.stdout.rows || 24;
    let lastWidth = 0;

    this.sections.forEach((section) => {
      const width = Math.round((section.width * totalWidth) / 100);
      process.stdout.cursorTo(lastWidth);
      process.stdout.write(print_content(section.content, width));
      lastWidth += width;
    });
  }
}
