// components/FormPage.js
import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import styles from './FormPage.module.scss';

const FormPage = () => {
  const [formValues, setFormValues] = useState({
    project: '',
    repository: '',
    pat: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formValues);
  };

  return (
    <Container className={styles.container} maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Project Form
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          label="Project"
          name="project"
          value={formValues.project}
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          label="Repository"
          name="repository"
          value={formValues.repository}
          onChange={handleInputChange}
          variant="outlined"
        />
        <TextField
          fullWidth
          margin="normal"
          label="PAT"
          name="pat"
          type="password"
          value={formValues.pat}
          onChange={handleInputChange}
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default FormPage;
