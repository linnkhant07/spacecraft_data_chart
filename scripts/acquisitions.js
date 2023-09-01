import Chart from 'chart.js/auto'



(async function() {
  const data = [
    { year: 2010, count: 10 },
    { year: 2011, count: 20 },
    { year: 2012, count: 15 },
    { year: 2013, count: 25 },
    { year: 2014, count: 22 },
    { year: 2015, count: 30 },
    { year: 2016, count: 28 },
  ];

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
})();


//working

/*
//plot the data
        (async function() {
            new Chart(
                document.getElementById('acquisitions'),
                {
                  type: 'line',
                  data: {
                    labels: data["Satellite Date/Time UTC"],
                    datasets: [
                      {
                        label: 'Solar Panel Voltage X mV',
                        data: data["Solar Panel Voltage X mV"]
                      },
            
                      {
                        label: 'Solar Panel Voltage Y mV',
                        data: data["Solar Panel Voltage Y mV"]
                      },
            
                      {
                        label: 'Solar Panel Voltage Z mV',
                        data: data["Solar Panel Voltage Z mV"]
                      }
                    ]
                  }
                }
              );
          })();
*/