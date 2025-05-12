export interface TikTokVideo {
  id: string;
  title: string;
  cover: string; // thumbnail URL
  originCover: string; // original cover URL
  play: string; // no watermark video URL
  wmplay: string; // watermarked video URL
  music: string; // music URL
  music_info?: {
    id: string;
    title: string;
    author: string;
    cover: string;
  };
  author?: {
    id: string;
    unique_id: string;
    nickname: string;
    avatar: string;
  };
  stats?: {
    digg_count: number;
    comment_count: number;
    play_count: number;
    share_count: number;
  };
}

export interface TikTokApiResponse {
  code: number;
  msg: string;
  data: TikTokVideo;
  processed_time?: number;
}

export enum DownloadStatus {
  IDLE = 'idle',
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}