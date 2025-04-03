import { useState } from 'react';
import DynamicListManager from './components/DynamicListManager/DynamicListManager';
import ToastNotification from './components/ToastNotification/ToastNotification';
import './App.css';

function App() {
  const [showToast, setShowToast] = useState(true);

  return (
    <div className="app-container">
      {showToast && (
        <ToastNotification 
          message="Made by Rapha" 
          duration={5000} 
          onClose={() => setShowToast(false)} 
        />
      )}
      <DynamicListManager />
    </div>
  );
}

export default App;
