'use client';

import React, { useEffect } from 'react';
import { toast } from 'react-toastify';

const ToastNotification = () => {
  useEffect(() => {
    const notification = JSON.parse(localStorage.getItem("toast"));
    if (notification) {
      toast.success(notification);
      localStorage.removeItem("toast");
    }
  }, []);

  return null;
};

export default ToastNotification;