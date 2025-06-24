export const DashboardContent = () => (
    <>
        <div style={styles.rslcontainer}>
            <div style={styles.rsl1container}>
                <h3 style={styles.title1}>Total of Legal Documents</h3>
            </div>
            <div style={styles.rsl1container}>
                <h3 style={styles.title1}>Total of Emergency Reports</h3>
            </div>
            <div style={styles.rsl1container}>
                <h3 style={styles.title1}>Total of SOS Requests</h3>
            </div>
            <div style={styles.rsl1container}>
                <h3 style={styles.title1}>Total of SOS Requests</h3>
            </div>
        </div>
        <div style={styles.rsrcontainer}>
            <h3 style={styles.title}>Country Based Users Count</h3>
        </div>
    </>
  );

  const styles = {
    rslcontainer: {
        marginLeft:'1%',
        padding:0,
        width:'76%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: '30px'
    },
    rsl1container: {
        margin:0,
        padding:0,
        width:'25%',
        height: '30%',
        border: '2px solid #00bfff',
        borderRadius: '10px',
    },
    title1: {
        textAlign: 'center',
        color: '#00bfff',
        fontSize: '20px',
        fontWeight: 'bold',
    },
    rsrcontainer: {
        marginTop:0,
        padding:'5px',
        width:'20%',
        height: '97%',
        //backgroundColor: 'rgba(0, 191, 255, 0.15)',
        border: '2px solid #00bfff',
        borderRadius: '10px',
    },
    title: {
        textAlign: 'center',
        color: '#FF7508',
        fontSize: '18px',
        fontWeight: 'bold',
    }
  };