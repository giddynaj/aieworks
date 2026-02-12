import React, { useState, useEffect, useRef } from "react";
import { Send, Bot, User, Loader } from "lucide-react";
import { chatAPI } from "../services/api";
import styles from "../styles/chatContainer.module.css";

type ChatMessage = {
  role: "assistant" | "user" | "system";
  content: string;
};

const ChatContainer = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: `assistant`,
      content:
        "Hello! I'm your AI assistant. What would you like to learn about Python and AI?",
    },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: ChatMessage = {
      role: "user",
      content: inputMessage.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await chatAPI.sendMessage(userMessage.content, messages);

      if (response.success) {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: response.response,
          },
        ]);
      }
    } catch (err) {
      console.error("Chat error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>AI Chat Assistant</h1>
        <p>Powered by Python & Gemini AI - Day 1 Project</p>
      </div>

      {/* Messages and input components would go here */}
      {/* Full implementation available in the complete source files */}
    </div>
  );
};

export default ChatContainer;
