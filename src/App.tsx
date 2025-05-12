import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { DownloadCloud } from 'lucide-react';
import { Link } from 'react-router-dom';
import VideoDownloader from './components/VideoDownloader';
import Footer from './components/Footer';
import Privacy from './pages/Privacy';
import Legal from './pages/Legal';
import Terms from './pages/Terms';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
          <header className="bg-gradient-to-r from-[#FE2C55] to-[#FF0050] shadow-md">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2">
                  <div className="text-white p-1.5 rounded-lg bg-black/10">
                    <DownloadCloud size={24} />
                  </div>
                  <h1 className="text-white text-2xl font-bold">TikDown</h1>
                </Link>
                
                <div className="flex items-center gap-6">
                  <nav className="hidden md:flex items-center gap-4 text-white/90">
                    <Link to="/legal" className="hover:text-white transition-colors">Legal</Link>
                    <Link to="/terms" className="hover:text-white transition-colors">Terms</Link>
                    <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
                    <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
                  </nav>
                  <div className="text-white text-sm">Download TikTok videos without watermark</div>
                </div>
              </div>
            </div>
          </header>
          
          <Routes>
            <Route path="/" element={
              <main className="container mx-auto px-4 py-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold text-gray-800 mb-3">
                    TikTok Video Downloader
                  </h2>
                  <p className="text-gray-600 max-w-xl mx-auto">
                    Download TikTok videos without watermark in HD quality. 
                    Just paste the TikTok video link and click download!
                  </p>
                </div>
                
                <VideoDownloader />
                
                <div className="max-w-3xl mx-auto mt-12 p-5 bg-white rounded-lg shadow-md">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">How to Download TikTok Videos</h3>
                  <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                    <li>Copy the link of the TikTok video you want to download</li>
                    <li>Paste the link in the input field above</li>
                    <li>Click the "Download" button</li>
                    <li>Choose your preferred download option (no watermark, with watermark, or audio only)</li>
                    <li>Enjoy your downloaded content!</li>
                  </ol>
                </div>

                <div className="max-w-3xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-2">Fast & Free</h4>
                    <p className="text-gray-600">Download TikTok videos instantly without any cost or registration required.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-2">HD Quality</h4>
                    <p className="text-gray-600">Get the highest quality videos available, up to 1080p resolution.</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-2">Multiple Formats</h4>
                    <p className="text-gray-600">Download videos with or without watermark, or extract audio only.</p>
                  </div>
                </div>
              </main>
            } />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/legal" element={<Legal />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />
          </Routes>
          
          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;