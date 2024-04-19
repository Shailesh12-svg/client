import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Visualization = () => {
  const [visualizations, setVisualizations] = useState({
    countplot_img: '',
    ph_histogram_img: '',
    all_feature_histograms_img: '',
    correlation_heatmap_img: ''
  });

  // Function to fetch visualizations from backend
  const fetchVisualizations = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/visualize_data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})
      });
      if (!response.ok) {
        throw new Error('Error fetching visualizations');
      }
      const data = await response.json();
      setVisualizations(data);
    } catch (error) {
      console.error('Error fetching visualizations:', error);
    }
  };
  

  // Call fetchVisualizations when component mounts
  useEffect(() => {
    fetchVisualizations();
  }, []);

  return (
    <div>
      <h2>Visualizations</h2>
      {/* Render countplot image */}
      {visualizations.countplot_img && (
        <div>
          <h3>Countplot</h3>
          <img src={`data:image/png;base64,${visualizations.countplot_img}`} alt="Countplot" />
        </div>
      )}

      {/* Render ph_histogram image */}
      {visualizations.ph_histogram_img && (
        <div>
          <h3>pH Histogram</h3>
          <img src={`data:image/png;base64,${visualizations.ph_histogram_img}`} alt="pH Histogram" />
        </div>
      )}

      {/* Render all_feature_histograms image */}
      {visualizations.all_feature_histograms_img && (
        <div>
          <h3>All Feature Histograms</h3>
          <img src={`data:image/png;base64,${visualizations.all_feature_histograms_img}`} alt="All Feature Histograms" />
        </div>
      )}

      {/* Render correlation_heatmap image */}
      {visualizations.correlation_heatmap_img && (
        <div>
          <h3>Correlation Heatmap</h3>
          <img src={`data:image/png;base64,${visualizations.correlation_heatmap_img}`} alt="Correlation Heatmap" />
        </div>
      )}
    </div>
  );
}

export default Visualization;
