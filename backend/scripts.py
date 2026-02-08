curl -X POST http://localhost:8000/api/v1/chat \
-H "Content-Type: application/json" \
-d '{"message": "Hello! What is Python?", "conversation_history": []}'
