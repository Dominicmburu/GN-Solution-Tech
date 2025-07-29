import React, { useState, useEffect, useRef } from 'react';

const ChatPage = () => {
  const [activeChats, setActiveChats] = useState([
    {
      id: 1,
      userId: 'user_123',
      userName: 'John Smith',
      userEmail: 'john.smith@company.com',
      status: 'active',
      startTime: '2024-01-20T10:30:00Z',
      lastMessage: 'Thank you for the quick response!',
      lastMessageTime: '2024-01-20T10:45:00Z',
      unreadCount: 0,
      assignedAgent: 'Mike Wilson',
      priority: 'medium',
      department: 'Technical Support'
    },
    {
      id: 2,
      userId: 'user_456',
      userName: 'Sarah Johnson',
      userEmail: 'sarah.j@startup.io',
      status: 'waiting',
      startTime: '2024-01-20T10:15:00Z',
      lastMessage: 'I need help with cybersecurity setup',
      lastMessageTime: '2024-01-20T10:15:00Z',
      unreadCount: 3,
      assignedAgent: null,
      priority: 'high',
      department: 'Sales'
    },
    {
      id: 3,
      userId: 'user_789',
      userName: 'David Chen',
      userEmail: 'david.chen@enterprise.com',
      status: 'active',
      startTime: '2024-01-20T09:45:00Z',
      lastMessage: 'Can you provide a quote for 500 users?',
      lastMessageTime: '2024-01-20T10:20:00Z',
      unreadCount: 1,
      assignedAgent: 'Sarah Mitchell',
      priority: 'high',
      department: 'Sales'
    }
  ]);

  const [selectedChat, setSelectedChat] = useState(null);
  const [messages, setMessages] = useState({
    1: [
      { id: 1, sender: 'user', message: 'Hello, I need help with network setup', timestamp: '2024-01-20T10:30:00Z' },
      { id: 2, sender: 'agent', message: 'Hi! I\'d be happy to help you with your network setup. What specific issues are you facing?', timestamp: '2024-01-20T10:32:00Z' },
      { id: 3, sender: 'user', message: 'We\'re having connectivity issues with our remote offices', timestamp: '2024-01-20T10:35:00Z' },
      { id: 4, sender: 'agent', message: 'I understand. Let me connect you with our network specialist who can provide detailed guidance.', timestamp: '2024-01-20T10:37:00Z' },
      { id: 5, sender: 'user', message: 'Thank you for the quick response!', timestamp: '2024-01-20T10:45:00Z' }
    ],
    2: [
      { id: 1, sender: 'user', message: 'I need help with cybersecurity setup', timestamp: '2024-01-20T10:15:00Z' },
      { id: 2, sender: 'user', message: 'This is urgent', timestamp: '2024-01-20T10:16:00Z' },
      { id: 3, sender: 'user', message: 'Are you there?', timestamp: '2024-01-20T10:17:00Z' }
    ],
    3: [
      { id: 1, sender: 'user', message: 'Hi, I\'m interested in your managed services', timestamp: '2024-01-20T09:45:00Z' },
      { id: 2, sender: 'agent', message: 'Hello! Thank you for your interest. I\'d be happy to discuss our managed services with you.', timestamp: '2024-01-20T09:47:00Z' },
      { id: 3, sender: 'user', message: 'Can you provide a quote for 500 users?', timestamp: '2024-01-20T10:20:00Z' }
    ]
  });

  const [newMessage, setNewMessage] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [onlineAgents] = useState([
    { id: 1, name: 'Mike Wilson', status: 'online', activeChats: 2 },
    { id: 2, name: 'Sarah Mitchell', status: 'online', activeChats: 1 },
    { id: 3, name: 'John Davis', status: 'away', activeChats: 0 },
    { id: 4, name: 'Emma Thompson', status: 'busy', activeChats: 3 }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, selectedChat]);

  const filteredChats = activeChats.filter(chat => {
    if (filterStatus === 'all') return true;
    return chat.status === filterStatus;
  });

  const handleChatSelect = (chat) => {
    setSelectedChat(chat);
    // Mark messages as read
    setActiveChats(prevChats => 
      prevChats.map(c => 
        c.id === chat.id ? { ...c, unreadCount: 0 } : c
      )
    );
  };

  const handleSendMessage = () => {
    if (!newMessage.trim() || !selectedChat) return;

    const messageObj = {
      id: Date.now(),
      sender: 'agent',
      message: newMessage,
      timestamp: new Date().toISOString()
    };

    setMessages(prev => ({
      ...prev,
      [selectedChat.id]: [...(prev[selectedChat.id] || []), messageObj]
    }));

    setActiveChats(prevChats =>
      prevChats.map(chat =>
        chat.id === selectedChat.id
          ? { ...chat, lastMessage: newMessage, lastMessageTime: new Date().toISOString() }
          : chat
      )
    );

    setNewMessage('');
  };

  const handleAssignAgent = (chatId, agentName) => {
    setActiveChats(prevChats =>
      prevChats.map(chat =>
        chat.id === chatId ? { ...chat, assignedAgent: agentName } : chat
      )
    );
  };

  const getChatStatusBadge = (status) => {
    switch (status) {
      case 'active':
        return <span className="badge bg-success">Active</span>;
      case 'waiting':
        return <span className="badge bg-warning">Waiting</span>;
      case 'ended':
        return <span className="badge bg-secondary">Ended</span>;
      default:
        return <span className="badge bg-light text-dark">Unknown</span>;
    }
  };

  const getPriorityBadge = (priority) => {
    switch (priority) {
      case 'high':
        return <span className="badge bg-danger">High</span>;
      case 'medium':
        return <span className="badge bg-warning">Medium</span>;
      case 'low':
        return <span className="badge bg-info">Low</span>;
      default:
        return <span className="badge bg-secondary">Normal</span>;
    }
  };

  const getAgentStatusBadge = (status) => {
    switch (status) {
      case 'online':
        return <span className="badge bg-success">Online</span>;
      case 'away':
        return <span className="badge bg-warning">Away</span>;
      case 'busy':
        return <span className="badge bg-danger">Busy</span>;
      default:
        return <span className="badge bg-secondary">Offline</span>;
    }
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const formatRelativeTime = (timestamp) => {
    const now = new Date();
    const messageTime = new Date(timestamp);
    const diffMinutes = Math.floor((now - messageTime) / (1000 * 60));
    
    if (diffMinutes < 1) return 'just now';
    if (diffMinutes < 60) return `${diffMinutes}m ago`;
    const diffHours = Math.floor(diffMinutes / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    return messageTime.toLocaleDateString();
  };

  return (
    <div className="chat-page">
      {/* Page Header */}
      <div className="row mb-4">
        <div className="col">
          <h2 className="fw-bold text-dark mb-1">Live Chat Management</h2>
          <p className="text-muted mb-0">Monitor and respond to customer chat requests</p>
        </div>
        <div className="col-auto">
          <div className="d-flex gap-2">
            <button className="btn btn-outline-info">
              <i className="fas fa-cog me-2"></i>
              Chat Settings
            </button>
            <button className="btn btn-primary">
              <i className="fas fa-headset me-2"></i>
              Take Break
            </button>
          </div>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="row mb-4">
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="text-success fs-3 fw-bold">{activeChats.filter(c => c.status === 'active').length}</div>
              <div className="text-muted small">Active Chats</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="text-warning fs-3 fw-bold">{activeChats.filter(c => c.status === 'waiting').length}</div>
              <div className="text-muted small">Waiting</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="text-info fs-3 fw-bold">{onlineAgents.filter(a => a.status === 'online').length}</div>
              <div className="text-muted small">Agents Online</div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-3">
          <div className="card border-0 shadow-sm">
            <div className="card-body text-center">
              <div className="text-primary fs-3 fw-bold">98%</div>
              <div className="text-muted small">Response Rate</div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Chat List */}
        <div className="col-lg-4 mb-4">
          <div className="card border-0 shadow-sm h-100">
            <div className="card-header bg-white border-0 py-3">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0 fw-bold">Active Chats</h5>
                <select 
                  className="form-select form-select-sm w-auto"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="active">Active</option>
                  <option value="waiting">Waiting</option>
                  <option value="ended">Ended</option>
                </select>
              </div>
            </div>
            <div className="card-body p-0" style={{ maxHeight: '600px', overflowY: 'auto' }}>
              {filteredChats.length === 0 ? (
                <div className="text-center py-5">
                  <div className="text-muted">
                    <i className="fas fa-comments fs-1 mb-3"></i>
                    <div>No active chats</div>
                    <small>Waiting for customers to connect</small>
                  </div>
                </div>
              ) : (
                <div className="list-group list-group-flush">
                  {filteredChats.map((chat) => (
                    <div 
                      key={chat.id}
                      className={`list-group-item list-group-item-action border-0 py-3 ${
                        selectedChat?.id === chat.id ? 'active' : ''
                      }`}
                      onClick={() => handleChatSelect(chat)}
                      style={{ cursor: 'pointer' }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="position-relative me-3">
                          <div className="avatar bg-primary rounded-circle d-flex align-items-center justify-content-center"
                               style={{ width: '40px', height: '40px' }}>
                            <span className="text-white fw-bold">
                              {chat.userName.charAt(0)}
                            </span>
                          </div>
                          {chat.unreadCount > 0 && (
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                              {chat.unreadCount}
                            </span>
                          )}
                        </div>
                        <div className="flex-grow-1 min-w-0">
                          <div className="d-flex justify-content-between align-items-start mb-1">
                            <div className="fw-semibold text-truncate">{chat.userName}</div>
                            <small className="text-muted">
                              {formatRelativeTime(chat.lastMessageTime)}
                            </small>
                          </div>
                          <div className="text-muted small text-truncate mb-2">
                            {chat.lastMessage}
                          </div>
                          <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex gap-1">
                              {getChatStatusBadge(chat.status)}
                              {getPriorityBadge(chat.priority)}
                            </div>
                            {chat.assignedAgent && (
                              <small className="text-muted">{chat.assignedAgent}</small>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Chat Window */}
        <div className="col-lg-5 mb-4">
          <div className="card border-0 shadow-sm h-100">
            {selectedChat ? (
              <>
                {/* Chat Header */}
                <div className="card-header bg-white border-0 py-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex align-items-center">
                      <div className="avatar bg-primary rounded-circle d-flex align-items-center justify-content-center me-3"
                           style={{ width: '40px', height: '40px' }}>
                        <span className="text-white fw-bold">
                          {selectedChat.userName.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="fw-bold">{selectedChat.userName}</div>
                        <div className="text-muted small">{selectedChat.userEmail}</div>
                      </div>
                    </div>
                    <div className="d-flex gap-2">
                      {getChatStatusBadge(selectedChat.status)}
                      {getPriorityBadge(selectedChat.priority)}
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="card-body d-flex flex-column" style={{ height: '400px' }}>
                  <div className="flex-grow-1 overflow-auto mb-3">
                    {(messages[selectedChat.id] || []).map((message) => (
                      <div 
                        key={message.id}
                        className={`d-flex mb-3 ${message.sender === 'agent' ? 'justify-content-end' : ''}`}
                      >
                        <div className={`max-w-75 ${message.sender === 'agent' ? 'text-end' : ''}`}>
                          <div 
                            className={`p-3 rounded ${
                              message.sender === 'agent' 
                                ? 'bg-primary text-white' 
                                : 'bg-light'
                            }`}
                            style={{ maxWidth: '75%', display: 'inline-block' }}
                          >
                            {message.message}
                          </div>
                          <div className="text-muted small mt-1">
                            {formatTime(message.timestamp)}
                          </div>
                        </div>
                      </div>
                    ))}
                    <div ref={messagesEndRef} />
                  </div>

                  {/* Message Input */}
                  <div className="border-top pt-3">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      />
                      <button 
                        className="btn btn-primary"
                        onClick={handleSendMessage}
                        disabled={!newMessage.trim()}
                      >
                        <i className="fas fa-paper-plane"></i>
                      </button>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mt-2">
                      <div className="btn-group btn-group-sm">
                        <button className="btn btn-outline-secondary">
                          <i className="fas fa-smile"></i>
                        </button>
                        <button className="btn btn-outline-secondary">
                          <i className="fas fa-paperclip"></i>
                        </button>
                        <button className="btn btn-outline-secondary">
                          <i className="fas fa-image"></i>
                        </button>
                      </div>
                      <small className="text-muted">Press Enter to send</small>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="card-body d-flex align-items-center justify-content-center h-100">
                <div className="text-center text-muted">
                  <i className="fas fa-comments fs-1 mb-3"></i>
                  <div>Select a chat to start messaging</div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Chat Info & Agents */}
        <div className="col-lg-3">
          {/* Customer Info */}
          {selectedChat && (
            <div className="card border-0 shadow-sm mb-4">
              <div className="card-header bg-white border-0 py-3">
                <h6 className="fw-bold mb-0">Customer Information</h6>
              </div>
              <div className="card-body">
                <div className="mb-3">
                  <strong>Name:</strong>
                  <div className="text-muted">{selectedChat.userName}</div>
                </div>
                <div className="mb-3">
                  <strong>Email:</strong>
                  <div className="text-muted">{selectedChat.userEmail}</div>
                </div>
                <div className="mb-3">
                  <strong>Department:</strong>
                  <div className="text-muted">{selectedChat.department}</div>
                </div>
                <div className="mb-3">
                  <strong>Chat Started:</strong>
                  <div className="text-muted">{formatTime(selectedChat.startTime)}</div>
                </div>
                <div className="mb-3">
                  <strong>Assigned Agent:</strong>
                  <select
                    className="form-select form-select-sm"
                    value={selectedChat.assignedAgent || ''}
                    onChange={(e) => handleAssignAgent(selectedChat.id, e.target.value)}
                  >
                    <option value="">Unassigned</option>
                    {onlineAgents.filter(a => a.status === 'online').map(agent => (
                      <option key={agent.id} value={agent.name}>{agent.name}</option>
                    ))}
                  </select>
                </div>
                <div className="d-grid gap-2">
                  <button className="btn btn-outline-primary btn-sm">
                    <i className="fas fa-user me-2"></i>View Profile
                  </button>
                  <button className="btn btn-outline-success btn-sm">
                    <i className="fas fa-phone me-2"></i>Start Call
                  </button>
                  <button className="btn btn-outline-danger btn-sm">
                    <i className="fas fa-times me-2"></i>End Chat
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Online Agents */}
          <div className="card border-0 shadow-sm">
            <div className="card-header bg-white border-0 py-3">
              <h6 className="fw-bold mb-0">Team Status</h6>
            </div>
            <div className="card-body">
              {onlineAgents.map((agent) => (
                <div key={agent.id} className="d-flex justify-content-between align-items-center mb-3">
                  <div className="d-flex align-items-center">
                    <div className="avatar bg-secondary rounded-circle d-flex align-items-center justify-content-center me-2"
                         style={{ width: '32px', height: '32px' }}>
                      <span className="text-white small fw-bold">
                        {agent.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="fw-semibold small">{agent.name}</div>
                      <div className="text-muted" style={{ fontSize: '0.75rem' }}>
                        {agent.activeChats} active chats
                      </div>
                    </div>
                  </div>
                  <div>
                    {getAgentStatusBadge(agent.status)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;