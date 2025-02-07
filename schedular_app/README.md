# React Scheduler Application

A modern scheduling application built with React, TypeScript, Redux Toolkit, and Syncfusion Scheduler component.

## Features

- Interactive scheduling interface
- Event management (create, update, delete)
- Persistent storage using localStorage
- Customizable title
- Redux state management
- TypeScript support

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- A Syncfusion license key

## Setup

1. Clone the repository:
```bash
git clone <your-repository-url>
cd schedular_app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the project root:
```
REACT_APP_LICENSE=your_syncfusion_license_key_here
```

4. Start the development server:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Project Structure

```
src/
├── components/      # React components
├── store/          # Redux store and slices
├── hooks/          # Custom hooks
├── App.tsx         # Main application component
└── index.tsx       # Application entry point
```

## Available Scripts

- `npm start`: Runs the app in development mode
- `npm test`: Launches the test runner
- `npm run build`: Builds the app for production
- `npm run eject`: Ejects from Create React App

## Technologies Used

- React
- TypeScript
- Redux Toolkit
- Syncfusion Scheduler
- Tailwind CSS

## Reflection Questions

### 1. What are 3 things that you learned from this assignment?

1. **State Management & Persistence**
   - Mastered useState and useEffect hooks
   - Implemented localStorage for data persistence
   - Managed complex state updates efficiently

2. **Drag-and-Drop Functionality**
   - Built custom event drag handlers
   - Implemented dynamic date slot calculations
   - Created smooth movement animations

3. **Dynamic Calendar Rendering**
   - Developed structured monthly view logic
   - Optimized month-to-month navigation
   - Handled edge cases for date transitions

### 2. What was the most difficult part of the assignment?

The implementation of drag-and-drop functionality presented several challenges:
- Maintaining accurate event positions during movement
- Handling concurrent overlapping events
- Optimizing performance for smooth UI updates
- Managing complex state updates during drag operations

### 3. What would you have done differently given more time?

Given additional time, these improvements would be prioritized:

1. **Feature Enhancements**
   - Implementation of recurring events
   - Advanced event categorization
   - Multi-calendar support

2. **UI/UX Improvements**
   - Smooth transition animations
   - Enhanced drag feedback
   - Responsive design optimizations

3. **Infrastructure Updates**
   - Backend integration for data persistence
   - Real-time synchronization
   - Cross-device event management

## License

This project is licensed under the MIT License.
