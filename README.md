# Furakan Teleconsultation App

Furakan is a Flutter-based teleconsultation mobile application built by **A-Recreations/Donniya**. It enables users in Mali to:

- Start video calls with doctors  
- Select symptoms and receive specialty recommendations  
- Find and contact nearby health facilities in real time (via the Healthsites.io API)

---

## 🛠️ Tech Stack

- **Frontend:** Flutter (Dart)  
- **Backend:** Laravel (PHP) REST API  
- **Mapping & Location:** Google Maps Flutter, Geolocator  
- **HTTP:** `http` (Flutter), Axios/HTTP client (Laravel)  
- **Real-time & Video:** Agora SDK (dynamic key generation)  
- **State Management:** GetX (Flutter)  
- **Device & Utilities:** `url_launcher`

---

## 📁 Repository Structure

```

/
├── backend/                     # Laravel API code
│   ├── app/                     # Models, Controllers, Middleware
│   ├── routes/                  # API route definitions
│   ├── .env.example             # Environment variables template
│   ├── Dockerfile               # Container definition
│   └── ...                      # Other Laravel folders
│
├── frontend/                    # Flutter mobile app
│   ├── lib/
│   │   ├── screen/              # UI screens (Results, Specialists, Hospitals, etc.)
│   │   ├── services/            # API service classes
│   │   ├── utils/               # SymptomData, DiseaseSpecialty, models
│   │   └── main.dart            # App entry point
│   ├── assets/                  # Images, translations, fonts
│   └── pubspec.yaml             # Flutter dependencies
│
├── .gitignore
├── README.md                    # This file
└── LICENSE                      # (optional)

````

> **Note:** Create both `backend/` and `frontend/` folders at the project root.  
> Move your Laravel code into `backend/` and your existing Flutter project into `frontend/`.

---

## ⚙️ Setup Instructions

### 1. Backend (Laravel)

1. Copy `.env.example` to `.env` and fill in:
   ```dotenv
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
````

2. Install PHP dependencies:

   ```bash
   cd backend
   composer install
   ```
3. Run migrations & seeders:

   ```bash
   php artisan migrate --seed
   ```
4. Serve the API:

   ```bash
   php artisan serve
   ```

### 2. Frontend (Flutter)

1. In `frontend/lib/services/healthsites_api.dart`, set your API key:

   ```dart
   const healthsitesApiKey = '<YOUR_HEALTHSITES_API_KEY>';
   ```
2. Install Flutter dependencies:

   ```bash
   cd frontend
   flutter pub get
   ```
3. Run the app on an emulator or device:

   ```bash
   flutter run
   ```

---

## 🚀 How It Works

1. **User selects symptoms** → Flutter calls `POST /api/diagnose`
2. **Backend** returns disease scores, top diseases and recommended specialties
3. **User taps “Hôpitaux de garde”** → Flutter fetches nearby facilities via Healthsites API
4. **Display**: Distance-sorted list of facilities
5. **Actions**: “Call” or “Directions” icons use `url_launcher` to open dialer or maps

---

## 📄 License

© 2025 [Your Name]. All rights reserved.  
No part of this repository may be used, copied, modified, or distributed in any form or by any means without explicit written permission from the author.

```
```
