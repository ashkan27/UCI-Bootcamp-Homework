function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      // Filter the data for the object with the desired sample number
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      // Use d3 to select the panel with id of `#sample-metadata`
      var PANEL = d3.select("#sample-metadata");
  
      // Use `.html("") to clear any existing metadata
      PANEL.html("");
  
      // Use `Object.entries` to add each key and value pair to the panel
      // Hint: Inside the loop, you will need to use d3 to append new
      // tags for each key-value in the metadata.
      Object.entries(result).forEach(([key, value]) => {
        PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
      });
  
      // BONUS: Build the Gauge Chart
      buildGauge(result.wfreq);
    });
}

function barchart(dropsample) {

  d3.json("samples.json").then((response) => {
    
    var samples = response.samples;
    var results = samples.filter(i => i.id == dropsample);
    var result = results[0];
    var sample_values = result.sample_values;
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;

    var x = sample_values.slice(0, 10).reverse()
    var y = otu_ids.slice(0, 10).map(id => `OTU ${id}`).reverse()
    var text = otu_labels.slice(0, 10).reverse()

  var trace = {

      x: x,
      y: y,
      text: text,
      type: "bar",
      orientation: "h",
     };

    var layout = {
      title: "Top 10 OTUs",
      xaxis: { title: "Number of OTUs"},
      marker: {
        color: 'blue',
      }
    };

    Plotly.newPlot("bar", [trace], layout);
  })
    
}

function bubblechart(dropsample) {

  d3.json("samples.json").then((response) => {
    
    var samples = response.samples;
    var results = samples.filter(i => i.id == dropsample);
    var result = results[0];
    var sample_values = result.sample_values;
    var otu_ids = result.otu_ids;
    var otu_labels = result.otu_labels;

  var trace = {
      x: otu_ids,
      y: sample_values,
      text: otu_labels,
      mode: "markers",
      marker: {
      size: sample_values,
      color: otu_ids,
        }
    }
  
  var layout = {
    title: "OTUs Per Sample",
    hovermode: "closest",
    xaxis: { title: "OTU ID" },
    yaxis: { title: "Number of Samples" },
  }
      
  Plotly.newPlot("bubble", [trace], layout);
})
}

  d3.json("samples.json").then((response) => {
    var names = response.names;

    names.forEach((i) => {
      d3.select("#selDataset").append("option").text(i).property("value", i);
    });

    var firstname = names[0];
    barchart(firstname);
    bubblechart(firstname);
    buildMetadata(firstname)
  });

  function fromdropdown(dropsample) {

    barchart(dropsample);
    bubblechart(dropsample)
    buildMetadata(dropsample);
  }