export const print_content = (content: string, times: number): string => {
  times -= content.length;
  return `${content}${" ".repeat(times + 3)}`;
};
