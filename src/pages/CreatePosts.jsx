import React, { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { Sidebar, Navbar } from './components';
import backIcon from '../assets/icons/arrow-left.svg';
import { Link } from "react-router-dom";

const CreatePosts = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [showCategories, setShowCategories] = useState({});
  const [userMenuVisible, setUserMenuVisible] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Post submitted:', { title, content });
  };

  const toggleCategories = (category) => {
    setShowCategories((prevShowCategories) => ({
      ...prevShowCategories,
      [category]: !prevShowCategories[category],
    }));
  };

  const toggleUserMenu = () => {
    setUserMenuVisible(!userMenuVisible);
  };

  return (
    <div className="min-h-screen flex flex-col">
       <Navbar /> {/* Navbar component */}

      <div className="flex flex-1">
      <Sidebar /> {/* Sidebar component */}

       

      </div>
    </div>
  );
};

export default CreatePosts;
