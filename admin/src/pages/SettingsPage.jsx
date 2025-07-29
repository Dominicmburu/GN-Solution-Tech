import React, { useState } from 'react';

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    general: {
      siteName: 'GN Solutions',
      siteUrl: 'https://gnsolutions.eu',
      adminEmail: 'admin@gnsolutions.eu',
      timezone: 'Europe/Dublin',
      language: 'en',
      maintenanceMode: false
    },
    email: {
      smtpHost: 'smtp.gmail.com',
      smtpPort: '587',
      smtpUsername: 'notifications@gnsolutions.eu',
      smtpPassword: '••••••••',
      fromName: 'GN Solutions',
      fromEmail: 'noreply@gnsolutions.eu',
      enableEmailNotifications: true
    },
    security: {
      sessionTimeout: 30,
      passwordMinLength: 8,
      requireTwoFactor: false,
      maxLoginAttempts: 5,
      enableAuditLog: true,
      ipWhitelist: '',
      enableSSL: true
    },
    chat: {
      enableLiveChat: true,
      chatOfflineMessage: 'We are currently offline. Please leave a message.',
      maxConcurrentChats: 5,
      chatTimeout: 300,
      enableChatHistory: true,
      enableFileUpload: true,
      enableChatRating: true
    },
    notifications: {
      emailOnNewContact: true,
      emailOnNewChat: true,
      emailOnNewBlog: false,
      slackWebhook: '',
      enableSlackNotifications: false,
      enablePushNotifications: true
    },
    integrations: {
      googleAnalyticsId: 'GA-XXXXXXXXX',
      facebookPixelId: '',
      enableCookieConsent: true,
      enableSEOTools: true,
      enableSocialShare: true
    }
  });

  const [unsavedChanges, setUnsavedChanges] = useState(false);

  const handleInputChange = (section, field, value) => {
    setSettings(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value
      }
    }));
    setUnsavedChanges(true);
  };

  const handleSaveSettings = () => {
    console.log('Saving settings:', settings);
    setUnsavedChanges(false);
    // Show success message
    alert('Settings saved successfully!');
  };

  const handleResetSection = (section) => {
    if (window.confirm('Are you sure you want to reset this section to default values?')) {
      // Reset logic would go here
      console.log('Resetting section:', section);
    }
  };

  const tabs = [
    { id: 'general', label: 'General', icon: 'fas fa-cog' },
    { id: 'email', label: 'Email', icon: 'fas fa-envelope' },
    { id: 'security', label: 'Security', icon: 'fas fa-shield-alt' },
    { id: 'chat', label: 'Live Chat', icon: 'fas fa-comments' },
    { id: 'notifications', label: 'Notifications', icon: 'fas fa-bell' },
    { id: 'integrations', label: 'Integrations', icon: 'fas fa-plug' }
  ];

  return (
    <div className="settings-page">
      {/* Page Header */}
      <div className="row mb-4">
        <div className="col">
          <h2 className="fw-bold text-dark mb-1">System Settings</h2>
          <p className="text-muted mb-0">Configure your admin dashboard and website settings</p>
        </div>
        <div className="col-auto">
          <div className="d-flex gap-2">
            {unsavedChanges && (
              <button className="btn btn-outline-warning">
                <i className="fas fa-exclamation-triangle me-2"></i>
                Unsaved Changes
              </button>
            )}
            <button className="btn btn-outline-secondary">
              <i className="fas fa-download me-2"></i>
              Export Config
            </button>
            <button 
              className="btn btn-primary"
              onClick={handleSaveSettings}
            >
              <i className="fas fa-save me-2"></i>
              Save Settings
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Settings Navigation */}
        <div className="col-lg-3 mb-4">
          <div className="card border-0 shadow-sm">
            <div className="card-body p-0">
              <div className="nav nav-pills flex-column">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    className={`nav-link text-start border-0 rounded-0 ${
                      activeTab === tab.id ? 'active' : ''
                    }`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <i className={`${tab.icon} me-3`}></i>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Settings Content */}
        <div className="col-lg-9">
          {activeTab === 'general' && (
            <GeneralSettings 
              settings={settings.general} 
              onChange={(field, value) => handleInputChange('general', field, value)}
              onReset={() => handleResetSection('general')}
            />
          )}
          {activeTab === 'email' && (
            <EmailSettings 
              settings={settings.email} 
              onChange={(field, value) => handleInputChange('email', field, value)}
              onReset={() => handleResetSection('email')}
            />
          )}
          {activeTab === 'security' && (
            <SecuritySettings 
              settings={settings.security} 
              onChange={(field, value) => handleInputChange('security', field, value)}
              onReset={() => handleResetSection('security')}
            />
          )}
          {activeTab === 'chat' && (
            <ChatSettings 
              settings={settings.chat} 
              onChange={(field, value) => handleInputChange('chat', field, value)}
              onReset={() => handleResetSection('chat')}
            />
          )}
          {activeTab === 'notifications' && (
            <NotificationSettings 
              settings={settings.notifications} 
              onChange={(field, value) => handleInputChange('notifications', field, value)}
              onReset={() => handleResetSection('notifications')}
            />
          )}
          {activeTab === 'integrations' && (
            <IntegrationSettings 
              settings={settings.integrations} 
              onChange={(field, value) => handleInputChange('integrations', field, value)}
              onReset={() => handleResetSection('integrations')}
            />
          )}
        </div>
      </div>
    </div>
  );
};

