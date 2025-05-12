import React from 'react';
import { Helmet } from 'react-helmet-async';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>Privacy Policy - TikDown</title>
        <meta name="description" content="Privacy policy for TikDown TikTok video downloader" />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2>1. Information We Collect</h2>
            <p>
              When you use TikDown, we collect minimal information necessary to provide our service:
            </p>
            <ul>
              <li>TikTok video URLs you submit</li>
              <li>Basic usage analytics</li>
              <li>Technical information (browser type, device info)</li>
            </ul>
            
            <h2>2. How We Use Your Information</h2>
            <p>
              We use the collected information solely to:
            </p>
            <ul>
              <li>Process your video download requests</li>
              <li>Improve our service</li>
              <li>Maintain service functionality</li>
            </ul>
            
            <h2>3. Data Storage</h2>
            <p>
              We do not store any video content or personal information. All processing is done in real-time.
            </p>
            
            <h2>4. Third-Party Services</h2>
            <p>
              We use the following third-party services:
            </p>
            <ul>
              <li>TikTok API for video information</li>
              <li>Analytics services for usage statistics</li>
            </ul>
            
            <h2>5. Your Rights</h2>
            <p>
              You have the right to:
            </p>
            <ul>
              <li>Access your data</li>
              <li>Request data deletion</li>
              <li>Opt-out of analytics</li>
            </ul>
            
            <h2>6. Contact Us</h2>
            <p>
              For privacy-related questions, please contact us at{' '}
              <a href="mailto:privacy@tikdown.com">privacy@tikdown.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;