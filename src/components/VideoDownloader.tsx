import React from 'react';
import { AlertOctagon, ArrowLeft } from 'lucide-react';
import { useTikTokDownloader } from '../hooks/useTikTokDownloader';
import InputSection from './InputSection';
import ResultSection from './ResultSection';
import LoadingSpinner from './LoadingSpinner';
import { DownloadStatus } from '../types';

const VideoDownloader: React.FC = () => {
  const { 
    fetchVideo, 
    reset, 
    status, 
    video, 
    error, 
    isLoading 
  } = useTikTokDownloader();
  
  const handleSubmit = (url: string) => {
    fetchVideo(url);
  };
  
  const handleTryAgain = () => {
    reset();
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      {status !== DownloadStatus.SUCCESS && (
        <InputSection onSubmit={handleSubmit} isLoading={isLoading} />
      )}
      
      {isLoading && (
        <div className="text-center py-8">
          <LoadingSpinner size="lg" />
          <p className="text-gray-600 mt-2">Fetching video information...</p>
        </div>
      )}
      
      {status === DownloadStatus.ERROR && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 my-4 flex items-start gap-3">
          <div className="text-red-500 mt-0.5">
            <AlertOctagon size={20} />
          </div>
          <div>
            <h3 className="font-medium text-red-800">Error</h3>
            <p className="text-red-700 text-sm">{error || 'Failed to fetch video. Please check the URL and try again.'}</p>
            <button 
              onClick={handleTryAgain}
              className="mt-2 text-sm font-medium text-red-600 hover:text-red-800"
            >
              Try again
            </button>
          </div>
        </div>
      )}
      
      {status === DownloadStatus.SUCCESS && video && (
        <>
          <div className="mb-4">
            <button 
              onClick={handleTryAgain}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft size={18} />
              <span>Try another video</span>
            </button>
          </div>
          <ResultSection video={video} />
        </>
      )}
    </div>
  );
};

export default VideoDownloader;