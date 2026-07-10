# VIN Decoder

A React + TypeScript SPA that allows users to decode vehicle VIN numbers using the official NHTSA API, browse available vehicle variables, and view detailed variable descriptions.

## Live Demo

🔗 https://

## Features

- Decode vehicle VIN numbers
- VIN validation
- Display decoded vehicle information
- Recent search history (last 3 VINs stored in Local Storage)
- Browse vehicle variables
- Search variables
- View variable details
- Responsive design

## Tech Stack

- React
- TypeScript
- Vite
- React Router
- TanStack Query
- Axios
- React Hook Form
- Zod
- DOMPurify
- Lucide React
- CSS Modules

## Getting Started

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Run linter

```bash
npm run lint
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_BASE_URL=https://vpic.nhtsa.dot.gov/api
```

## Data Source

Official NHTSA Vehicle Product Information Catalog (vPIC) API:

https://vpic.nhtsa.dot.gov/api/
