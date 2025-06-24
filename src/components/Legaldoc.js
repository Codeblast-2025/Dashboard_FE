import React, { useState } from "react";

const LegalDocumentsForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    country: "",
    description: "",
    file: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData(prev => ({ ...prev, file: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Uploading:", formData);
    // Add your form submission logic here
  };

  const handleCancel = () => {
    setFormData({
      title: "",
      type: "",
      country: "",
      description: "",
      file: null,
    });
  };

  return (
    <form onSubmit={handleSubmit} style={styles.container}>
      <h3 style={styles.title}>Publish the Legal Notices</h3>

      <div style={styles.row}>
        <div style={styles.inputGroup}>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
        {/* <div style={styles.inputGroup}>
          <label>Type:</label>
          <input
            type="text"
            name="type"
            value={formData.type}
            onChange={handleChange}
            style={styles.input}
          />
        </div> */}
        <div style={styles.inputGroup}>
          <label>Country:</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            style={styles.input}
          />
        </div>
      </div>

      <div style={styles.inputGroupFull}>
        <label>Description:</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          style={styles.textarea}
        />
      </div>

      <div style={styles.inputGroupFull}>
        <label>Upload the document:</label>
        <div style={styles.uploadBox}>
          <label htmlFor="file" style={styles.selectFileButton}>
            Select File
          </label>
          <input
            type="file"
            id="file"
            onChange={handleFileChange}
            style={{ display: "none" }}
          />
        </div>
      </div>

      <div style={styles.buttonRow}>
        {/* <button type="button" style={styles.cancelButton} onClick={handleCancel}>
          Cancel
        </button> */}
        <button type="submit" style={styles.uploadButton}>
          Upload
        </button>
      </div>
    </form>
  );
};

export default LegalDocumentsForm;

const styles = {
  container: {
    width: '100%',
    //maxWidth: '600px',
    backgroundColor: '#ffff',
    border: '1px solid rgba(0, 191, 255, 0.5)',
    borderRadius: '8px',
    padding: '20px',
    margin: '0px auto 6px auto',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    color: '#00bfff',
    marginBottom: '20px',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '10px',
    marginBottom: '15px',
  },
  inputGroup: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroupFull: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: '15px',
  },
  input: {
    padding: '8px',
    border: '1px solid rgba(0, 191, 255, 0.5)',
    borderRadius: '4px',
    marginTop: '4px',
  },
  textarea: {
    height: '100px',
    padding: '8px',
    border: '1px solid rgba(0, 191, 255, 0.5)',
    borderRadius: '4px',
    marginTop: '4px',
  },
  uploadBox: {
    border: '1px solid rgba(0, 191, 255, 0.5)',
    padding: '50px',
    marginTop: '4px',
    textAlign: 'center',
    borderRadius: '4px',
  },
  selectFileButton: {
    display: 'inline-block',
    backgroundColor: '#00bfff',
    color: '#fff',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  buttonRow: {
    display: 'flex',
    justifyContent: 'flex-end',
    gap: '10px',
    marginTop: '20px',
  },
  cancelButton: {
    padding: '10px 20px',
    border: '1px solid #00bfff',
    backgroundColor: '#fff',
    color: '#00bfff',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
  uploadButton: {
    padding: '10px 20px',
    backgroundColor: '#00bfff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};
