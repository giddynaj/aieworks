import axios from "axios";
import type { AxiosError } from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const chatAPI = {
  sendMessage: async (
    message: string,
    conversationHistory: { role: string; content: string }[] = [],
  ) => {
    try {
      const response = await apiClient.post("/chat", {
        message,
        conversation_history: conversationHistory,
      });
      return response.data;
    } catch (err: unknown) {
      const error = err as AxiosError<{ detail?: string }>;
      throw new Error(error.response?.data?.detail || "Failed to send message");
    }
  },
};
