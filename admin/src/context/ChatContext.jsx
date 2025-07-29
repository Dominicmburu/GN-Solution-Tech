import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [messages, setMessages] = useState([]);
    const [currentUser, setCurrentUser] = useState(null);

    const sendMessage = (message) => {
        setMessages(prev => [...prev, message]);
    };

    return (
        <ChatContext.Provider value={{ messages, sendMessage, currentUser, setCurrentUser }}>
            {children}
        </ChatContext.Provider>
    );
};