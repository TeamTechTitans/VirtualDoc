<a href="https://virtual-doc-site.web.app/" target="_blank" rel="noopener" align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" alt="VirtualDoc" srcset="https://i.ibb.co/zNZxwkb/Your-paragraph-text.png" align="center"/>
    <img alt="VirtualDoc" src="https://i.ibb.co/zNZxwkb/Your-paragraph-text.png" align="center"/>
  </picture>
</a>

## Introduction

Welcome to the VirtualDoc. The ultimate platform where doctors and patients meet virtually. The user can find a specific doctor among all the doctors on the platform according to their problems. This platform will help people get health guidance and tips by paying a small amount of money using their favorite payment method.

### Want to visit? here are the [Live Link](https://virtual-doc-site.web.app) and some credentials.

### Credentials for several Roles:
- **User :**
    - **Email :** user@gmail.com
    - **Password :** User@123
- **Doctor :**
    - **Email :** doctor@gmail.com
    - **Password :** Doctor@123
- **Admin :**
    - **Email :** admin@gmail.com
    - **Password :** Admin@123

## Features
- **Secure User Auth System:** Utilizes Firebase for multi-method registration.
- **Role-based Access Control:** Distinct privileges for User, Doctor, and Admin roles.
- **Tips section:** Where doctor can post a tip and user can read and they can also comment on that.
- **Payment Processing:** Employs SSLCOMMERZ for convenient and protected online transactions.
- **Scheduled Appointment:** User can book a appointment from appointment page.
- **Personalized Profile Customization:** Customize your profile to suit your preferences.
- **User-friendly Interface:** Enjoy an intuitive interface with customizable dark and light modes.
- **Video and Audio Integration:** Seamlessly integrate video and audio options for enhanced communication. 
- **Get Prescription after Consultation:** After video consultation with doctor, doctor can prescribe medicine and user can download it.

## Technology:

- **React.js:**  Versatile and widely adopted JavaScript library for constructing user interfaces.
- **TanStack Query v5:** TanStack Query v5 is a powerful data fetching library that simplifies complex data fetching logic in React applications.
- **Material Tailwind:** Resourceful utility-first CSS framework boasting predesigned UI components.
- **SSLCOMMERZ:** SSLCOMMERZ is a secure and flexible payment processing platform, ensuring seamless and reliable transactions.
- **Authentication:** Firebase Authentication provides simple yet secure authentication services
- **Swiper.js::** Lightweight, feature-rich library for creating animated slideshow interfaces.

## Environment Variables:

- **VITE_apiKey:** Firebase API key for authentication and accessing Firebase services. (obtain from Firebase console: [Firebase Console](https://console.firebase.google.com/))
- **VITE_authDomain:** Firebase authentication domain. (obtain from Firebase console: [Firebase Console](https://console.firebase.google.com/))
- **VITE_projectId:** Firebase project ID. (obtain from Firebase console: [Firebase Console](https://console.firebase.google.com/))
- **VITE_storageBucket:** Firebase storage bucket for storing user-generated content. (obtain from Firebase console: [Firebase Console](https://console.firebase.google.com/))
- **VITE_messagingSenderId:** Firebase messaging sender ID for sending notifications. (obtain from Firebase console: [Firebase Console](https://console.firebase.google.com/))
- **VITE_appId:** Firebase application ID. (obtain from Firebase console: [Firebase Console](https://console.firebase.google.com/))
- **VITE_measurementId:** Firebase application ID. (obtain from Firebase console: [Firebase Console](https://console.firebase.google.com/))
- **VITE_GOOGLE_APIKEY:** Api key for google map.
- **VITE_IMAGE_HOSTING_KEY:** This is used on registration page for uploading image , taken from imagebb (obtain from Firebase console: [imgbb api](https://api.imgbb.com/))
- **VITE_MODE:** "development"
- **VITE_SERVER_DEV:** "http://localhost:5000"
- **VITE_SERVER_PROD:** You can use local server link here . Or collect the server production link server repo.

### **To run run locally you also need to [clone](https://github.com/TeamTechTitans/VirtualDoc-Backend) the server repository.**


## Instructions:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/TeamTechTitans/VirtualDoc.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd VirtualDoc
   then 
   cd client
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env.local` file:**

   - Create a `.env.local` file in the root directory of your project.
   - Copy the required environment variables from the provided `.env.example` file.

5. **Start the development server:**

   ```bash
   npm run dev
   ```

6. **View the app:**

   - Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to view the app.

That's it! You've successfully set up and run the app locally.

Server Repo: [VirtualDoc Server Repo](https://github.com/TeamTechTitans/VirtualDoc-Backend)
