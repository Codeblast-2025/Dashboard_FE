import React, { useState, useEffect } from "react";
import axios from "axios";
import logo1 from '../assets/images/rlogo1.png';
import logo2 from '../assets/images/rlogo-name.png';
import { FaBell } from "react-icons/fa";
import { DashboardContent } from '../components/Dashboard';
import LegaldocContent from '../components/Legaldoc';

const Home = () => {
  const [activeButton, setActiveButton] = useState('dashboard');
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const hour = new Date().getHours();

    if (hour < 12) {
      setGreeting("Good Morning");
    } else if (hour < 17) {
      setGreeting("Good Afternoon");
    } else {
      setGreeting("Good Evening");
    }
  }, []);

  return (
    <div style={styles.container}>
        <div style={styles.lcontainer}>
            <div style={styles.brandbox}>
                <img style={styles.logo1} src={logo1}></img> 
                <img style={styles.logo2} src={logo2}></img> 
            </div>
            <div style={styles. buttonsec}>
                <button
                    style={{
                    ...styles.button,
                    backgroundColor: activeButton === 'dashboard' ? 'rgba(0, 191, 255, 0.15)' : '#ffff',
                    }}
                    onClick={() => setActiveButton('dashboard')}
                >
                    Dashboard
                </button>
                <button
                    style={{
                    ...styles.button,
                    backgroundColor: activeButton === 'legal' ? 'rgba(0, 191, 255, 0.15)' : '#ffff',
                    }}
                    onClick={() => setActiveButton('legal')}
                >
                    Legal Documents
                </button>
                <button
                    style={{
                    ...styles.button,
                    backgroundColor: activeButton === 'activity1' ? 'rgba(0, 191, 255, 0.15)' : '#ffff',
                    }}
                    onClick={() => setActiveButton('activity1')}
                >
                    Activity
                </button>
                <button
                    style={{
                    ...styles.button,
                    backgroundColor: activeButton === 'activity2' ? 'rgba(0, 191, 255, 0.15)' : '#ffff',
                    }}
                    onClick={() => setActiveButton('activity2')}
                >
                    Activity
                </button>
                <button
                    style={{
                    ...styles.button,
                    backgroundColor: activeButton === 'activity3' ? 'rgba(0, 191, 255, 0.15)' : '#ffff',
                    }}
                    onClick={() => setActiveButton('activity3')}
                >
                    Activity
                </button>
                <button
                    style={styles.button1}
                    onClick={() => setActiveButton('logout')}
                >
                    Logout
                </button>
            </div>
        </div>
        <div style={styles.rcontainer}>
            <div style={styles.rfcontainer}>
                <div style={styles.leftSection}>
                    <h1 style={styles.welcomeText}>{greeting} and Welcome Back!!</h1>
                </div>
                <div style={styles.rightSection}>
                    <select style={styles.dropdown}>
                    <option value="en">English</option>
                    <option value="si">සිංහල</option>
                    <option value="ta">தமிழ்</option>
                    </select>
                    <FaBell style={styles.bell} />
                    <div style={styles.avatars}>
                    <div style={styles.avatar}></div>
                    <div style={{ ...styles.avatar, marginLeft: '-15px' }}></div>
                    <div style={{ ...styles.avatar, marginLeft: '-15px' }}></div>
                    </div>
                </div>
            </div> 
            <div style={styles.rscontainer}>
                {activeButton === 'dashboard' && <DashboardContent />}
                {activeButton === 'legal' && <LegaldocContent />}
            </div>
        </div>
    </div>
  )
}

export default Home;

const styles = {
    container: {
        margin:0,
        padding:0,
        width:'100%',
        height:'97.5vh',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        fontFamily: 'cambria'
    },
    lcontainer: {
        margin:0,
        padding:0,
        width:'20%',
        height: '100%',
        //backgroundColor: 'rgba(0, 191, 255, 0.35)',
        border: '2px solid rgba(0, 191, 255, 0.35)',
        //borderColor: '1px #00BFFF',
        borderBottomLeftRadius: '10px',
        borderBottomRightRadius: '10px',
        borderTopLeftRadius: '10px',
    },
    brandbox: {
        width:'100%',
        margin: 'auto',
    },
    logo1: {
        width:'80%',
        marginLeft: '10%',
        marginTop: '20px'
    },
    logo2: {
        width:'50%',
        marginLeft: '25%'
    },
    buttonsec: {
        display:'flex',
        flexDirection:'column',
        marginTop:'50px',
        //backgroundColor:'#000',
        gap:'20px',
        margin: '10px'
    },
    button: {
        padding: '15px 20px',
        border: '1px solid #00bfff',
        color: '#FF7508',
        boxShadow:'0 2px 2px #00bfff',
        //border: 'none',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        transition: 'background-color 0.3s ease',
    },
    button1: {
        padding: '15px 20px',
        border: '1px solid #00bfff',
        color: '#ffff',
        boxShadow:'0 2px 2px #00bfff',
        backgroundColor: '#00bfff',
        borderRadius: '8px',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
    },
    rcontainer: {
        margin:0,
        padding:0,
        width:'80%',
        height: '100%',
        backgroundColor: '#ffff'
    },
    rfcontainer: {
        margin:0,
        padding:0,
        width:'100%',
        height: '8%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0, 191, 255, 0.35)',
        borderBottomRightRadius: '10px',
        borderTopRightRadius: '10px',
    },
    leftSection: {
        flex: 1,
        marginLeft:'20px'
    },
    welcomeText: {
        color: '#FF7508',
        fontSize: '22px',
        fontWeight: 'bold',
    },
    rightSection: {
        display: 'flex',
        alignItems: 'center',
        gap: '50px',
        marginRight:'20px'
    },
    dropdown: {
        padding: '8px 12px',
        fontSize: '14px',
        borderRadius: '5px',
        border: '1px solid #FF7508',
    },
    bell: {
        fontSize: '18px',
        color: '#333',
        cursor: 'pointer',
    },
    avatars: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        width: '35px',
        height: '35px',
        borderRadius: '50%',
        backgroundColor: '#ddd',
        border: '2px solid #FF7508',
    },
    rscontainer: {
        marginTop:'1%',
        marginLeft:'1%',
        marginRight:'1%',
        padding:0,
        width:'99%',
        height: '91.5%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomRightRadius: '10px',
        borderTopRightRadius: '10px',
        gap:'5px'
    },
};