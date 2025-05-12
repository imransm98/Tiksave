import React from 'react';
import { Helmet } from 'react-helmet-async';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>Terms of Service - TikDown</title>
        <meta name="description" content="Terms of Service for TikDown TikTok video downloader" />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
          
          <div className="prose prose-gray max-w-none">
            <p className="lead">Last updated: {new Date().toLocaleDateString()}</p>
            
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing and using TikDown, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
            
            <h2>2. Service Description</h2>
            <p>
              TikDown provides a service that allows users to download TikTok videos for personal use. The service is provided "as is" and may be modified or discontinued at any time.
            </p>
            
            <h2>3. User Responsibilities</h2>
            <p>
              Users of TikDown agree to:
            </p>
            <ul>
              <li>Use the service only for lawful purposes</li>
              <li>Not attempt to circumvent any service limitations</li>
              <li>Not use automated systems to access the service</li>
              <li>Respect intellectual property rights</li>
            </ul>
            
            <h2>4. Intellectual Property</h2>
            <p>
              Users are responsible for ensuring they have the right to download and use any content. TikDown does not claim ownership of downloaded content.
            </p>
            
            <h2>5. Service Limitations</h2>
            <p>
              TikDown reserves the right to:
            </p>
            <ul>
              <li>Limit download frequency</li>
              <li>Modify or discontinue features</li>
              <li>Block access for abuse</li>
            </ul>
            
            <h2>6. Disclaimer of Warranties</h2>
            <p>
              The service is provided "as is" without warranties of any kind, either express or implied.
            </p>
            
            <h2>7. Limitation of Liability</h2>
            <p>
              TikDown shall not be liable for any indirect, incidental, special, or consequential damages.
            </p>
            
            <h2>8. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the service constitutes acceptance of modified terms.
            </p>
            
            <h2>9. Contact</h2>
            <p>
              For questions about these terms, please contact{' '}
              <a href="mailto:legal@tikdown.com">legal@tikdown.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;