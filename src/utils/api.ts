import { TikTokApiResponse } from '../types';

/**
 * Fetches TikTok video information from the API
 */
export const fetchTikTokVideo = async (url: string): Promise<TikTokApiResponse> => {
  const response = await fetch(`https://tikwm.com/api/?url=${encodeURIComponent(url)}`);
  const data = await response.json();
  
  if (data.code !== 0) {
    throw new Error(data.msg || 'Failed to fetch video');
  }
  
  return data;
};

/**
 * Helper to copy text to clipboard
 */
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (err) {
    console.error('Failed to copy:', err);
    return false;
  }
};

/**
 * Validates if the URL is likely a TikTok URL
 */
export const isTikTokUrl = (url: string): boolean => {
  return url.includes('tiktok.com') || 
         url.includes('douyin.com') || 
         url.includes('vm.tiktok.com') ||
         url.includes('vt.tiktok.com');
};

/**
 * Formats a number for display (e.g., 1000 -> 1K)
 */
export const formatCount = (count: number): string => {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  } else if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
};