import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Send, Bot, User, Loader } from "lucide-react";
import { chatAPI } from "../services/api";

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  height: 600px;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 25 -5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Header = styled.div`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  padding: 1.5rem;
  text-align: center;
`;

type ChatMessage = {
  role: 'assistant' | 'user' | 'system';
  content: string;
}

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

    const userMessage = {
      role: "user",
      content: inputMessage.trim(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputMessage("");
    setIsLoading(true);

    try {
      const response = await chatAPI.sendMessage(userMessage.content, message);

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
    <Container>
      <Header>
        <h1>AI Chat Assistant</h1>
        <p>Powered by Python & Gemini AI - Day 1 Project</p>
      </Header>

      {/* Messages and input components would go here */}
      {/* Full implementation available in the complete source files */}
    </Container>
  );
};

export default ChatContainer;
