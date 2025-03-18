import React from "react";

const Usercard = ({ profilePhoto, name, email, phone, address }) => {
  return (
    <div style={styles.card}>
      <img src={profilePhoto} alt="Profile" style={styles.photo} />
      <h2 style={styles.name}>{name}</h2>
      <p style={styles.info}><strong>Email:</strong> {email}</p>
      <p style={styles.info}><strong>Phone:</strong> {phone}</p>
      <p style={styles.info}><strong>Address:</strong> {address}</p>
    </div>
  );
};

const styles = {
  card: {
    width: "280px",
    backgroundColor: "#333",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.5)",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
    color: "#f5f5f5",
    border: "2px solid #444",
  },
  photo: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    marginBottom: "10px",
    border: "4px solid #555",
  },
  name: {
    fontSize: "1.6rem",
    fontWeight: "600",
    color: "#f5f5f5",
    marginBottom: "10px",
  },
  info: {
    color: "#bbb",
    fontSize: "1rem",
    margin: "5px 0",
    lineHeight: "1.4",
  },
};


export default Usercard;
