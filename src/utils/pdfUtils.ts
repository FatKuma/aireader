import * as pdfjsLib from 'pdfjs-dist';
import { DialogLine } from '../types';

// Initialize PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

export async function extractDialogFromPdf(file: File): Promise<DialogLine[]> {
  const arrayBuffer = await file.arrayBuffer();
  const pdf = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;
  const dialogues: DialogLine[] = [];

  for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
    const page = await pdf.getPage(pageNum);
    const textContent = await page.getTextContent();
    const text = textContent.items.map((item: any) => item.str).join(' ');

    // Simple dialogue detection - looks for patterns like "Character: Dialog"
    const dialogPattern = /([A-Z][A-Za-z\s]+):\s*["']?([^:"']+)["']?/g;
    let match;

    while ((match = dialogPattern.exec(text)) !== null) {
      dialogues.push({
        character: match[1].trim(),
        text: match[2].trim(),
        page: pageNum
      });
    }
  }

  return dialogues;
}

export function generateCSV(dialogues: DialogLine[]): string {
  const headers = ['Character', 'Dialog', 'Page'];
  const rows = dialogues.map(d => [
    `"${d.character}"`,
    `"${d.text}"`,
    d.page
  ]);
  
  return [
    headers.join(','),
    ...rows.map(row => row.join(','))
  ].join('\n');
}

export function downloadCSV(csv: string, filename: string): void {
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const link = document.createElement('a');
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  link.click();
  URL.revokeObjectURL(link.href);
}