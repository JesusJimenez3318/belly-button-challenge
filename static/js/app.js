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
        y: otuId.slice(0,10).map(otuid =>`OTU `+ otuid.toString()).reverse(),
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
    d3.json("data/samples.json").then (function(data) 
    {
    let tableValues = data.metadata.filter(subject =>subject.id.toString == demoGraphInfo)
    


















})}




function optionChanged(id) {
    barGraph(id);
    bubbleGraph(id);
    //demoGraph(id);
};












