import React from 'react';
import { FileUpload } from '../components/FileUpload';
import { DialogTable } from '../components/DialogTable';
import { BackButton } from '../components/BackButton';
import { processFile } from '../utils/fileProcessing';
import { ExtractedDialog } from '../types';
import { FileText } from 'lucide-react';

export function DialogExtractor() {
  const [loading, setLoading] = React.useState(false);
  const [extractedData, setExtractedData] = React.useState<ExtractedDialog | null>(null);

  const handleFileSelect = async (file: File) => {
    try {
      setLoading(true);
      const dialogues = await processFile(file);
      setExtractedData({
        dialogues,
        fileName: file.name
      });
    } catch (error) {
      console.error('Error processing file:', error);
      alert('Error processing file. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <BackButton />
        
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <FileText className="w-10 h-10 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Dialog Extractor</h1>
          </div>
          <p className="text-gray-600">
            Upload a PDF or TXT file to extract character dialogues and export them to CSV
          </p>
        </div>

        <div className="flex flex-col items-center gap-8">
          <FileUpload onFileSelect={handleFileSelect} />

          {loading && (
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <span className="ml-2">Processing file...</span>
            </div>
          )}

          {extractedData && (
            <DialogTable
              dialogues={extractedData.dialogues}
              fileName={extractedData.fileName}
            />
          )}
        </div>
      </div>
    </div>
  );
}