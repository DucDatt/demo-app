# 🎯 Fullstack Engineer - Case Study

**Time Limit:** 3-4 hours
**What We're Looking For:** Fullstack proficiency, AI tool usage, practical problem-solving, shipping mindset

---

## 🎯 The Challenge

Build a **Mini Dashboard for Game Analytics** that displays real-time data and allows basic CRUD operations.

This is a practical test that mirrors real work you'd do here: build a feature end-to-end, use AI tools to accelerate development, and ship something that actually works.

---

## 📋 Requirements

### Core Features (Must Have)

**1. Backend API (NestJS or Express)**
- REST API with at least 3 endpoints:
  - `GET /analytics` - Fetch analytics data (supports filtering)
  - `POST /analytics` - Create new analytics entry
  - `GET /analytics/summary` - Return aggregated stats
- Use **in-memory storage** or simple **JSON file** (no need for real database)
- Basic validation and error handling

**2. Frontend Dashboard (React)**
- Display analytics data in a **table or card view**
- Show **summary statistics** (total, average, etc.)
- **Form to add new entry** (submit to API)
- Basic **filtering or search** functionality
- Responsive layout (doesn't need to be fancy)

**3. Integration**
- Frontend calls backend API
- Handle loading/error states properly
- Data flows correctly between frontend and backend

---

### Bonus Features (Optional)

Pick **ONE** if you have time:

- **Chart/Visualization:** Add a simple chart (Chart.js, Recharts, etc.)
- **Real-time Updates:** Use WebSocket or polling for live data refresh
- **Export Feature:** Export data to CSV or JSON
- **Dark Mode Toggle:** Basic theme switching

---

## 🤖 AI Tool Usage (Required)

You **MUST use AI coding tools** to complete this challenge. We want to see:

- **Code Generation:** Use AI to scaffold components, API routes, types
- **Problem Solving:** Show how you prompt AI to debug or implement features
- **Iteration:** Document when AI got it wrong and how you fixed it

**Tools you can use:**
- GitHub Copilot
- Cursor
- Claude Code
- ChatGPT/Claude/etc.
- Any AI coding assistant

---

## 📦 What to Deliver

### 1. Working Code (GitHub Repo)

**Repository structure:**
```
your-repo/
├── backend/          # NestJS/Express API
├── frontend/         # React app
├── README.md         # Setup instructions
└── PROCESS.md        # Your process documentation
```

**README.md must include:**
- Prerequisites (Node version, etc.)
- How to run backend
- How to run frontend
- API endpoints documentation

**We should be able to:**
```bash
# Backend
cd backend
npm install
npm run dev

# Frontend
cd frontend
npm install
npm run dev
```

And see your dashboard working.

---

### 2. Process Documentation (PROCESS.md)

Include the following sections:

#### **Tech Stack Choice**
- Which libraries/frameworks did you use? Why?
- What alternatives did you consider?

#### **AI Tool Usage**
- Which AI tool(s) did you use?
- **Share 5-10 examples** of prompts you used (with context)
  - Example: "Generate a NestJS controller for analytics with GET and POST endpoints"
- What worked well with AI assistance?
- What didn't work? How did you fix it?
- **Time saved estimate:** How much faster did AI make you?

#### **Development Workflow**
- Step-by-step process (planning → setup → build → test)
- Time breakdown:
  - Setup: X min
  - Backend: X min
  - Frontend: X min
  - Integration: X min
  - Testing: X min

#### **Technical Decisions**
- Key decisions you made (state management, validation approach, etc.)
- Trade-offs you made to ship within time limit
- What you'd improve with more time

#### **Results & Limitations**
- What works well?
- What doesn't work or is incomplete?
- Known bugs or edge cases

---

## 📤 Submission Format

**Send us a GitHub repo link containing:**

1. ✅ **Working code** (backend + frontend)
2. ✅ **README.md** (setup instructions)
3. ✅ **PROCESS.md** (AI usage + technical decisions)
4. ✅ **Screenshots** (add 2-3 screenshots to README showing the dashboard)

**Optional:**
- Live demo link (Vercel/Netlify for frontend, Railway/Render for backend)
- Screen recording (Loom/Screencast) showing the app in action

---

## 💡 Tips & Expectations

### **Do:**
- ✅ Use AI tools **extensively** - we want to see this
- ✅ Focus on **working over perfect** (MVP mindset)
- ✅ Write clean code, but don't over-engineer
- ✅ Show your iteration process (not just final result)
- ✅ Use TypeScript (strongly preferred)
- ✅ Test your app before submitting (does it actually run?)
- ✅ Be honest about what AI helped with and where you struggled

### **Don't:**
- ❌ Spend more than 4 hours total
- ❌ Build complex authentication/authorization
- ❌ Set up a real database (in-memory is fine)
- ❌ Create elaborate UI/UX (functional > fancy)
- ❌ Copy-paste without understanding
- ❌ Hide AI usage (we want to see it!)

---

## ⚠️ What We're Actually Testing

1. **Fullstack Competency:**
   - Can you build a working API?
   - Can you build a working React app?
   - Can you integrate frontend and backend?

2. **AI Tool Proficiency:**
   - Do you use AI effectively to accelerate development?
   - Can you prompt AI tools to solve real problems?
   - Do you know when to trust AI vs. when to verify?

3. **Practical Execution:**
   - Can you ship something working in a time limit?
   - Do you make smart trade-offs?
   - Is your code readable and maintainable?

4. **Communication:**
   - Can you document your process clearly?
   - Do you explain technical decisions well?
   - Are your setup instructions actually usable?

---

## ❓ Questions?

If anything is unclear, email us. We'll respond within 24 hours.

**Good luck! We're excited to see what you build.** 🚀
