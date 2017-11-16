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
        <div className="mz-section mz-image">
        </div>
        <Grid>

        </Grid>
        <Grid>
          <Col xs={12} md={8} lg={6}>
            <iframe width="100%" height="520" frameborder="0" src="https://fladatakind.carto.com/viz/d1b6246e-e959-4690-95d7-efe9643f3335/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
          </Col>
          <Col xs={12} md={8} lg={6}>
            <a className="socrata-visualization-embed" data-embed-version="1" data-height="500" data-vif="{&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showLegend&quot;:true},&quot;series&quot;:[{&quot;stacked&quot;:{&quot;oneHundredPercent&quot;:true},&quot;color&quot;:{&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;palette&quot;:&quot;categorical&quot;,&quot;primary&quot;:&quot;#71abd9&quot;},&quot;type&quot;:&quot;columnChart&quot;,&quot;dataSource&quot;:{&quot;measure&quot;:{&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;datasetUid&quot;:&quot;9m9z-i2ys&quot;,&quot;dimension&quot;:{&quot;grouping&quot;:{&quot;columnName&quot;:&quot;below_pov_line&quot;},&quot;columnName&quot;:&quot;province&quot;,&quot;aggregationFunction&quot;:null},&quot;filters&quot;:[]},&quot;label&quot;:null}],&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/sw4w-9mzp&quot;},&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;description&quot;:&quot;&quot;,&quot;title&quot;:&quot;&quot;}" data-width="100%" href="https://ori.demo.socrata.com/dataset/Mozambique-Data/9m9z-i2ys?referrer=embed" rel="external" target="_blank">View the data</a>
          </Col>
        </Grid>
        <div className="mz-section black">
          <Grid>
            <Col xs={12} md={8} lg={6}>
              <a className="socrata-visualization-embed" data-embed-version="1" data-height="500" data-vif="{&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showLegend&quot;:true},&quot;series&quot;:[{&quot;stacked&quot;:{&quot;oneHundredPercent&quot;:true},&quot;color&quot;:{&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;palette&quot;:&quot;categorical&quot;,&quot;primary&quot;:&quot;#71abd9&quot;},&quot;type&quot;:&quot;columnChart&quot;,&quot;dataSource&quot;:{&quot;measure&quot;:{&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;datasetUid&quot;:&quot;9m9z-i2ys&quot;,&quot;dimension&quot;:{&quot;grouping&quot;:{&quot;columnName&quot;:&quot;below_pov_line&quot;},&quot;columnName&quot;:&quot;province&quot;,&quot;aggregationFunction&quot;:null},&quot;filters&quot;:[]},&quot;label&quot;:null}],&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/sw4w-9mzp&quot;},&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;description&quot;:&quot;&quot;,&quot;title&quot;:&quot;&quot;}" data-width="100%" href="https://ori.demo.socrata.com/dataset/Mozambique-Data/9m9z-i2ys?referrer=embed" rel="external" target="_blank">View the data</a>
            </Col>
            <Col xs={12} md={8} lg={6}>
              <div className="mz-text-section">
                <p>Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.</p>
                <p>Thestral dirigible plums, Viktor Krum hexed memory charm Animagus Invisibility Cloak three-headed Dog. Half-Blood Prince Invisibility Cloak cauldron cakes, hiya Harry! Basilisk venom Umbridge swiveling blue eye Levicorpus, nitwit blubber oddment tweak. Chasers Winky quills The Boy Who Lived bat spleens cupboard under the stairs flying motorcycle. Sirius Black Holyhead Harpies, you’ve got dirt on your nose. Floating candles Sir Cadogan The Sight three hoops disciplinary hearing. Grindlewald pig’s tail Sorcerer's Stone biting teacup. Side-along dragon-scale suits Filch 20 points, Mr. Potter.</p>
                <p>Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified. Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion. Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs. Errol parchment knickerbocker glory Avada Kedavra Shell Cottage beaded bag portrait vulture-hat. Twin cores, Aragog crimson gargoyles, Room of Requirement counter-clockwise Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?</p>
              </div>
            </Col>
          </Grid>
        </div>
        <div className="mz-section grey">
          <Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default App;
