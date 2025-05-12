import React, { useState } from 'react';
import { Download, Copy, CheckCircle, Music, Video, Share2, Heart } from 'lucide-react';
import { TikTokVideo } from '../types';
import { copyToClipboard, formatCount } from '../utils/api';

interface ResultSectionProps {
  video: TikTokVideo;
}

const ResultSection: React.FC<ResultSectionProps> = ({ video }) => {
  const [copiedMap, setCopiedMap] = useState<Record<string, boolean>>({});
  const [liked, setLiked] = useState(false);
  
  const handleCopyLink = async (url: string, key: string) => {
    const success = await copyToClipboard(url);
    if (success) {
      setCopiedMap({ ...copiedMap, [key]: true });
      setTimeout(() => {
        setCopiedMap({ ...copiedMap, [key]: false });
      }, 2000);
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: video.title,
          text: 'Check out this TikTok video!',
          url: window.location.href
        });
      } catch (err) {
        console.error('Error sharing:', err);
      }
    }
  };
  
  return (
    <div className="w-full animate-fadeIn">
      <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
        <div className="p-4 border-b border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
            {video.title || 'TikTok Video'}
          </h3>
          
          {video.author && (
            <div className="flex items-center gap-2 mb-3">
              <img 
                src={video.author.avatar} 
                alt={video.author.nickname} 
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">@{video.author.unique_id}</p>
                <p className="text-sm text-gray-500">{video.author.nickname}</p>
              </div>
            </div>
          )}
          
          <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
            <button 
              onClick={() => setLiked(!liked)} 
              className={`flex items-center gap-1 transition-colors ${liked ? 'text-pink-500' : ''}`}
            >
              <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
              <span>{formatCount(video.stats?.digg_count || 0)}</span>
            </button>
            <span className="flex items-center gap-1">
              <Video size={16} />
              {formatCount(video.stats?.play_count || 0)}
            </span>
            <button 
              onClick={handleShare}
              className="flex items-center gap-1 hover:text-gray-800"
            >
              <Share2 size={16} />
              Share
            </button>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 relative bg-black">
            <div className="aspect-[9/16] w-full">
              <video 
                src={video.play}
                poster={video.cover}
                controls
                preload="metadata"
                className="w-full h-full object-contain max-h-[400px]"
              />
            </div>
          </div>
          
          <div className="md:w-1/2 p-4 bg-gray-50">
            <h4 className="text-lg font-semibold mb-3 text-gray-800">Download Options</h4>
            
            <div className="flex flex-col gap-3">
              <DownloadButton 
                url={video.play}
                label="Download without watermark"
                icon={<Video size={18} />}
                primary
                onCopy={(url) => handleCopyLink(url, 'nowm')}
                copied={copiedMap['nowm']}
              />
              
              <DownloadButton 
                url={video.wmplay || ''}
                label="Download with watermark"
                icon={<Video size={18} />}
                onCopy={(url) => handleCopyLink(url, 'wm')}
                copied={copiedMap['wm']}
              />
              
              <DownloadButton 
                url={video.music}
                label="Download audio only"
                icon={<Music size={18} />}
                onCopy={(url) => handleCopyLink(url, 'music')}
                copied={copiedMap['music']}
              />
            </div>
            
            {video.music_info && (
              <div className="mt-4 p-3 bg-white rounded-lg border border-gray-200">
                <h5 className="font-medium text-sm mb-2">Music Information</h5>
                <div className="flex items-center gap-3">
                  <img 
                    src={video.music_info.cover} 
                    alt={video.music_info.title} 
                    className="w-12 h-12 rounded object-cover"
                  />
                  <div>
                    <p className="font-medium text-sm">{video.music_info.title}</p>
                    <p className="text-xs text-gray-500">{video.music_info.author}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface DownloadButtonProps {
  url: string;
  label: string;
  icon: React.ReactNode;
  primary?: boolean;
  onCopy: (url: string) => void;
  copied: boolean;
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ 
  url, 
  label, 
  icon, 
  primary = false,
  onCopy,
  copied
}) => {
  if (!url) return null;
  
  return (
    <div className="flex items-center gap-2">
      <a
        href={url}
        download
        target="_blank"
        rel="noreferrer"
        className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all hover:scale-[1.02] ${
          primary 
            ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-600 hover:to-pink-700' 
            : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
        }`}
      >
        {icon}
        {label}
      </a>
      
      <button
        onClick={() => onCopy(url)}
        className={`p-2 rounded-lg border ${
          copied 
            ? 'bg-green-50 border-green-200 text-green-600' 
            : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50'
        }`}
        title={copied ? 'Copied!' : 'Copy link'}
      >
        {copied ? <CheckCircle size={18} /> : <Copy size={18} />}
      </button>
    </div>
  );
};

export default ResultSection;