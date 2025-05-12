import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is TikDown free to use?',
    answer: 'Yes, TikDown is completely free to use. You can download TikTok videos without any cost or subscription.'
  },
  {
    question: 'Is it legal to download TikTok videos?',
    answer: 'Downloading TikTok videos for personal use is generally acceptable. However, you should respect copyright laws and get permission before using others\' content commercially.'
  },
  {
    question: 'Why download without watermark?',
    answer: 'Downloading without watermark provides a cleaner video for personal archives or when repurposing content with permission. However, always credit original creators when sharing.'
  },
  {
    question: 'How do I download a TikTok video?',
    answer: 'Simply copy the TikTok video link, paste it into TikDown\'s input field, and click download. You\'ll get options to download with or without watermark, or just the audio.'
  },
  {
    question: 'What video quality can I download?',
    answer: 'TikDown provides the highest available quality for each video, typically up to 1080p resolution when available from the source.'
  },
  {
    question: 'Can I download private TikTok videos?',
    answer: 'No, TikDown can only download publicly available TikTok videos. Private videos are not accessible.'
  }
];

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>FAQ - TikDown</title>
        <meta name="description" content="Frequently asked questions about TikDown TikTok video downloader" />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details 
                key={index}
                className="group bg-white rounded-lg shadow-md overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-6">
                  <h2 className="text-lg font-semibold text-gray-900">{faq.question}</h2>
                  <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;