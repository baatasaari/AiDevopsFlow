export default function Download() {
  const handleDownload = async () => {
    try {
      const response = await fetch('/api/generate-ppt');
      if (!response.ok) throw new Error('Download failed');
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'GenAI-DevOps-Platform-Architecture.pptx';
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download error:', error);
      alert('Download failed. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-xl p-12 max-w-lg w-full text-center border border-slate-200">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-3">
            GenAI DevOps Platform
          </h1>
          <p className="text-slate-600 text-lg">
            Architecture Presentation
          </p>
        </div>
        
        <div className="mb-8 p-6 bg-slate-50 rounded-lg">
          <div className="text-sm text-slate-600 space-y-1">
            <div>• 8 Comprehensive Slides</div>
            <div>• $2.4M+ Cost Savings Analysis</div>
            <div>• 6 AI Agents Architecture</div>
            <div>• 2025 Implementation Roadmap</div>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          Download
        </button>
        
        <p className="text-xs text-slate-500 mt-4">
          PowerPoint format (.pptx) • ~52KB
        </p>
      </div>
    </div>
  );
}