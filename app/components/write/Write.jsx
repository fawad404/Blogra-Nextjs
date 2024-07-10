"use client"
import React, { useEffect, useState } from 'react';

const Write = ({ userSession }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/getUser?email=${userSession.email}`);
        if (response.user && response.user.isAdmin) {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    if (userSession.email) {
      fetchUser();
    }
  }, [userSession.email]);

  if (!isAdmin) {
    return null;
  }

  return (
    <a className="inline-block mr-9 text-sm font-semibold text-orange-900 hover:text-gray-900" href="/editor">
      Write
    </a>
  );
};

export default Write;
