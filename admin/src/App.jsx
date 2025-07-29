import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ChatProvider } from './context/ChatContext';
import { ThemeProvider } from './context/ThemeContext';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Login from './components/auth/Login';
import Header from './components/common/Header';
import Sidebar from './components/common/Sidebar';
import Footer from './components/common/Footer';
import Dashboard from './pages/Dashboard';
import BlogsPage from './pages/BlogsPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactsPage from './pages/ContactsPage';
import ChatPage from './pages/ChatPage';
import SettingsPage from './pages/SettingsPage';
import ProfilePage from './pages/ProfilePage';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './styles/custom.scss';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ChatProvider>
          <ThemeProvider>
            <Router>
              <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>} />
                <Route path="/*" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>} />
              </Routes>
            </Router>
          </ThemeProvider>
        </ChatProvider>
      </AuthProvider>
    </div>
  );
}

function AdminLayout() {
  return (
    <div className="admin-layout d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <Header />
        <main className="content-area p-3">
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/blogs/*" element={<BlogsPage />} />
            <Route path="/resources/*" element={<ResourcesPage />} />
            <Route path="/contacts" element={<ContactsPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;