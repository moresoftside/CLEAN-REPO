import React from 'react';
import NetlifyIdentity from './components/NetlifyIdentity';
import { Settings, Edit3, Users, BarChart3 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <NetlifyIdentity />
      
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <Settings className="w-8 h-8 text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">Content Management System</h1>
            </div>
            <a
              href="/admin/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              <Edit3 className="w-4 h-4 mr-2" />
              Admin Panel
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Welcome to Your CMS
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Manage your content with ease using our integrated Netlify CMS solution.
            Create, edit, and publish your content seamlessly.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Edit3 className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Content Editor</h3>
            <p className="text-gray-600">
              Rich markdown editor with live preview for creating and editing your content.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">User Management</h3>
            <p className="text-gray-600">
              Secure authentication with GitHub, Google, and email login options.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6 border hover:shadow-md transition-shadow duration-200">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Analytics Ready</h3>
            <p className="text-gray-600">
              Built-in support for tracking content performance and user engagement.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-white rounded-2xl shadow-sm p-8 border text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Start Managing Content?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Access your admin panel to create, edit, and manage all your content.
            The CMS is configured and ready to use with proper authentication.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/admin/"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
            >
              <Edit3 className="w-5 h-5 mr-2" />
              Open Admin Panel
            </a>
            <button
              onClick={() => window.netlifyIdentity?.open()}
              className="inline-flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors duration-200 font-medium"
            >
              <Users className="w-5 h-5 mr-2" />
              Login / Register
            </button>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-500">
            <p>&copy; 2025 Content Management System. Powered by Netlify CMS.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;