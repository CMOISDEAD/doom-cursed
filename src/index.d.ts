export interface Section {
  width: number;
  height: number;
  content: string;
}

export interface TerminalLayout {
  sections: Section[];
  render(): void;
}
