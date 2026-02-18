import { useState, useRef, useEffect } from 'react';
import useChatbot from '../hooks/useChatbot';
import './Chatbot.css';

const BOT_GREETING = "Hi! I'm here to help. You can ask about staying with us, volunteering, donating, or our programs. How can I help you today?";

export default function Chatbot() {
  const { useChatting, response, error, isLoading } = useChatbot()
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: BOT_GREETING },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOpen = () => {
    setIsOpen(true);
    setIsMinimized(false);
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIsMinimized(false);
  };

  const handleExpand = () => {
    setIsMinimized(false);
  };

  async function handleSubmit(e){
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    setMessages((prev) => [...prev, { role: 'user', text }]);
    setInput('');
    // Placeholder reply (could be replaced with API call)
    const aiResponse = await useChatting(text)
    setMessages((prev) => [...prev, {role: 'bot', text: aiResponse}])
    /*setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: 'bot',
          text: "Thanks for your message. This is a demo chatbot. For immediate help, please call us at 215.387.8406 or email volunteer@rmhcphilly.org. You can also explore our site for staying with us, volunteering, and ways to give.",
        },
      ]);
    }, 600);*/
  }

  return (
    <div className="chatbot-widget">
      {isOpen && (
        <div className={`chatbot-window ${isMinimized ? 'minimized' : ''}`}>
          <div className="chatbot-header">
            <span className="chatbot-title">
              <span className="chatbot-logo" aria-hidden>💬</span>
              Chat with us
            </span>
            <div className="chatbot-header-actions">
              {isMinimized ? (
                <button
                  type="button"
                  className="chatbot-btn-icon"
                  onClick={handleExpand}
                  aria-label="Expand chat"
                >
                  ▲
                </button>
              ) : (
                <button
                  type="button"
                  className="chatbot-btn-icon"
                  onClick={handleMinimize}
                  aria-label="Minimize chat"
                >
                  _
                </button>
              )}
              <button
                type="button"
                className="chatbot-btn-icon"
                onClick={handleClose}
                aria-label="Close chat"
              >
                ×
              </button>
            </div>
          </div>
          {!isMinimized && (
            <>
              <div className="chatbot-messages">
                {messages.map((msg, i) => (
                  <div key={i} className={`chatbot-msg chatbot-msg--${msg.role}`}>
                    <span className="chatbot-msg-text">{msg.text}</span>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>
              <form className="chatbot-form" onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="chatbot-input"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  aria-label="Message"
                />
                <button type="submit" className="chatbot-send" aria-label="Send">
                  Send
                </button>
              </form>
            </>
          )}
        </div>
      )}

      <button
        type="button"
        className="chatbot-fab"
        onClick={isOpen && !isMinimized ? handleMinimize : isOpen && isMinimized ? handleExpand : handleOpen}
        aria-label={isOpen ? (isMinimized ? 'Expand chat' : 'Minimize chat') : 'Open chat'}
        aria-expanded={isOpen && !isMinimized}
      >
        {isOpen && isMinimized ? (
          <span className="chatbot-fab-icon">▲</span>
        ) : (
          <span className="chatbot-fab-icon" aria-hidden>💬</span>
        )}
      </button>
    </div>
  );
}
