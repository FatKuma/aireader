import React from 'react';
import { Download } from 'lucide-react';
import { DialogLine } from '../types';
import { generateCSV, downloadCSV } from '../utils/pdfUtils';

interface DialogTableProps {
  dialogues: DialogLine[];
  fileName: string;
}

export function DialogTable({ dialogues, fileName }: DialogTableProps) {
  const handleDownload = () => {
    const csv = generateCSV(dialogues);
    downloadCSV(csv, `${fileName.replace('.pdf', '')}_dialogues.csv`);
  };

  return (
    <div className="w-full max-w-4xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Extracted Dialogues</h2>
        <button
          onClick={handleDownload}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Download className="w-4 h-4" />
          Download CSV
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Character</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dialog</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Page</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {dialogues.map((dialog, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {dialog.character}
                </td>
                <td className="px-6 py-4 text-sm text-gray-500">
                  {dialog.text}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {dialog.page}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}