import { extractDialogFromPdf } from './pdfUtils';
import { extractDialogFromTxt } from './txtUtils';
import { DialogLine } from '../types';

export async function processFile(file: File): Promise<DialogLine[]> {
  switch (file.type) {
    case 'application/pdf':
      return extractDialogFromPdf(file);
    case 'text/plain':
      return extractDialogFromTxt(file);
    default:
      throw new Error('Unsupported file type');
  }
}