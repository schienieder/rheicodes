'use client';

import { X } from 'lucide-react';
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
  const { darkMode } = useTheme();

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const formData = new FormData(e.currentTarget);
      await onSend(formData);
      onClose();
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
            Have a project in mind or just want to say hello? Fill out the form below and I'll get back to you as soon as possible.
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
              <input
                type="file"
                id="file"
                name="file"
                multiple
                accept="image/*,.pdf,.doc,.docx,.xls,.xlsx"
                className={`mt-1 block w-full text-sm ${darkMode
                  ? 'text-gray-300 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-700 file:text-blue-100 hover:file:bg-blue-600'
                  : 'text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100'
                  }`}
              />
              <p className={`text-xs ${darkMode ? 'text-gray-400' : 'text-gray-500'
                } mt-1`}>Accepted file types: images, PDF, Word, Excel.</p>
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
