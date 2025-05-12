import React, { useState } from 'react';
import { Clipboard, Download, X } from 'lucide-react';
import { isTikTokUrl } from '../utils/api';

interface InputSectionProps {
  onSubmit: (url: string) => void;
  isLoading: boolean;
}

const InputSection: React.FC<InputSectionProps> = ({ onSubmit, isLoading }) => {
  const [url, setUrl] = useState('');
  const [isValidUrl, setIsValidUrl] = useState(true);
  
  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUrl = e.target.value;
    setUrl(newUrl);
    setIsValidUrl(true);
  };
  
  const handleClear = () => {
    setUrl('');
    setIsValidUrl(true);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!url.trim()) {
      setIsValidUrl(false);
      return;
    }
    
    if (!isTikTokUrl(url)) {
      setIsValidUrl(false);
      return;
    }
    
    onSubmit(url.trim());
  };
  
  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setUrl(text);
      setIsValidUrl(true);
    } catch (err) {
      console.error('Failed to paste from clipboard', err);
    }
  };
  
  return (
    <div className="w-full mb-6">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="relative flex items-center">
          <input
            type="text"
            value={url}
            onChange={handleUrlChange}
            placeholder="Paste TikTok link here..."
            className={`w-full px-4 py-3 rounded-lg border-2 ${
              isValidUrl ? 'border-gray-200 focus:border-pink-500' : 'border-red-500'
            } shadow-sm focus:outline-none transition-colors text-gray-800 bg-white pr-10`}
            disabled={isLoading}
          />
          
          {url && (
            <button
              type="button"
              onClick={handleClear}
              className="absolute right-[4.5rem] text-gray-400 hover:text-gray-600"
              aria-label="Clear input"
            >
              <X size={18} />
            </button>
          )}
          
          <button
            type="button"
            onClick={handlePaste}
            className="absolute right-14 flex items-center justify-center bg-teal-400 hover:bg-teal-500 text-white p-1.5 rounded"
            title="Paste from clipboard"
            aria-label="Paste from clipboard"
          >
            <Clipboard size={18} />
          </button>
        </div>
        
        <div className="mt-4 flex justify-center">
          <button
            type="submit"
            disabled={isLoading || !url.trim()}
            className={`px-6 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 transition-all transform hover:scale-105 disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2 shadow-md`}
          >
            <Download size={18} />
            Download
          </button>
        </div>
        
        {!isValidUrl && (
          <p className="mt-2 text-red-500 text-sm">
            Please enter a valid TikTok URL
          </p>
        )}
      </form>
    </div>
  );
};

export default InputSection;