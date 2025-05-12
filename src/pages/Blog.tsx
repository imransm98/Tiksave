import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const blogPosts = [
  {
    id: 1,
    title: 'How to Download TikTok Videos Safely',
    excerpt: 'Learn the best practices for downloading TikTok videos while respecting copyright and privacy.',
    date: '2024-03-15',
    slug: 'how-to-download-tiktok-videos-safely',
    image: 'https://images.pexels.com/photos/3944454/pexels-photo-3944454.jpeg'
  },
  {
    id: 2,
    title: 'Understanding TikTok Video Quality and Formats',
    excerpt: 'A comprehensive guide to TikTok video formats, resolutions, and how to get the best quality.',
    date: '2024-03-10',
    slug: 'understanding-tiktok-video-quality',
    image: 'https://images.pexels.com/photos/2773498/pexels-photo-2773498.jpeg'
  },
  {
    id: 3,
    title: 'Top 5 Ways to Use Downloaded TikTok Content',
    excerpt: 'Discover creative and legal ways to repurpose your downloaded TikTok videos.',
    date: '2024-03-05',
    slug: 'ways-to-use-tiktok-content',
    image: 'https://images.pexels.com/photos/3759098/pexels-photo-3759098.jpeg'
  }
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>Blog - TikDown</title>
        <meta name="description" content="Learn about TikTok video downloading, tips, and best practices" />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Blog</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map(post => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h2 className="text-xl font-bold text-gray-900 mt-2 mb-3">
                  <Link to={`/blog/${post.slug}`} className="hover:text-pink-500">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Link 
                  to={`/blog/${post.slug}`}
                  className="text-pink-500 font-medium hover:text-pink-600"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;