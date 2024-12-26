export interface DialogLine {
  character: string;
  text: string;
  page: number;
}

export interface ExtractedDialog {
  dialogues: DialogLine[];
  fileName: string;
}