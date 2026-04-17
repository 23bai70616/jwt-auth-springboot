import React, { useEffect, useState } from "react";
import axios from "axios";
import { 
  Container, 
  Box, 
  Typography, 
  Button, 
  Paper, 
  AppBar, 
  Toolbar, 
  IconButton,
  CircularProgress,
  Fade
} from "@mui/material";
import LogoutIcon from '@mui/icons-material/Logout';
import SecurityIcon from '@mui/icons-material/Security';
import RefreshIcon from '@mui/icons-material/Refresh';

function Dashboard() {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const token = sessionStorage.getItem("token");

  const API_PROTECTED_URL = "http://localhost:8081/auth/protected";

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
    } else {
      getData();
    }
  }, [token]);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(API_PROTECTED_URL, {
        headers: {
          Authorization: "Bearer " + token
        }
      });
      setData(res.data);
    } catch (err) {
      console.error(err);
      if (err.response && err.response.status === 403) {
        sessionStorage.removeItem("token");
        window.location.href = "/";
      }
      setData("Error: Failed to fetch protected data. Check console.");
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    sessionStorage.removeItem("token");
    window.location.href = "/";
  };

  if (!token) return null;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ background: 'transparent', boxShadow: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ px: '0 !important' }}>
            <SecurityIcon sx={{ mr: 2, color: '#6366f1' }} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
              JWT Secure Panel
            </Typography>
            <Button 
              color="inherit" 
              onClick={logout} 
              startIcon={<LogoutIcon />}
              sx={{ 
                textTransform: 'none', 
                fontWeight: 600,
                color: '#f87171',
                '&:hover': { background: 'rgba(248, 113, 113, 0.1)' }
              }}
            >
              Logout
            </Button>
          </Toolbar>
        </Container>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Fade in={true} timeout={800}>
          <Paper className="glass-card" sx={{ p: 6, textAlign: 'center' }}>
            <Box sx={{ mb: 4 }}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 800 }}>
                Dashboard
              </Typography>
              <Typography variant="body1" sx={{ color: 'rgba(255,255,255,0.6)', mb: 4 }}>
                You are currently viewing a session-secured environment protected by JWT.
              </Typography>
            </Box>

            <Box sx={{ 
              p: 4, 
              mb: 4, 
              background: 'rgba(0,0,0,0.2)', 
              borderRadius: 3, 
              border: '1px dashed rgba(255,255,255,0.1)',
              minHeight: '100px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {loading ? (
                <CircularProgress size={30} sx={{ color: '#6366f1' }} />
              ) : (
                <Typography variant="h5" sx={{ color: data.includes("Error") ? '#f87171' : '#10b981', fontWeight: 600 }}>
                  {data || "Ready to fetch data..."}
                </Typography>
              )}
            </Box>

            <Button 
              variant="contained" 
              className="premium-btn"
              onClick={getData}
              startIcon={<RefreshIcon />}
              disabled={loading}
              sx={{ px: 4 }}
            >
              Fetch Protected Resource
            </Button>
          </Paper>
        </Fade>
      </Container>
    </Box>
  );
}

export default Dashboard;
