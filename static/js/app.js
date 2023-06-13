d3.json("data/samples.json").then(function(data) 
{
    console.log(data);
    function samples() { 
        for (let i = 0; i < data.names.length; i++) {
           d3.select("#selDataset").append("option").text(data.names[i])
          }}   
samples()
})

function barGraph(barData){
d3.json("data/samples.json").then (function(data)
{
    let graphValues = data.samples.filter(data =>data.id == barData)

    // graph values
    let sampleValues = graphValues[0].sample_values
    let otuId = graphValues[0].otu_ids
    let otuLabels = graphValues[0].otu_labels
    
    trace1 = {
        x: sampleValues.slice(0,10).reverse(),
        y: otuId.slice(0,10).map(otuid =>`OTU `+ otuid).reverse(),
        text: otuLabels.slice(0,10).reverse(),
        type: 'bar',
        orientation: 'h'
    }
let graphData = [trace1];

let layout = {
    title: "Top 10 OTU",
    xaxis: {title: "Sample Values"},
    yaxis: {title: "OTU ID"}
};

Plotly.newPlot("bar", graphData, layout, );
})}
//Deploy graph 
barGraph("940") 

// Create a bubble chart
function bubbleGraph(bubbleData){
    d3.json("data/samples.json").then (function(data) {

    let graphValues = data.samples.filter(data =>data.id == bubbleData)

    let sampleValues = graphValues[0].sample_values
    let otuId = graphValues[0].otu_ids
    let otuLabels = graphValues[0].otu_labels


     trace1 = {
        x: otuId,
        y: sampleValues,
        text: otuLabels,
        mode: 'markers',
        marker: {
          size: sampleValues,
          color: otuId,
          colorscale: 'Rainbow'
        }
      };
      
       data = [trace1];
      
       layout = {
        title: 'OTU Data',
        xaxis: {title: "OTU ID"},
        yaxis: {title: "Values Values"},
        showlegend: false,
        height: 600,
        width: 1000
      };
      
Plotly.newPlot('bubble', data, layout);
})}
//Deplot bubble chart
bubbleGraph("940")


function demoGraph(demoGraphInfo){
    d3.json("data/samples.json").then (function(data) {
    let tableValues = data.metadata.filter(subject =>subject.id == demoGraphInfo)[0]
    let dataValues = d3.select("#sample-metadata")

    //clear selection of values

    dataValues.html("");
    Object.entries(tableValues)
    .forEach(([x,y]) =>  dataValues
    .append("p").text(`${x}: ${y}`))
    
})}

demoGraph("940")


function gaugeGraph(gaugeData){
    d3.json("data/samples.json").then (function(data) {
    let wfreq = data.metadata.filter(subject =>subject.id == gaugeData)[0]["wfreq"]

let datagauge = [
    {
      value: wfreq,
      title: { text: "Belly Button Washing Frequency <br><sub> Scrubs per Week</sub>" },
      type: "indicator",
      mode: "gauge+number",
      gauge: {
        axis: { range: [null, 9] },
        bar: { color: "royalblue" },
        borderwidth:1,
        steps: [
          { range: [0, 1], color: "F94144" },
          { range: [1,2], color: "F3722C" },
          { range: [2,3], color: "F8961E" },
          { range: [3,4], color: "F9844A" },
          { range: [4,5], color: "F9C74F" },
          { range: [5,6], color: "90BE6D" },
          { range: [6,7], color: "358f80" },
          { range: [7,8], color: "248277" },
          { range: [8,9], color: "14746f" }
        ],
        threshold: {
          line: { color: "red", width: 4 },
          thickness: 0.75,
          value: 9
        }
      }
    }
  ];

  let layout = { width: 600, height: 450, margin: { t: 0, b: 0 } };
  Plotly.newPlot('gauge', datagauge, layout);
})};

gaugeGraph("940")


function optionChanged(id) {
    barGraph(id);
    bubbleGraph(id);
    demoGraph(id);
    gaugeGraph(id);
};