// General Settings Component
const GeneralSettings = ({ settings, onChange, onReset }) => (
  <div className="card border-0 shadow-sm">
    <div className="card-header bg-white border-0 py-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="fw-bold mb-0">General Settings</h5>
        <button className="btn btn-outline-secondary btn-sm" onClick={onReset}>
          <i className="fas fa-undo me-2"></i>Reset
        </button>
      </div>
    </div>
    <div className="card-body">
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Site Name</label>
          <input
            type="text"
            className="form-control"
            value={settings.siteName}
            onChange={(e) => onChange('siteName', e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Site URL</label>
          <input
            type="url"
            className="form-control"
            value={settings.siteUrl}
            onChange={(e) => onChange('siteUrl', e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Admin Email</label>
          <input
            type="email"
            className="form-control"
            value={settings.adminEmail}
            onChange={(e) => onChange('adminEmail', e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Timezone</label>
          <select
            className="form-select"
            value={settings.timezone}
            onChange={(e) => onChange('timezone', e.target.value)}
          >
            <option value="Europe/Dublin">Europe/Dublin</option>
            <option value="Europe/London">Europe/London</option>
            <option value="America/New_York">America/New_York</option>
            <option value="UTC">UTC</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Language</label>
          <select
            className="form-select"
            value={settings.language}
            onChange={(e) => onChange('language', e.target.value)}
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.maintenanceMode}
              onChange={(e) => onChange('maintenanceMode', e.target.checked)}
            />
            <label className="form-check-label fw-semibold">
              Maintenance Mode
            </label>
            <div className="form-text">Enable to show maintenance page to visitors</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Email Settings Component
const EmailSettings = ({ settings, onChange, onReset }) => (
  <div className="card border-0 shadow-sm">
    <div className="card-header bg-white border-0 py-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="fw-bold mb-0">Email Settings</h5>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary btn-sm">
            <i className="fas fa-paper-plane me-2"></i>Test Email
          </button>
          <button className="btn btn-outline-secondary btn-sm" onClick={onReset}>
            <i className="fas fa-undo me-2"></i>Reset
          </button>
        </div>
      </div>
    </div>
    <div className="card-body">
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">SMTP Host</label>
          <input
            type="text"
            className="form-control"
            value={settings.smtpHost}
            onChange={(e) => onChange('smtpHost', e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">SMTP Port</label>
          <input
            type="number"
            className="form-control"
            value={settings.smtpPort}
            onChange={(e) => onChange('smtpPort', e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">SMTP Username</label>
          <input
            type="text"
            className="form-control"
            value={settings.smtpUsername}
            onChange={(e) => onChange('smtpUsername', e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">SMTP Password</label>
          <input
            type="password"
            className="form-control"
            value={settings.smtpPassword}
            onChange={(e) => onChange('smtpPassword', e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">From Name</label>
          <input
            type="text"
            className="form-control"
            value={settings.fromName}
            onChange={(e) => onChange('fromName', e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">From Email</label>
          <input
            type="email"
            className="form-control"
            value={settings.fromEmail}
            onChange={(e) => onChange('fromEmail', e.target.value)}
          />
        </div>
        <div className="col-12">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.enableEmailNotifications}
              onChange={(e) => onChange('enableEmailNotifications', e.target.checked)}
            />
            <label className="form-check-label fw-semibold">
              Enable Email Notifications
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Security Settings Component
const SecuritySettings = ({ settings, onChange, onReset }) => (
  <div className="card border-0 shadow-sm">
    <div className="card-header bg-white border-0 py-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="fw-bold mb-0">Security Settings</h5>
        <button className="btn btn-outline-secondary btn-sm" onClick={onReset}>
          <i className="fas fa-undo me-2"></i>Reset
        </button>
      </div>
    </div>
    <div className="card-body">
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Session Timeout (minutes)</label>
          <input
            type="number"
            className="form-control"
            value={settings.sessionTimeout}
            onChange={(e) => onChange('sessionTimeout', parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Password Min Length</label>
          <input
            type="number"
            className="form-control"
            value={settings.passwordMinLength}
            onChange={(e) => onChange('passwordMinLength', parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Max Login Attempts</label>
          <input
            type="number"
            className="form-control"
            value={settings.maxLoginAttempts}
            onChange={(e) => onChange('maxLoginAttempts', parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">IP Whitelist</label>
          <textarea
            className="form-control"
            rows="3"
            value={settings.ipWhitelist}
            onChange={(e) => onChange('ipWhitelist', e.target.value)}
            placeholder="Enter IP addresses separated by commas"
          />
        </div>
        <div className="col-12">
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.requireTwoFactor}
              onChange={(e) => onChange('requireTwoFactor', e.target.checked)}
            />
            <label className="form-check-label fw-semibold">
              Require Two-Factor Authentication
            </label>
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.enableAuditLog}
              onChange={(e) => onChange('enableAuditLog', e.target.checked)}
            />
            <label className="form-check-label fw-semibold">
              Enable Audit Logging
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.enableSSL}
              onChange={(e) => onChange('enableSSL', e.target.checked)}
            />
            <label className="form-check-label fw-semibold">
              Force SSL/HTTPS
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Chat Settings Component
const ChatSettings = ({ settings, onChange, onReset }) => (
  <div className="card border-0 shadow-sm">
    <div className="card-header bg-white border-0 py-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="fw-bold mb-0">Live Chat Settings</h5>
        <button className="btn btn-outline-secondary btn-sm" onClick={onReset}>
          <i className="fas fa-undo me-2"></i>Reset
        </button>
      </div>
    </div>
    <div className="card-body">
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Max Concurrent Chats</label>
          <input
            type="number"
            className="form-control"
            value={settings.maxConcurrentChats}
            onChange={(e) => onChange('maxConcurrentChats', parseInt(e.target.value))}
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Chat Timeout (seconds)</label>
          <input
            type="number"
            className="form-control"
            value={settings.chatTimeout}
            onChange={(e) => onChange('chatTimeout', parseInt(e.target.value))}
          />
        </div>
        <div className="col-12 mb-3">
          <label className="form-label fw-semibold">Offline Message</label>
          <textarea
            className="form-control"
            rows="3"
            value={settings.chatOfflineMessage}
            onChange={(e) => onChange('chatOfflineMessage', e.target.value)}
          />
        </div>
        <div className="col-12">
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.enableLiveChat}
              onChange={(e) => onChange('enableLiveChat', e.target.checked)}
            />
            <label className="form-check-label fw-semibold">
              Enable Live Chat
            </label>
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.enableChatHistory}
              onChange={(e) => onChange('enableChatHistory', e.target.checked)}
            />
            <label className="form-check-label fw-semibold">
              Save Chat History
            </label>
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.enableFileUpload}
              onChange={(e) => onChange('enableFileUpload', e.target.checked)}
            />
            <label className="form-check-label fw-semibold">
              Allow File Uploads in Chat
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.enableChatRating}
              onChange={(e) => onChange('enableChatRating', e.target.checked)}
            />
            <label className="form-check-label fw-semibold">
              Enable Chat Rating
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Notification Settings Component
const NotificationSettings = ({ settings, onChange, onReset }) => (
  <div className="card border-0 shadow-sm">
    <div className="card-header bg-white border-0 py-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="fw-bold mb-0">Notification Settings</h5>
        <button className="btn btn-outline-secondary btn-sm" onClick={onReset}>
          <i className="fas fa-undo me-2"></i>Reset
        </button>
      </div>
    </div>
    <div className="card-body">
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Slack Webhook URL</label>
          <input
            type="url"
            className="form-control"
            value={settings.slackWebhook}
            onChange={(e) => onChange('slackWebhook', e.target.value)}
            placeholder="https://hooks.slack.com/..."
          />
        </div>
        <div className="col-md-6"></div>
        <div className="col-12">
          <h6 className="fw-semibold mb-3">Email Notifications</h6>
          <div className="form-check form-switch mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.emailOnNewContact}
              onChange={(e) => onChange('emailOnNewContact', e.target.checked)}
            />
            <label className="form-check-label">
              New Contact Form Submissions
            </label>
          </div>
          <div className="form-check form-switch mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.emailOnNewChat}
              onChange={(e) => onChange('emailOnNewChat', e.target.checked)}
            />
            <label className="form-check-label">
              New Chat Sessions
            </label>
          </div>
          <div className="form-check form-switch mb-4">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.emailOnNewBlog}
              onChange={(e) => onChange('emailOnNewBlog', e.target.checked)}
            />
            <label className="form-check-label">
              New Blog Comments
            </label>
          </div>
          
          <h6 className="fw-semibold mb-3">Other Notifications</h6>
          <div className="form-check form-switch mb-2">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.enableSlackNotifications}
              onChange={(e) => onChange('enableSlackNotifications', e.target.checked)}
            />
            <label className="form-check-label">
              Slack Notifications
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.enablePushNotifications}
              onChange={(e) => onChange('enablePushNotifications', e.target.checked)}
            />
            <label className="form-check-label">
              Browser Push Notifications
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// Integration Settings Component
const IntegrationSettings = ({ settings, onChange, onReset }) => (
  <div className="card border-0 shadow-sm">
    <div className="card-header bg-white border-0 py-3">
      <div className="d-flex justify-content-between align-items-center">
        <h5 className="fw-bold mb-0">Integration Settings</h5>
        <button className="btn btn-outline-secondary btn-sm" onClick={onReset}>
          <i className="fas fa-undo me-2"></i>Reset
        </button>
      </div>
    </div>
    <div className="card-body">
      <div className="row">
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Google Analytics ID</label>
          <input
            type="text"
            className="form-control"
            value={settings.googleAnalyticsId}
            onChange={(e) => onChange('googleAnalyticsId', e.target.value)}
            placeholder="GA-XXXXXXXXX"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label className="form-label fw-semibold">Facebook Pixel ID</label>
          <input
            type="text"
            className="form-control"
            value={settings.facebookPixelId}
            onChange={(e) => onChange('facebookPixelId', e.target.value)}
            placeholder="123456789"
          />
        </div>
        <div className="col-12">
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.enableCookieConsent}
              onChange={(e) => onChange('enableCookieConsent', e.target.checked)}
            />
            <label className="form-check-label fw-semibold">
              Enable Cookie Consent Banner
            </label>
          </div>
          <div className="form-check form-switch mb-3">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.enableSEOTools}
              onChange={(e) => onChange('enableSEOTools', e.target.checked)}
            />
            <label className="form-check-label fw-semibold">
              Enable SEO Tools
            </label>
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={settings.enableSocialShare}
              onChange={(e) => onChange('enableSocialShare', e.target.checked)}
            />
            <label className="form-check-label fw-semibold">
              Enable Social Media Sharing
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SettingsPage;