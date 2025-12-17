import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Login from './components/Login';
import Documents from './components/Documents';
import AllArticles from './components/AllArticles';
import DocumentsDisciplines from './components/DocumentsDisciplines';
import ArticlePage from './components/ArticlePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/all-articles" element={<AllArticles />} />
          <Route path="/documents-disciplines" element={<DocumentsDisciplines />} />
          <Route path="/article/:id" element={<ArticlePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;