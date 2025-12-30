'use client';

import { X, Trash2, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSend: (formData: FormData) => Promise<void>;
}

const ContactModal = ({ isOpen, onClose, onSend }: ContactModalProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const { darkMode } = useTheme();

  if (!isOpen) {
    return null;
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      // Convert FileList to array and append to existing files
      const newFiles = Array.from(e.target.files);
      setSelectedFiles(prev => [...prev, ...newFiles]);
    }
  };

  const removeFile = (index: number) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index));
  };

  const clearAllFiles = () => {
    setSelectedFiles([]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);

      // Add all selected files to the form data
      selectedFiles.forEach(file => {
        formData.append('file', file);
      });

      await onSend(formData);
      onClose();
      // Clear selected files after successful submission
      setSelectedFiles([]);
    } catch (err) {
      console.error('Error sending email:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-lg"
      onClick={onClose}
    >
      <div
        className={`relative w-full max-w-lg rounded-lg p-8 shadow-lg ${darkMode
          ? 'bg-gray-800 text-white'
          : 'bg-white text-gray-900'
          }`}
        onClick={(e) => e.stopPropagation()} // Prevent click from bubbling up to backdrop
      >
        <button
          onClick={onClose}
          className={`absolute top-4 right-4 ${darkMode
            ? 'text-gray-300 hover:text-white'
            : 'text-gray-500 hover:text-gray-800'
            }`}
          disabled={isSubmitting}
        >
          <X className="h-6 w-6" />
        </button>

        <div className="flex flex-col space-y-4">
          <h2 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'
            }`}>Get in Touch</h2>
          <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
            Have a project in mind or just want to say hello? Fill out the form below and I&#39;ll get back to you as soon as possible.
          </p>

          <form className="flex flex-col space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="subject"
                className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                defaultValue="I am interested working with you!"
                className={`mt-1 px-3 py-2 block w-full rounded-md border ${darkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                  : 'bg-white border-gray-300 text-gray-900 focus:border-blue-500'
                  }`}
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className={`mt-1 px-3 py-2 block w-full rounded-md border ${darkMode
                  ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500'
                  : 'bg-white border-gray-300 text-gray-900'
                  }`}
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="file"
                className={`block text-sm font-medium ${darkMode ? 'text-gray-200' : 'text-gray-700'
                  }`}
              >
                Attachments (Optional)
              </label>
              <div className="mt-1">
                <input
                  type="file"
                  id="file"
                  name="file"
                  multiple
                  accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
                  onChange={handleFileChange}
                  className={`block w-full text-sm ${darkMode
                    ? 'text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-700 file:text-blue-100 hover:file:bg-blue-600'
                    : 'text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'
                    }`}
                />
                {selectedFiles.length > 0 && (
                  <div className="mt-2">
                    <div className="flex justify-between items-center mb-1">
                      <p className={`text-sm font-medium ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                        Selected files ({selectedFiles.length}):
                      </p>
                      <button
                        type="button"
                        onClick={clearAllFiles}
                        className={`text-xs ${darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-800'}`}
                      >
                        Clear all
                      </button>
                    </div>
                    <ul className="mt-1 space-y-1 max-h-40 overflow-y-auto">
                      {selectedFiles.map((file, index) => (
                        <li
                          key={index}
                          className={`flex justify-between items-center text-sm truncate ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}
                        >
                          <div className="flex items-center truncate">
                            <Upload className="h-3 w-3 mr-2 flex-shrink-0" />
                            <span className="truncate" title={file.name}>
                              {file.name} ({(file.size / 1024).toFixed(1)} KB)
                            </span>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeFile(index)}
                            className={`ml-2 ${darkMode ? 'text-red-400 hover:text-red-300' : 'text-red-600 hover:text-red-800'}`}
                            title="Remove file"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'
                  } mt-1`}>Accepted file types: images, PDF, Word, Excel.</p>
              </div>
            </div>

            {error && (
              <div className={`text-sm py-2 ${darkMode ? 'text-red-400' : 'text-red-500'
                }`}>
                {error}
              </div>
            )}

            <div className="flex justify-end space-x-4 pt-2">
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                disabled={isSubmitting}
                className={darkMode ? 'border-gray-600' : ''}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
