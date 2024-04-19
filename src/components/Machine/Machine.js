import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; // Assuming you're using Bootstrap for layout
import Navbar from '../NavBar/NavBar';

const PredictWaterQuality = () => {
  const [formData, setFormData] = useState({
    'Colour (TCU)': 0,
    'Turbidity (NTU)': 0,
    'pH': 0,
    'Conductivity (uS/cm)': 0,
    'Total Dissolved Solids (mg/l)': 0,
    'Total Hardness (mg/l as CaCO3)': 0,
    'Aluminium (mg/l)': 0,
    'Chloride (mg/l)': 0,
    'Total Iron (mg/l)': 0,
    'Sodium (mg/l)': 0,
    'Sulphate (mg/l)': 0,
    'Zinc (mg/l)': 0,
    'Magnesium (mg/l)': 0,
    'Calcium (mg/l)': 0,
    'Potassium (mg/l)': 0,
    'Nitrate (mg/l)': 0,
    'Phosphate (mg/l)': 0,
  });
  const [predictionResult, setPredictionResult] = useState(''); // State to hold the prediction result
  const [token, setToken] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: parseFloat(value) });
  };

  const handleData =()=>{
    window.location.href="./data"
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Fetch token first
      const tokenResponse = await fetch('http://127.0.0.1:5000/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: 'test', password: 'test' }), // Replace with actual email and password
      });
      if (tokenResponse.ok) {
        const { access_token } = await tokenResponse.json();
        setToken(access_token);

        // Use the obtained token for the prediction request
        const response = await fetch('http://127.0.0.1:5000/predict_water_quality', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${access_token}` // Include the JWT token in the Authorization header
          },
          body: JSON.stringify(formData)
        });
        if (response.ok) {
          const responseData = await response.json();
          setPredictionResult(responseData.result);
        } else {
          throw new Error('Failed to submit form');
        }
      } else {
        throw new Error('Failed to obtain token');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const handleIncrement = (name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: prevData[name] + 50,
    }));
  };

  const handleDecrement = (name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: prevData[name] - 50,
    }));
  };


  return (
    <>
    <Navbar/>
    <Container>
      <h1>Predict Water Quality</h1>
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col>
          <Form.Group controlId="Colour (TCU)" className="input-group">
            <Form.Label className="input-label">Colour (TCU)</Form.Label>
                <div className="input-container">
            <Form.Control type="number" name="Colour (TCU)" value={formData['Colour (TCU)']} onChange={handleChange} className="input-field" />
                <div className="button-group">
                <Button size='sm' onClick={() => handleIncrement("Colour (TCU)")} variant="success">+</Button>
                <Button size='sm' onClick={() => handleDecrement("Colour (TCU)")} variant="danger">-</Button>
            </div>
        </div>
        </Form.Group>
             <Form.Group controlId="Turbidity (NTU)">
              <Form.Label>Turbidity (NTU)</Form.Label>
              <Form.Control type="number" name="Turbidity (NTU)" value={formData['Turbidity (NTU)']} onChange={handleChange} />
              <Button  size='sm'onClick={() => handleIncrement("Turbidity (NTU)")}>+</Button>
              <Button  size='sm' onClick={() => handleDecrement("Turbidity (NTU)")}>-</Button>
            </Form.Group>
            <Form.Group controlId="pH">
              <Form.Label>pH</Form.Label>
              <Form.Control type="number" name="pH" value={formData.pH} onChange={handleChange} />
              <Button  size='sm'onClick={() => handleIncrement("pH")}>+</Button>
              <Button  size='sm' onClick={() => handleDecrement("pH")}>-</Button>
            </Form.Group>
            <Form.Group controlId="Conductivity (uS/cm)">
              <Form.Label>Conductivity (uS/cm)</Form.Label>
              <Form.Control type="number" name="Conductivity (uS/cm)" value={formData['Conductivity (uS/cm)']} onChange={handleChange} />
              <Button  size='sm'onClick={() => handleIncrement("Conductivity (uS/cm)")}>+</Button>
              <Button  size='sm' onClick={() => handleDecrement("Conductivity (uS/cm)")}>-</Button>
            </Form.Group>
            <Form.Group controlId="Total Dissolved Solids (mg/l)">
              <Form.Label>Total Dissolved Solids (mg/l)</Form.Label>
              <Form.Control type="number" name="Total Dissolved Solids (mg/l)" value={formData['Total Dissolved Solids (mg/l)']} onChange={handleChange} />
              <Button  size='sm'onClick={() => handleIncrement("Total Dissolved Solids (mg/l)")}>+</Button>
              <Button  size='sm' onClick={() => handleDecrement("Total Dissolved Solids (mg/l)")}>-</Button>
            </Form.Group>
            <Form.Group controlId="Total Hardness (mg/l as CaCO3)">
              <Form.Label>Total Hardness (mg/l as CaCO3)</Form.Label>
              <Form.Control type="number" name="Total Hardness (mg/l as CaCO3)" value={formData['Total Hardness (mg/l as CaCO3)']} onChange={handleChange} />
              <Button  size='sm'onClick={() => handleIncrement("Total Hardness (mg/l as CaCO3)")}>+</Button>
              <Button  size='sm' onClick={() => handleDecrement("Total Hardness (mg/l as CaCO3)")}>-</Button>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="Aluminium (mg/l)">
              <Form.Label>Aluminium (mg/l)</Form.Label>
              <Form.Control type="number" name="Aluminium (mg/l)" value={formData['Aluminium (mg/l)']} onChange={handleChange} />
              <Button  size='sm'onClick={() => handleIncrement("Aluminium (mg/l)")}>+</Button>
              <Button  size='sm' onClick={() => handleDecrement("Aluminium (mg/l)")}>-</Button>
            </Form.Group>
            <Form.Group controlId="Chloride (mg/l)">
              <Form.Label>Chloride (mg/l)</Form.Label>
              <Form.Control type="number" name="Chloride (mg/l)" value={formData['Chloride (mg/l)']} onChange={handleChange} />
              <Button  size='sm'onClick={() => handleIncrement("Chloride (mg/l)")}>+</Button>
              <Button  size='sm' onClick={() => handleDecrement("Chloride (mg/l)")}>-</Button>
            </Form.Group>
            <Form.Group controlId="Total Iron (mg/l)">
              <Form.Label>Total Iron (mg/l)</Form.Label>
              <Form.Control type="number" name="Total Iron (mg/l)" value={formData['Total Iron (mg/l)']} onChange={handleChange} />
              <Button  size='sm'onClick={() => handleIncrement("Total Iron (mg/l)")}>+</Button>
              <Button  size='sm' onClick={() => handleDecrement("Total Iron (mg/l)")}>-</Button>
            </Form.Group>
            <Form.Group controlId="Sodium (mg/l)">
              <Form.Label>Sodium (mg/l)</Form.Label>
              <Form.Control type="number" name="Sodium (mg/l)" value={formData['Sodium (mg/l)']} onChange={handleChange} />
              <Button  size='sm'onClick={() => handleIncrement("Sodium (mg/l)")}>+</Button>
              <Button  size='sm' onClick={() => handleDecrement("Sodium (mg/l)")}>-</Button>
            </Form.Group>
            <Form.Group controlId="Sulphate (mg/l)">
              <Form.Label>Sulphate (mg/l)</Form.Label>
              <Form.Control type="number" name="Sulphate (mg/l)" value={formData['Sulphate (mg/l)']} onChange={handleChange} />
              <Button  size='sm'onClick={() => handleIncrement("Sulphate (mg/l)")}>+</Button>
              <Button  size='sm' onClick={() => handleDecrement("Sulphate (mg/l)")}>-</Button>
            </Form.Group>
            <Form.Group controlId="Zinc (mg/l)">
              <Form.Label>Zinc (mg/l)</Form.Label>
              <Form.Control type="number" name="Zinc (mg/l)" value={formData['Zinc (mg/l)']} onChange={handleChange} />
              <Button  size='sm'onClick={() => handleIncrement("Zinc (mg/l)")}>+</Button>
              <Button  size='sm' onClick={() => handleDecrement("Zinc (mg/l)")}>-</Button>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="Magnesium (mg/l)">
              <Form.Label>Magnesium (mg/l)</Form.Label>
              <Form.Control type="number" name="Magnesium (mg/l)" value={formData['Magnesium (mg/l)']} onChange={handleChange} />
              <Button  size='sm'onClick={() => handleIncrement("Magnesium (mg/l)")}>+</Button>
              <Button  size='sm' onClick={() => handleDecrement("Magnesium (mg/l)")}>-</Button>
            </Form.Group>
            <Form.Group controlId="Calcium (mg/l)">
              <Form.Label>Calcium (mg/l)</Form.Label>
              <Form.Control type="number" name="Calcium (mg/l)" value={formData['Calcium (mg/l)']} onChange={handleChange} />
              <Button  size='sm'onClick={() => handleIncrement("Calcium (mg/l)")}>+</Button>
              <Button  size='sm' onClick={() => handleDecrement("Calcium (mg/l)")}>-</Button>
            </Form.Group>
            <Form.Group controlId="Potassium (mg/l)">
              <Form.Label>Potassium (mg/l)</Form.Label>
              <Form.Control type="number" name="Potassium (mg/l)" value={formData['Potassium (mg/l)']} onChange={handleChange} />
              <Button  size='sm'onClick={() => handleIncrement("Potassium (mg/l)")}>+</Button>
              <Button  size='sm' onClick={() => handleDecrement("Potassium (mg/l)")}>-</Button>
            </Form.Group>
            <Form.Group controlId="Nitrate (mg/l)">
              <Form.Label>Nitrate (mg/l)</Form.Label>
              <Form.Control type="number" name="Nitrate (mg/l)" value={formData['Nitrate (mg/l)']} onChange={handleChange} />
              <Button  size='sm'onClick={() => handleIncrement("Nitrate (mg/l)")}>+</Button>
              <Button  size='sm' onClick={() => handleDecrement("Nitrate (mg/l)")}>-</Button>
            </Form.Group>
            <Form.Group controlId="Phosphate (mg/l)">
              <Form.Label>Phosphate (mg/l)</Form.Label>
              <Form.Control type="number" name="Phosphate" value={formData['Phosphate (mg/l)']} onChange={handleChange} />
              <Button  size='sm'onClick={() => handleIncrement("Phosphate (mg/l)")}>+</Button>
              <Button  size='sm' onClick={() => handleDecrement("Phosphate (mg/l)")}>-</Button>
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit">Predict Water Quality</Button>
        <Button type="button" onClick={handleData}>Data-Visualization</Button>
      </Form> 
      {predictionResult && (
          <div>
            <h1>Prediction Result:</h1>
            <h1>Water is :- {predictionResult}</h1>
          </div>
        )}
    </Container>
    </>
  );
};


export default PredictWaterQuality;
