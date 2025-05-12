import React from 'react';
import { Helmet } from 'react-helmet-async';

const Legal: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>Legal Advisory - TikDown</title>
        <meta name="description" content="Legal information and disclaimer for TikDown TikTok video downloader" />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">Legal Advisory</h1>
          
          <div className="prose prose-gray max-w-none">
            <h2>Disclaimer</h2>
            <p>
              TikDown is a third-party service and is not affiliated with, endorsed by, or connected to TikTok 
              (ByteDance Ltd.) in any way.
            </p>
            
            <h2>Copyright Notice</h2>
            <p>
              Users are responsible for ensuring they have the right to download and use content. TikDown does 
              not claim ownership of any downloaded content.
            </p>
            
            <h2>Fair Use</h2>
            <p>
              Downloaded content should be used in accordance with fair use principles and applicable copyright laws.
            </p>
            
            <h2>Terms of Use</h2>
            <p>
              By using TikDown, you agree to:
            </p>
            <ul>
              <li>Not use the service for illegal purposes</li>
              <li>Respect intellectual property rights</li>
              <li>Not abuse or overload the service</li>
              <li>Comply with TikTok's terms of service</li>
            </ul>
            
            <h2>Limitation of Liability</h2>
            <p>
              TikDown provides the service "as is" without any warranties. We are not responsible for:
            </p>
            <ul>
              <li>Content downloaded through our service</li>
              <li>How downloaded content is used</li>
              <li>Service interruptions or failures</li>
            </ul>
            
            <h2>Changes to Service</h2>
            <p>
              We reserve the right to modify or discontinue the service at any time without notice.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;