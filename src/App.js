import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Col, Grid } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://afrobarometer.org/sites/default/files/country_images/country-mozambique.png" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to the Mozambique Poverty Profile Dashboard</h1>
        </header>
        <Grid>
          <Col xs={12} md={8} lg={8}>
            <iframe width="100%" height="520" frameborder="0" src="https://fladatakind.carto.com/viz/d1b6246e-e959-4690-95d7-efe9643f3335/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
          </Col>
          <Col xs={12} md={8} lg={4}>
            <a class="socrata-visualization-embed" data-embed-version="1" data-height="600" data-width="100%" data-vif="{&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showLegend&quot;:true},&quot;series&quot;:[{&quot;stacked&quot;:{&quot;oneHundredPercent&quot;:true},&quot;color&quot;:{&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;palette&quot;:&quot;categorical&quot;,&quot;primary&quot;:&quot;#71abd9&quot;},&quot;type&quot;:&quot;columnChart&quot;,&quot;dataSource&quot;:{&quot;measure&quot;:{&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;datasetUid&quot;:&quot;9m9z-i2ys&quot;,&quot;dimension&quot;:{&quot;grouping&quot;:{&quot;columnName&quot;:&quot;below_pov_line&quot;},&quot;columnName&quot;:&quot;province&quot;,&quot;aggregationFunction&quot;:null},&quot;filters&quot;:[]},&quot;label&quot;:null}],&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/sw4w-9mzp&quot;},&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;description&quot;:&quot;&quot;,&quot;title&quot;:&quot;&quot;}" data-width="800" href="https://ori.demo.socrata.com/dataset/Mozambique-Data/9m9z-i2ys?referrer=embed" rel="external" target="_blank">View the data</a>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default App;
