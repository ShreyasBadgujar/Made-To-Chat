// import React from 'react';
// import Header from './components/Header';
// import HeroSection from './components/HeroSection';
// import FeaturesSection from './components/FeatureSection';
// import TestimonialsAndSteps from './components/TestimonialAndSteps';
// import ChatBot from './components/ChatBot';
// const App = () => {
//   return (
//     <div className="bg-gradient-to-b from-white to-blue-50 min-h-screen font-sans">
//       <Header />
//       <HeroSection />
//       <FeaturesSection/>
//       <TestimonialsAndSteps/>
      
//     </div>
//   );
// };

// export default App;


import React from 'react'
import { Route, Routes, useRoutes,  BrowserRouter as Router } from 'react-router-dom'
import Home from './pages/Home'
import Test from './pages/Test'
import LoginPage from './pages/LoginPage'

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/test' element={<Test/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      </Routes>
    </Router>
  )
}

export default App