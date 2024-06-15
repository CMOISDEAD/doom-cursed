export const print_content = (
  content: string,
  width: number,
  height: number
): string => {
  width -= content.length;
  let section = "";
  for (let i = 0; i < height; i++) {
    section += content.slice(i * width, (i + 1) * width);
    // if (i !== height - 1) section += "\n";
  }
  return section;
};
