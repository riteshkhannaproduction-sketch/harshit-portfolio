import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function AdminDashboard() {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  useEffect(() => {
    const fetchMessages = async () => {
      const token = localStorage.getItem('adminToken');

      if (!token) {
        router.push('/admin/login');
        return;
      }

      try {
        const res = await fetch('https://backend-shreya.vercel.app/api/admin/messages', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (res.status === 401) {
          localStorage.removeItem('adminToken');
          router.push('/admin/login');
          return;
        }

        const data = await res.json();

        if (res.ok) {
          setMessages(data);
        } else {
          setError(data.message || 'Failed to fetch messages');
        }
      } catch (err) {
        console.error(err);
        setError('Server error while fetching messages');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    router.push('/admin/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-lime-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 font-inter">
      <Head>
        <title>Admin Dashboard | Messages</title>
      </Head>

      <nav className="bg-black text-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Admin Dashboard
              </h1>
            </div>
            <div>
              <button
                onClick={handleLogout}
                className="bg-white/10 hover:bg-lime-400 hover:text-black text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-4 py-5 border-b border-gray-200 sm:px-6 flex justify-between items-center">
            <div>
              <h3 className="text-lg leading-6 font-medium text-gray-900">Contact Form Submissions</h3>
              <p className="mt-1 text-sm text-gray-500">Review messages from your website visitors.</p>
            </div>
            <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-lime-100 text-lime-800">
              {messages.length} Messages
            </span>
          </div>

          {error && (
            <div className="p-4 bg-red-50 text-red-700 border-b border-red-200">
              {error}
            </div>
          )}

          <ul className="divide-y divide-gray-200">
            {messages.length === 0 && !error ? (
              <li className="p-6 text-center text-gray-500">No messages found.</li>
            ) : (
              messages.map((msg) => (
                <li key={msg._id} className="p-4 sm:p-6 hover:bg-gray-50 transition-colors">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <div className="h-10 w-10 rounded-full bg-lime-400 flex items-center justify-center text-black font-bold text-lg mr-3">
                        {msg.name.charAt(0).toUpperCase()}
                      </div>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900">{msg.name}</h4>
                        <a href={`mailto:${msg.email}`} className="text-sm text-gray-500 hover:text-lime-600">
                          {msg.email}
                        </a>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(msg.createdAt).toLocaleString()}
                    </div>
                  </div>
                  <div className="mt-2 bg-gray-50 p-4 rounded-md border border-gray-100">
                    <div className="text-sm font-semibold text-gray-900 mb-1">Subject: {msg.subject}</div>
                    <p className="text-sm text-gray-700 whitespace-pre-wrap">{msg.message}</p>
                  </div>
                </li>
              ))
            )}
          </ul>
        </div>
      </main>
    </div>
  );
}
