import { useState, useCallback } from 'react';
import { TikTokVideo, DownloadStatus } from '../types';
import { fetchTikTokVideo } from '../utils/api';

export const useTikTokDownloader = () => {
  const [status, setStatus] = useState<DownloadStatus>(DownloadStatus.IDLE);
  const [video, setVideo] = useState<TikTokVideo | null>(null);
  const [error, setError] = useState<string | null>(null);
  
  const fetchVideo = useCallback(async (url: string) => {
    setStatus(DownloadStatus.LOADING);
    setError(null);
    
    try {
      const response = await fetchTikTokVideo(url);
      setVideo(response.data);
      setStatus(DownloadStatus.SUCCESS);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch video');
      setStatus(DownloadStatus.ERROR);
    }
  }, []);
  
  const reset = useCallback(() => {
    setStatus(DownloadStatus.IDLE);
    setVideo(null);
    setError(null);
  }, []);
  
  return {
    fetchVideo,
    reset,
    status,
    video,
    error,
    isLoading: status === DownloadStatus.LOADING,
    isSuccess: status === DownloadStatus.SUCCESS,
    isError: status === DownloadStatus.ERROR
  };
};