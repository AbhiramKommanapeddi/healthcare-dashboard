import React, { useState } from 'react';
import { motion } from 'framer-motion';
import frontImage from '../../assets/images/human-body-front.png';
import HealthIndicators from './HealthIndicators';
import ActivityChart from './ActivityChart';
import AppointmentList from './AppointmentList';

const Dashboard = () => {
  const [selectedBodyPart, setSelectedBodyPart] = useState(null);

  const healthData = [
    // ... existing code ...
  ];

  return (
    <main style={{
      background: 'linear-gradient(135deg, #f6f9fc 0%, #edf2f7 100%)',
      minHeight: '100vh',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Dynamic background patterns */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 10% 20%, rgba(216, 241, 230, 0.46) 0%, transparent 46.9%),\n' +
                  'radial-gradient(circle at 90% 80%, rgba(155, 200, 245, 0.28) 0%, transparent 56.9%),\n' +
                  'radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.9) 0%, transparent 100%)',
        zIndex: 0,
        pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '2rem',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            padding: '1.5rem 2rem',
            borderRadius: '20px',
            boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)'
          }}
        >
          <h1 style={{
            fontSize: '2.5rem',
            background: 'linear-gradient(135deg, #1a365d 0%, #2563eb 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '0'
          }}>Health Dashboard</h1>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            alignItems: 'center'
          }}>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 8px 20px rgba(37, 99, 235, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              style={{
                padding: '0.75rem 1.5rem',
                borderRadius: '50px',
                border: 'none',
                background: 'linear-gradient(135deg, #2563eb, #1e40af)',
                color: 'white',
                cursor: 'pointer',
                fontSize: '1rem',
                boxShadow: '0 4px 15px rgba(37, 99, 235, 0.2)',
                transition: 'all 0.3s ease'
              }}
            >
              View Reports
            </motion.button>
          </div>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '2rem',
          marginBottom: '2rem'
        }}>
          <motion.div 
            className="model-viewer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              boxShadow: '0 8px 32px rgba(31, 38, 135, 0.15)',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'radial-gradient(circle at center, rgba(37, 99, 235, 0.1) 0%, transparent 70%)',
              animation: 'rotate 20s linear infinite',
              pointerEvents: 'none'
            }} />
            <motion.img 
              src={frontImage}
              alt="Human body front view"
              whileHover={{ scale: 1.05 }}
              style={{
                height: '500px',
                width: 'auto',
                objectFit: 'contain',
                filter: 'drop-shadow(0 8px 16px rgba(0,0,0,0.1))'
              }}
            />
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {healthData.map((item) => (
              <motion.div
                key={item.id}
                whileHover={{ 
                  scale: 1.02, 
                  boxShadow: '0 10px 25px rgba(31, 38, 135, 0.15)',
                  background: 'rgba(255, 255, 255, 0.9)'
                }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  padding: '1.5rem',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  boxShadow: '0 8px 32px rgba(31, 38, 135, 0.1)',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Decorative gradient line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '4px',
                  height: '100%',
                  background: item.color
                }} />

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <span style={{ 
                    fontSize: '2rem', 
                    marginRight: '1rem',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
                  }}>{item.icon}</span>
                  <div>
                    <h3 style={{ 
                      margin: '0', 
                      color: '#1a365d', 
                      fontSize: '1.25rem',
                      fontWeight: '600'
                    }}>{item.title}</h3>
                    <span style={{
                      fontSize: '0.875rem',
                      color: item.status === 'Monitor' ? '#dc2626' : '#059669',
                      fontWeight: '500'
                    }}>{item.status}</span>
                  </div>
                  <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                    <div style={{ 
                      fontSize: '1.5rem', 
                      fontWeight: 'bold', 
                      color: '#1a365d',
                      textShadow: '0 2px 4px rgba(0,0,0,0.05)'
                    }}>
                      {item.metrics.health}%
                    </div>
                    <div style={{
                      fontSize: '0.875rem',
                      color: item.metrics.risk === 'Low' ? '#059669' : '#dc2626',
                      fontWeight: '500'
                    }}>
                      {item.metrics.risk} Risk
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {item.conditions.map((condition, index) => (
                    <span
                      key={index}
                      style={{
                        padding: '0.5rem 1rem',
                        background: 'rgba(255, 255, 255, 0.9)',
                        borderRadius: '50px',
                        fontSize: '0.875rem',
                        color: '#4b5563',
                        border: '1px solid rgba(203, 213, 225, 0.5)',
                        backdropFilter: 'blur(4px)',
                        boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease'
                      }}
                    >
                      {condition}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <ActivityChart />
        <AppointmentList />
      </div>
    </main>
  );
};

export default Dashboard;