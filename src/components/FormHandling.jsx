import React, { useState } from "react";

const FormHandling = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    isSubscribed: "",
    role: "",
  });

  function handleChange(e) {
    const { name, type, value, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: fieldValue,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setFormData({
      username: "",
      email: "",
      password: "",
      isSubscribed: "",
      role: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="isSubscribed">Subscribe</label>
        <input
          type="checkbox"
          id="isSubscribed"
          name="isSubscribed"
          value={formData.isSubscribed}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="role">Role</label>
        <select
          id="role"
          name="role"
          value={formData.role}
          onChange={handleChange}
        >
          <option value="">Select Role</option>
          <option value="admin">Admin</option>
          <option value="user">User</option>
          <option value="guest">Guest</option>
        </select>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormHandling;
