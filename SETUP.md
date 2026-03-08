# G.J.INTERIORS DESIGN STUDIO — Full Server Setup (Linux VPS)

This guide sets up the full app (FastAPI backend + React frontend) on a Linux server.

## 1) Prerequisites

- Ubuntu/Debian Linux server
- Git
- Python 3.11+
- Node.js 18+ and Yarn 1.x
- MongoDB (local or remote)

Install base tools:

```bash
sudo apt update
sudo apt install -y git python3 python3-venv python3-pip curl
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g yarn
```

## 2) Project Clone

```bash
git clone <YOUR_REPO_URL> gj-interiors
cd gj-interiors
```

## 3) Backend Setup (FastAPI)

```bash
cd backend
python3 -m venv .venv
source .venv/bin/activate
pip install -r requirements.txt
```

Create/Update `backend/.env`:

```env
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"
CORS_ORIGINS="*"

# SendGrid email notification settings
SENDGRID_API_KEY="SG_xxxxxxxxxxxxxxxxxxxxxxxxx"
SENDER_EMAIL="your_verified_sender@gmail.com"
INQUIRY_NOTIFICATION_TO="your_destination_inbox@gmail.com"
```

Run backend (production-style command):

```bash
uvicorn server:app --host 0.0.0.0 --port 8001
```

## 4) Frontend Setup (React)

```bash
cd ../frontend
yarn install
```

Create/Update `frontend/.env`:

```env
REACT_APP_BACKEND_URL="https://your-domain-or-api-url"
WDS_SOCKET_PORT=443
ENABLE_HEALTH_CHECK=false
```

Development run:

```bash
yarn start
```

Production build + serve:

```bash
yarn build
npx serve -s build -l 3000
```

## 5) Full Build Commands (Backend + Frontend)

From project root:

```bash
# Backend check
cd backend && source .venv/bin/activate && python -m pytest -q || true

# Frontend build
cd ../frontend && yarn build
```

## 6) Recommended Production Process (tmux/systemd)

Use separate services/processes:
- Backend on `:8001`
- Frontend static serve on `:3000`
- Reverse proxy (Nginx) to expose one domain

Example Nginx route pattern:
- `/api/*` -> `http://127.0.0.1:8001`
- `/*` -> `http://127.0.0.1:3000`

## 7) Health Checks

```bash
curl http://127.0.0.1:8001/api/
curl http://127.0.0.1:8001/api/inquiries
```

If SendGrid is configured, submit one inquiry from website contact form and verify email delivery.

## 8) Common Issues

- **Frontend cannot reach backend:** confirm `REACT_APP_BACKEND_URL` is correct and accessible.
- **Email not sent:** check `SENDGRID_API_KEY`, sender verification, and backend logs.
- **MongoDB errors:** verify `MONGO_URL` and DB reachability.
