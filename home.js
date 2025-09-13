import Chatbot from "https://cdn.n8nchatui.com/v1/embed.js";
Chatbot.init({
    "n8nChatUrl": "https://sanjay21234.app.n8n.cloud/webhook/39782bc6-2495-4494-8e85-ff31fe3aa966/chat",
    "metadata": {},
    "theme": {
        "button": {
            "backgroundColor": "#4caf50",
            "right": 20,
            "bottom": 20,
            "size": 50,
            "iconColor": "#373434",
            "customIconSrc": "https://www.svgrepo.com/show/339963/chat-bot.svg",
            "customIconSize": 60,
            "customIconBorderRadius": 30
        },
        "chatWindow": {
            "title": "AgriCare Assistant",
            "welcomeMessage": "🌱 Hello farmer! Ask me about crop diseases, fertilizers, and weather.",
            "backgroundColor": "#dcf9e5",
            "height": 600,
            "width": 400
        }
    } 
});