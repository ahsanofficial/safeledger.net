import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { MessageOutlined, CameraAltOutlined, WhatsApp, Phone } from '@mui/icons-material';
import styles from './style.module.css';
import whatsapp from '../../public/whatsapp.png';
import number from '../../public/number.png'
import chat from '../../public/chatbot.png'

const RightIcon: React.FC = () => {
  const apps = [
    { name: 'Messaging', icon: <MessageOutlined /> },
    { name: 'Camera', icon: <CameraAltOutlined /> },
  ];

  const gridItemStyles = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  };

  return (
    <div className={styles.bg}>
      <div className={styles.whatsappContainer}>
        <div className={styles.whatsappIconContainer}>
          <img src={whatsapp.src} className={styles.what}/>
        </div>
        <div className={styles.whatsappIconContainer}>
          <img src={number.src} className={styles.what}/>
        </div>
        <div className={styles.whatsappIconContainer}>
          <img src={chat.src} className={styles.what}/>
        </div>
      </div>
      <div className={`${styles.new}  mb-36`}>
        <Typography variant="body1" className={`text-white gap-4 flex text-center ${styles.whatsNew}`}> What’s New </Typography>
      </div>
    </div>
  );
};

export default RightIcon;