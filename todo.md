# Organization T Website - MVP Todo

## Project Overview
Professional website for Organization T with class registration system.

## Core Features to Implement

### 1. Pages Structure
- **Home Page** (`src/pages/Index.tsx`) - Overview of the website
- **Classes Info** (`src/pages/ClassesInfo.tsx`) - Display available classes
- **Registration** (`src/pages/Registration.tsx`) - Register for classes with full name
- **Admin Panel** (`src/pages/Admin.tsx`) - Password-protected admin interface
- **About Organization** (`src/pages/About.tsx`) - Information about Organization T

### 2. Components to Create
- **Navigation** (`src/components/Navigation.tsx`) - Main navigation bar
- **ClassCard** (`src/components/ClassCard.tsx`) - Display individual class info
- **RegistrationForm** (`src/components/RegistrationForm.tsx`) - Class registration form
- **AdminForm** (`src/components/AdminForm.tsx`) - Add new classes form

### 3. Data Management (localStorage)
- Classes data structure: id, title, description, date, time, zoomLink, maxStudents, registeredStudents
- Registration data: studentName, classId, registrationDate
- Admin authentication: simple password check

### 4. Key Functionality
- Display available classes (future dates only)
- Register with full name only
- Show registration summary with Zoom link
- Admin can add new classes
- Automatic class closure after date passes
- Professional Hebrew/English UI

### 5. Files to Modify/Create
1. `src/pages/Index.tsx` - Home page
2. `src/pages/ClassesInfo.tsx` - Classes information
3. `src/pages/Registration.tsx` - Registration page
4. `src/pages/Admin.tsx` - Admin panel
5. `src/pages/About.tsx` - About organization
6. `src/components/Navigation.tsx` - Navigation component
7. `src/components/ClassCard.tsx` - Class display component
8. `src/components/RegistrationForm.tsx` - Registration form
9. `src/App.tsx` - Update routing
10. `index.html` - Update title and meta

## Implementation Priority
1. Navigation and routing setup
2. Home page with professional design
3. Classes info page with mock data
4. Registration functionality
5. Admin panel
6. About page
7. Data persistence and validation
8. UI polish and responsiveness