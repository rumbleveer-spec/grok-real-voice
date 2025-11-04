# 🎙️ GROK REAL VOICE AGENT

**Voice-to-AI Conversations in Real-time**

Speak through your microphone, AI listens, understands, and responds back with voice. Built with Web Speech API, Grok, and Gemini.

## ✨ Features

- **🎤 Voice Input**: Real-time speech recognition
- **🔊 Voice Output**: Text-to-speech responses
- **🤖 Dual AI**: Switch between Grok & Gemini
- **💬 Natural Conversations**: Context-aware dialogue
- **🎨 Modern UI**: Beautiful gradient interface
- **📱 Responsive**: Works on desktop & mobile

## 🚀 Quick Start

### Installation

```bash
npm install
```

### Setup

1. Copy `.env.example` to `.env`
2. Add your API keys:
```
GROK_API_KEY=xai-your-key-here
GEMINI_API_KEY=AIzaSy...
```

### Run

```bash
npm start
```

Visit: `http://localhost:3000`

## 🎯 How to Use

1. **Click "Start Mic"** button
2. **Allow microphone** access when prompted
3. **Speak your question** clearly
4. **AI listens & responds** with voice
5. **Switch models** anytime (Grok ↔ Gemini)

## 🔧 Browser Requirements

- **Chrome/Edge**: ✅ Full support
- **Firefox**: ⚠️ Limited (may need flags)
- **Safari**: ⚠️ Partial support
- **Mobile**: ✅ Most modern browsers

## 🎨 UI Preview

```
┌─────────────────────────────────┐
│   🎙️ GROK REAL VOICE AGENT     │
│  Mic se bol – Agent sune –      │
│       Jawab de!                  │
├─────────────────────────────────┤
│  [🎤 Start Mic] [Grok] [Gemini] │
├─────────────────────────────────┤
│  Status: Ready...                │
├─────────────────────────────────┤
│  Response appears here...        │
└─────────────────────────────────┘
```

## 📋 API Endpoints

### POST `/speak`
Send voice transcription to AI

**Request:**
```json
{
  "text": "What is AI?",
  "model": "grok"
}
```

**Response:**
```json
{
  "reply": "AI stands for Artificial Intelligence..."
}
```

## 🏗️ Architecture

```
Voice Agent
├── Frontend
│   ├── Web Speech API (STT)
│   ├── Speech Synthesis (TTS)
│   └── Modern UI
└── Backend
    ├── Express Server
    ├── Grok API Integration
    └── Gemini API Integration
```

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express
- **AI APIs**: Grok Beta, Gemini 1.5 Pro
- **Voice**: Web Speech API, Speech Synthesis

## 🔐 Privacy

- Voice data processed in browser
- Only text sent to AI APIs
- No recordings stored
- Real-time processing only

## 📊 Project Status

- ✅ Voice recognition working
- ✅ AI integration complete
- ✅ Text-to-speech functional
- ⏳ Awaiting $5 Grok credits

## 🎓 Learning Journey

Built after overcoming:
- 100+ errors debugged
- Speech API quirks solved
- Dual AI integration mastered
- iPad development challenges

## 👨‍💻 Author

**Ankit Rajput**

*"Mic se bol, Agent sune, Khushi mile!"*

---

## 🚧 Future Enhancements

- [ ] Multiple language support
- [ ] Voice selection options
- [ ] Conversation history
- [ ] Export chat logs
- [ ] Dark mode theme

---

**Status**: Locally working 🟢  
**Effort**: 3+ din, iPad pe 💪  
**Result**: WORKING! 🎉
