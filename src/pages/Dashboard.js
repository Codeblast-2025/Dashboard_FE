{/*import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: "", email: "" });

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:5000/api/users");
    setUsers(res.data);
  };

  const addUser = async () => {
    await axios.post("http://localhost:5000/api/users", form);
    setForm({ name: "", email: "" });
    fetchUsers();
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:5000/api/users/${id}`);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>User Dashboard</h2>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <button onClick={addUser}>Add User</button>
      <ul>
        {users.map((u) => (
          <li key={u._id}>
            {u.name} ({u.email}){" "}
            <button onClick={() => deleteUser(u._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;\*/}
import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:5000"; // Change if needed

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [loadingDocs, setLoadingDocs] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const fetchDocuments = async () => {
    setLoadingDocs(true);
    try {
      const res = await axios.get(`${API_BASE_URL}/api/admin-documents/fetch`);
      setDocuments(res.data);
    } catch (error) {
      alert("Failed to fetch documents");
    } finally {
      setLoadingDocs(false);
    }
  };

  const handleUpload = async () => {
    if (!selectedFile) return alert("Please select a file to upload");

    setUploading(true);
    const formData = new FormData();
    formData.append("document", selectedFile);

    try {
      await axios.post(`${API_BASE_URL}/api/admin-documents/upload`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("File uploaded successfully");
      setSelectedFile(null);
      fetchDocuments();
    } catch (error) {
      alert("Upload failed");
    } finally {
      setUploading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  return (
    <div style={styles.container}>
      <h2>📂 Admin Document Dashboard</h2>

      <div style={styles.card}>
        <h4>Upload Document</h4>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload} disabled={uploading} style={styles.uploadButton}>
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </div>

      <div style={styles.card}>
        <h4>Available Documents</h4>
        {loadingDocs ? (
          <p>Loading...</p>
        ) : documents.length === 0 ? (
          <p>No documents uploaded yet.</p>
        ) : (
          <ul>
            {documents.map((doc) => (
              <li key={doc.id}>
                <a href={doc.url} target="_blank" rel="noreferrer">
                  {doc.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
    maxWidth: "600px",
    margin: "auto",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    marginBottom: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  },
  uploadButton: {
    marginTop: "10px",
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
};

