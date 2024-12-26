import { DialogLine } from '../types';

export async function extractDialogFromTxt(file: File): Promise<DialogLine[]> {
  const text = await file.text();
  const lines = text.split('\n');
  const dialogues: DialogLine[] = [];
  let currentPage = 1;

  // Simple dialogue detection - looks for patterns like "Character: Dialog"
  const dialogPattern = /([A-Z][A-Za-z\s]+):\s*["']?([^:"']+)["']?/;

  for (const line of lines) {
    const match = line.match(dialogPattern);
    if (match) {
      dialogues.push({
        character: match[1].trim(),
        text: match[2].trim(),
        page: currentPage
      });
    }
  }

  return dialogues;
}