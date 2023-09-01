// Function to fetch telemetry data and render the chart using Axios
async function fetchDataAndRenderChart() {
    try {
      // Fetch telemetry data from the backend API using Axios
      const response = await axios.get('/api/data');
      const data = response.data;
  
      new Chart(
        document.getElementById('acquisitions'),
        {
          type: 'line',
          data: {
            labels: data.map(row => row.year),
            datasets: [
              {
                label: 'Acquisitions by year',
                data: data.map(row => row.count)
              },
    
              {
                label: 'Acquisitions by decade',
                data: data.map(row => row.count * 2)
              },
    
              {
                label: 'Acquisitions by millenium',
                data: data.map(row => row.count * 0.5)
              }
            ]
          }
        }
      );
    } catch (error) {
      console.error('Error fetching or rendering data:', error);
    }
  }
  
  // Call the function to fetch and render the chart when the page loads
  fetchDataAndRenderChart();