#!/usr/bin/env bash
set -euo pipefail

echo "[1/7] Installing system dependencies..."
sudo apt update
sudo apt install -y git python3 python3-venv python3-pip curl

if ! command -v node >/dev/null 2>&1; then
  curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
  sudo apt install -y nodejs
fi

if ! command -v yarn >/dev/null 2>&1; then
  sudo npm install -g yarn
fi

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "[2/7] Backend virtual env setup..."
cd "$PROJECT_ROOT/backend"
python3 -m venv .venv
source .venv/bin/activate
pip install --upgrade pip
pip install -r requirements.txt

echo "[3/7] Writing backend .env template if missing..."
if [ ! -f .env ]; then
  cat > .env << 'EOF'
MONGO_URL="mongodb://localhost:27017"
DB_NAME="test_database"
CORS_ORIGINS="*"
SENDGRID_API_KEY="SG_xxxxxxxxxxxxxxxxxxxxxxxxx"
SENDER_EMAIL="your_verified_sender@gmail.com"
INQUIRY_NOTIFICATION_TO="your_destination_inbox@gmail.com"
EOF
fi

echo "[4/7] Frontend dependency setup..."
cd "$PROJECT_ROOT/frontend"
yarn install

echo "[5/7] Writing frontend .env template if missing..."
if [ ! -f .env ]; then
  cat > .env << 'EOF'
REACT_APP_BACKEND_URL="https://your-domain-or-api-url"
WDS_SOCKET_PORT=443
ENABLE_HEALTH_CHECK=false
EOF
fi

echo "[6/7] Building frontend..."
yarn build

echo "[7/7] Setup complete"
echo ""
echo "Next commands:"
echo "- Backend run:  cd $PROJECT_ROOT/backend && source .venv/bin/activate && uvicorn server:app --host 0.0.0.0 --port 8001"
echo "- Frontend run: cd $PROJECT_ROOT/frontend && npx serve -s build -l 3000"
echo "- Health check: curl http://127.0.0.1:8001/api/"
