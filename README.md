#Furakan Teleconsultation App

Furakan is a Flutter-based teleconsultation mobile application built by A‑Recreations/Donniya. It enables users in Mali to video calls with the doctors, select symptoms, receive specialty recommendations, and—using the Healthsites.io API—find and contact nearby health facilities in real time.

🛠️ Tech Stack

Frontend: Flutter (Dart)

Backend: Laravel (PHP) REST API

Mapping & Location: Google Maps Flutter, Geolocator

HTTP: http (Flutter), Axios/HTTP client (Laravel)

Real-time & Video: Agora SDK (Dynamic Key generation)

State Management: GetX (Flutter)

Device & Utilities: url_launcher

📁 Repository Structure

/ (root)
├── backend/                     # Laravel API code
│   ├── app/                     # Models, Controllers, Middleware
│   ├── routes/                  # API routes definitions
│   ├── .env.example             # Environment variables template
│   ├── Dockerfile               # Container definition for backend
│   └── ...                      # Other Laravel standard folders
│
├── frontend/                    # Flutter mobile app
│   ├── lib/
│   │   ├── screen/              # All UI screens (Result, Specialists, Hospitals, etc.)
│   │   ├── services/            # API service classes
│   │   ├── utils/               # SymptomData, DiseaseSpecialty, models
│   │   └── main.dart            # App entrypoint
│   ├── assets/                  # Images, translations, fonts
│   └── pubspec.yaml             # Flutter dependencies
│
├── .gitignore
├── README.md                    # This file
└── LICENSE                      # (optional)

Note: Create both backend/ and frontend/ folders at the project root. Move the Laravel code into backend/, and your existing Flutter project into frontend/.

⚙️ Setup Instructions

1. Backend (Laravel)

Copy .env.example to .env and fill in:

APP_NAME=FurakanAPI
APP_URL=http://localhost:8000
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=furakan_db
DB_USERNAME=root
DB_PASSWORD=secret

AGORA_APP_ID=your_agora_app_id
AGORA_APP_CERTIFICATE=your_agora_certificate

Install PHP dependencies:

cd backend
composer install

Run migrations & seeders:

php artisan migrate --seed

Serve the API:

php artisan serve

2. Frontend (Flutter)

In frontend/lib/services/, open healthsites_api.dart (or similar) and set:

const healthsitesApiKey = '<YOUR_HEALTHSITES_API_KEY>';

Install Flutter dependencies:

cd frontend
flutter pub get

Run the app on emulator or device:

flutter run

🚀 How It Works

User selects symptoms → Flutter calls backend /api/diagnose → receives disease scores.

Backend returns top diseases and recommended specialties.

User taps Hôpitaux de garde → Flutter fetches nearby facilities via Healthsites API → displays distance-sorted list.

Tapping Call or Directions icons uses url_launcher to open phone dialer or maps.

📄 License

Add your chosen license here (e.g., MIT).

