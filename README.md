# Yogeshwaran Muralidharan - Investor Portfolio & YM Automation Web App

An investor-ready, single-page React portfolio built for **Yogeshwaran Muralidharan** (Managing Director of [YM Automation Private Limited](https://www.ymautomation.com/)).

This application showcases his technical credentials, industrial automation experience, venture metrics, and features a direct **ZeptoMail API integration** for investor and client contact.

---

## 🌟 Key Features

1. **Executive Founder Profile**:
   - **Bachelor's in Mechatronics Engineering**
   - **Master's in IoT and Sensor Systems**
   - **Postgraduate in Industrial Automation**
   - **L&T Certified Automation Engineer**
   - Hands-on experience working with top-tier Industrial Automation companies.

2. **YM Automation Venture Spotlight**:
   - Registered enterprise in Coimbatore, Tamil Nadu, India.
   - Core pillars: Industrial IoT & Sensor Telemetry, Mechatronics Robotics, PLC & SCADA control, IT-OT Convergence.
   - Interactive live topology diagram visualizing factory shop-floor telemetry to cloud analytics.

3. **Investor Pitch Highlights**:
   - Market opportunity, technical moat, dual CAPEX + OPEX revenue model.
   - Strategic 3-phase growth roadmap.
   - Interactive **Request Investor Deck Modal** for angel & VC capital dialogue.

4. **Engineering Skill Matrix**:
   - Filterable technical competency matrix highlighting expertise across PLC ladder logic, wireless sensors, microcontroller firmware, and L&T certified heavy automation standards.

5. **Integrated ZeptoMail Contact Engine**:
   - Direct integration with Zoho's **ZeptoMail REST API** (`api.zeptomail.in`).
   - Built-in **ZeptoMail API Drawer & Payload Inspector** for easy credential configuration and testing.
   - Built-in demo fallback mode when testing without an active Send-Mail token.

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure ZeptoMail (Optional)
Copy `.env.example` to `.env` and add your ZeptoMail token:
```bash
cp .env.example .env
```
Update `VITE_ZEPTOMAIL_TOKEN` with your `Zoho-enczapikey <your_token>`.

### 3. Run Locally
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## 🛠️ Tech Stack
- **Framework**: React 18 + Vite
- **Styling**: Tailwind CSS + Custom Cyber & Glassmorphism Design System
- **Icons**: Lucide React
- **Email Service**: Zoho ZeptoMail REST API
