import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MZChart from './mz-chart.js';
import { Col, Grid } from 'react-bootstrap';
import MzNavBarHeader from './mz-header.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showChartContainer: false
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MzNavBarHeader />
        </header>
        <div className="mz-section mz-image">
          <div className="mz-top-header container">
            <h1>
              Mozambique
            </h1>
            <h2>
              Country Poverty Profile
            </h2>
          </div>
        </div>
        <Grid className="mz-section">
          <h2 id="gender" className="mz-section-header">
            Poverty & Gender
          </h2>
          <Col lg={6} md={8} sm={12} xs={12}>
            <div className="mz-section-text">
              <p>Gender plays a less important role in Mozambique’s poverty than might be expected. There is no significant difference in the gender of household heads between poor and not poor families, nor do the poor have a different proportion of either gender than in the population.</p>
              <p>People in households run by women are no more prone to poverty than those in households run by men. Nor are women in general more prone to poverty than men. However, there is a difference in education across gender – see <a href="#education">Poverty and Education</a> </p>
            </div>
          </Col>
          <Col lg={6} md={8} sm={12} xs={12}>
            <h3 className="mz-socrata-chart-title">Proportion of Household Heads by Gender</h3>
            <div className="mz-socrata-chart-container">
              <a
                class="socrata-visualization-embed"
                data-embed-version="1"
                data-height="450"
                data-width="100%"
                data-vif="{&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showLegend&quot;:true,&quot;axisLabels&quot;:{&quot;left&quot;:&quot;Heads of Household&quot;,&quot;bottom&quot;:&quot;Gender&quot;}},&quot;description&quot;:&quot;&quot;,&quot;series&quot;:[{&quot;color&quot;:{&quot;primary&quot;:&quot;#71abd9&quot;,&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;palette&quot;:&quot;custom&quot;,&quot;customPalette&quot;:{&quot;is_below_poverty&quot;:{&quot;Poor&quot;:{&quot;color&quot;:&quot;#f98d27&quot;,&quot;index&quot;:0},&quot;Not Poor&quot;:{&quot;color&quot;:&quot;#71abd9&quot;,&quot;index&quot;:1}}}},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;34xf-jgsk&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;gender&quot;,&quot;aggregationFunction&quot;:null,&quot;grouping&quot;:{&quot;columnName&quot;:&quot;is_below_poverty&quot;}},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:null,&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[]},&quot;label&quot;:null,&quot;type&quot;:&quot;columnChart&quot;,&quot;unit&quot;:{&quot;one&quot;:&quot;household head&quot;,&quot;other&quot;:&quot;household heads&quot;}}],&quot;title&quot;:&quot;&quot;,&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;}}"
                href="https://ori.demo.socrata.com/dataset/Mozambique-Head-of-Households/34xf-jgsk?referrer=embed"
                rel="external"
                target="_blank">View the data</a>
            </div>
          </Col>
        </Grid>
        <Grid className="mz-section mz-grey">
          <h2 id="household" className="mz-section-header">
            Poverty & Household Size
          </h2>

          <Col lg={6} md={12} sm={12} xs={12}>
            <h3 className="mz-socrata-chart-title">Household Sizes: Poor & Non-Poor</h3>
            <div className="mz-socrata-chart-container">
              <a className="socrata-visualization-embed"
                 data-embed-version="1"
                 data-height="450"
                 data-width="100%"
                 data-vif="{&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showLegend&quot;:true,&quot;axisLabels&quot;:{&quot;left&quot;:&quot;Number of Households&quot;,&quot;bottom&quot;:&quot;Household Size&quot;}},&quot;series&quot;:[{&quot;unit&quot;:{&quot;other&quot;:&quot;households&quot;,&quot;one&quot;:&quot;household&quot;},&quot;color&quot;:{&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;palette&quot;:&quot;custom&quot;,&quot;customPalette&quot;:{&quot;is_below_poverty&quot;:{&quot;Poor&quot;:{&quot;color&quot;:&quot;#f98d27&quot;,&quot;index&quot;:1},&quot;Not Poor&quot;:{&quot;color&quot;:&quot;#71abd9&quot;,&quot;index&quot;:0}}},&quot;primary&quot;:&quot;#71abd9&quot;},&quot;type&quot;:&quot;columnChart&quot;,&quot;dataSource&quot;:{&quot;measure&quot;:{&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;dimension&quot;,&quot;sort&quot;:&quot;asc&quot;},&quot;filters&quot;:[{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;location&quot;,&quot;isHidden&quot;:false,&quot;arguments&quot;:null}],&quot;type&quot;:&quot;socrata.soql&quot;,&quot;datasetUid&quot;:&quot;i8nq-dty2&quot;,&quot;dimension&quot;:{&quot;grouping&quot;:{&quot;columnName&quot;:&quot;is_below_poverty&quot;},&quot;columnName&quot;:&quot;hhsize&quot;,&quot;aggregationFunction&quot;:null}},&quot;label&quot;:null}],&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/fdxh-ig6u&quot;},&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;description&quot;:&quot;&quot;,&quot;title&quot;:&quot;&quot;}"
                 href="https://ori.demo.socrata.com/dataset/Mozambique-Households/i8nq-dty2?referrer=embed"
                 rel="external"
                 target="_blank">
                View the data
              </a>

            </div>
          </Col>
          <Col lg={6} md={12} sm={12} xs={12}>
            <h3 className="mz-socrata-chart-title">Number of Children by Household: Poor & Non-Poor</h3>
            <div className="mz-socrata-chart-container">
              <a className="socrata-visualization-embed"
                 data-embed-version="1"
                 data-height="450"
                 data-width="100%"
                 href="https://ori.demo.socrata.com/dataset/Mozambique-Households-Children-under-14-with-Lat-L/qsr5-qxtr?referrer=embed"
                 rel="external"
                 target="_blank"
                 data-vif="{&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showLegend&quot;:true,&quot;axisLabels&quot;:{&quot;left&quot;:&quot;Number of Households&quot;,&quot;bottom&quot;:&quot;Number of Children Under Age 14&quot;}},&quot;series&quot;:[{&quot;unit&quot;:{&quot;other&quot;:&quot;households&quot;,&quot;one&quot;:&quot;household&quot;},&quot;color&quot;:{&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;palette&quot;:&quot;custom&quot;,&quot;customPalette&quot;:{&quot;is_below_poverty&quot;:{&quot;Poor&quot;:{&quot;color&quot;:&quot;#f98d27&quot;,&quot;index&quot;:1},&quot;Not Poor&quot;:{&quot;color&quot;:&quot;#71abd9&quot;,&quot;index&quot;:0}}},&quot;primary&quot;:&quot;#71abd9&quot;},&quot;type&quot;:&quot;columnChart&quot;,&quot;dataSource&quot;:{&quot;measure&quot;:{&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;dimension&quot;,&quot;sort&quot;:&quot;asc&quot;},&quot;filters&quot;:[{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;location&quot;,&quot;isHidden&quot;:false,&quot;arguments&quot;:null}],&quot;type&quot;:&quot;socrata.soql&quot;,&quot;datasetUid&quot;:&quot;qsr5-qxtr&quot;,&quot;dimension&quot;:{&quot;grouping&quot;:{&quot;columnName&quot;:&quot;is_below_poverty&quot;},&quot;columnName&quot;:&quot;number_of_children&quot;,&quot;aggregationFunction&quot;:null}},&quot;label&quot;:null}],&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/xvgu-f3dy&quot;},&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;description&quot;:&quot;&quot;,&quot;title&quot;:&quot;&quot;}">
                 View the data
              </a>
            </div>
          </Col>
           <Col lg={12} md={12} sm={12} xs={12}>
            <div className="mz-section-text">
              <br/>
              <p>Poor households have larger households than non-poor households in Mozambique. The average poor household has 5.77 members, while the average non-poor household has 4.66 members.</p>
              <p>Poor households also have more children under the age of 14 than non-poor houshoulds. The average poor household has 3.15 children under the age of 14, while the average non-poor household has 1.9. Households with at least three children under the age of 14 are almost twice as likely to be poor than households with less than three children under the age of 14: 59% for households with many children, 31% for households with fewer children.</p>
            </div>
          </Col>
        </Grid>
        <Grid className="mz-section">
          <h2 id="education" className="mz-section-header">
            Poverty & Education
          </h2>
            <Col lg={6} md={12} sm={12} xs={12}>
              <div className="mz-section-text">
                <p>Poor households are more likely to be headed by a person with less education than non-poor households. Almost 77% of poor households are headed by someone who did not complete primary education, versus 50% of non-poor households. [Note – this is best shown with graph because it’s a distribution]. Poor adults experience much lower rates of literacy, with less than half of poor adults being able to read and write. Those not in poverty enjoy a 74% literacy rate. The correlation between education and poverty extends to children: poor children are less likely to have attended school in the last year (44%) than non-poor children (55%).</p>
                <p>Level of education correlates with incidence of poverty. Adults with no formal education are at a much higher risk of poverty (x%) than those who have completed primary education (x%) or secondary education (x%). Poverty rates are lowest among those with postsecondary training, either at university or vocational school (x%).</p>
                <p>Education varies across gender and location. Women are X% more likely to lack formal schooling, and this is amplified for the poor: only x% of poor women have some education, compared to x% of non-poor women. Urban adults see a higher level of education, with only x% having no education, compared to x% of rural adults. This, too, is amplified for poor adults, with rural and poor adults seeing the highest level of no schooling at x%.</p>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} xs={12}>
              <h3 className="mz-socrata-chart-title">Survey Question: Can you read or write?</h3>
              <a className="socrata-visualization-embed"
                 data-embed-version="1"
                 data-height="300"
                 data-width="100%"
                 data-vif="{&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showValueLabels&quot;:true},&quot;series&quot;:[{&quot;unit&quot;:{&quot;other&quot;:&quot;respondents&quot;,&quot;one&quot;:&quot;respondent&quot;},&quot;stacked&quot;:{&quot;oneHundredPercent&quot;:true},&quot;color&quot;:{&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;palette&quot;:&quot;custom&quot;,&quot;customPalette&quot;:{&quot;read_write&quot;:{&quot;No&quot;:{&quot;color&quot;:&quot;#f98d27&quot;,&quot;index&quot;:1},&quot;Don't know&quot;:{&quot;color&quot;:&quot;#969696&quot;,&quot;index&quot;:2},&quot;Yes&quot;:{&quot;color&quot;:&quot;#71abd9&quot;,&quot;index&quot;:0}}},&quot;primary&quot;:&quot;#71abd9&quot;},&quot;type&quot;:&quot;barChart&quot;,&quot;dataSource&quot;:{&quot;measure&quot;:{&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;filters&quot;:[{&quot;function&quot;:&quot;valueRange&quot;,&quot;arguments&quot;:{&quot;includeNullValues&quot;:true,&quot;start&quot;:15,&quot;end&quot;:99.02000000000001},&quot;columnName&quot;:&quot;age&quot;,&quot;isHidden&quot;:true},{&quot;joinOn&quot;:&quot;OR&quot;,&quot;function&quot;:&quot;binaryOperator&quot;,&quot;arguments&quot;:[{&quot;operator&quot;:&quot;=&quot;,&quot;operand&quot;:&quot;Yes&quot;},{&quot;operator&quot;:&quot;=&quot;,&quot;operand&quot;:&quot;No&quot;},{&quot;operator&quot;:&quot;=&quot;,&quot;operand&quot;:&quot;Don't know&quot;}],&quot;columnName&quot;:&quot;read_write&quot;,&quot;isHidden&quot;:true}],&quot;type&quot;:&quot;socrata.soql&quot;,&quot;datasetUid&quot;:&quot;9m9z-i2ys&quot;,&quot;dimension&quot;:{&quot;grouping&quot;:{&quot;columnName&quot;:&quot;read_write&quot;},&quot;columnName&quot;:&quot;below_pov_line&quot;,&quot;aggregationFunction&quot;:null}},&quot;label&quot;:null}],&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/rmhf-f9sn&quot;},&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;description&quot;:&quot;&quot;,&quot;title&quot;:&quot;&quot;}"
                 href="https://ori.demo.socrata.com/dataset/Mozambique-Data/9m9z-i2ys?referrer=embed"
                 rel="external"
                 target="_blank">
                View the data
              </a>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <h3 className="mz-socrata-chart-title">Poor Household Heads by Education</h3>
              <div className="mz-socrata-chart-container">
                <a className="socrata-visualization-embed"
                   data-embed-version="1"
                   data-height="600"
                   data-width="100%"
                   data-vif="{&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showOtherCategory&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showValueLabels&quot;:true,&quot;dimensionLabelAreaSize&quot;:227},&quot;series&quot;:[{&quot;unit&quot;:{&quot;other&quot;:&quot;household heads&quot;,&quot;one&quot;:&quot;household head&quot;},&quot;color&quot;:{&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;customPalette&quot;:{&quot;is_below_poverty&quot;:{&quot;Poor&quot;:{&quot;color&quot;:&quot;#f98d27&quot;,&quot;index&quot;:0},&quot;Not Poor&quot;:{&quot;color&quot;:&quot;#5b9ec9&quot;,&quot;index&quot;:1}}},&quot;primary&quot;:&quot;#f98d27&quot;},&quot;type&quot;:&quot;barChart&quot;,&quot;dataSource&quot;:{&quot;measure&quot;:{&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;limit&quot;:12,&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;filters&quot;:[{&quot;joinOn&quot;:&quot;OR&quot;,&quot;function&quot;:&quot;binaryOperator&quot;,&quot;arguments&quot;:[{&quot;operator&quot;:&quot;=&quot;,&quot;operand&quot;:&quot;Poor&quot;}],&quot;columnName&quot;:&quot;is_below_poverty&quot;,&quot;isHidden&quot;:true}],&quot;type&quot;:&quot;socrata.soql&quot;,&quot;datasetUid&quot;:&quot;34xf-jgsk&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;education_level&quot;,&quot;aggregationFunction&quot;:null}},&quot;label&quot;:null}],&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/emqe-286y&quot;},&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;description&quot;:&quot;&quot;,&quot;title&quot;:&quot;&quot;}"                   target="_blank">
                  View the data
                </a>
              </div>
            </Col>
        </Grid>
        <Grid className="mz-section mz-grey">
          <h2 id="technology" className="mz-section-header">
            Poverty & Technology
          </h2>
          <Col lg={6} md={8} sm={12} xs={12}>
            <div className="mz-section-text">
              <p>The poor have less access to technology than the non-poor in Mozambique. More than 96% of poor people lived in households where no one had accessed the internet within the past year, compared to 70% of non-poor people. Poor households were 1.75 times less likely to own a mobile phone compared to non-poor households.</p>
              <p>Those without access to technology are more likely to be poor than those who have internet or own a mobile phone. Those without access to the internet are more than 5 times as likely to be poor as those without internet: 58% of individuals without internet access are poor, while only 10% with internet access are poor. Households that did not own at least one mobile phone had a 69% chance of being poor, 25% higher than the overall population. This could be due to regional concentration of the poor in rural areas – a person from a rural household is almost 15-times less likely to have household access to the internet than an urban household (29.72% urban residents belong to households who have accessed internet in the past year, compared to 2.9% rural residents), and 1.5-times less likely to own a mobile phone (53.5% rural residents have mobile phones compared to 82.3% urban residents).</p>
            </div>
          </Col>
          <Col lg={6} md={8} sm={12} xs={12}>
            <h3 className="mz-socrata-chart-title">Proportion of Poor Household Heads by Gender</h3>
            <div className="mz-socrata-chart-container">
              <a className="socrata-visualization-embed"
                data-embed-version="1"
                data-height="600"
                data-width="100%"
                data-vif="{&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showOtherCategory&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showValueLabels&quot;:true,&quot;dimensionLabelAreaSize&quot;:227},&quot;series&quot;:[{&quot;unit&quot;:{&quot;other&quot;:&quot;household heads&quot;,&quot;one&quot;:&quot;household head&quot;},&quot;color&quot;:{&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;customPalette&quot;:{&quot;is_below_poverty&quot;:{&quot;Poor&quot;:{&quot;color&quot;:&quot;#f98d27&quot;,&quot;index&quot;:0},&quot;Not Poor&quot;:{&quot;color&quot;:&quot;#5b9ec9&quot;,&quot;index&quot;:1}}},&quot;primary&quot;:&quot;#f98d27&quot;},&quot;type&quot;:&quot;barChart&quot;,&quot;dataSource&quot;:{&quot;measure&quot;:{&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;limit&quot;:12,&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;filters&quot;:[{&quot;joinOn&quot;:&quot;OR&quot;,&quot;function&quot;:&quot;binaryOperator&quot;,&quot;arguments&quot;:[{&quot;operator&quot;:&quot;=&quot;,&quot;operand&quot;:&quot;Poor&quot;}],&quot;columnName&quot;:&quot;is_below_poverty&quot;,&quot;isHidden&quot;:true}],&quot;type&quot;:&quot;socrata.soql&quot;,&quot;datasetUid&quot;:&quot;34xf-jgsk&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;education_level&quot;,&quot;aggregationFunction&quot;:null}},&quot;label&quot;:null}],&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/emqe-286y&quot;},&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;description&quot;:&quot;&quot;,&quot;title&quot;:&quot;&quot;}"
                href="https://ori.demo.socrata.com/dataset/Mozambique-Head-of-Households/34xf-jgsk?referrer=embed"
                rel="external"
                target="_blank">
                View the data
              </a>
            </div>
          </Col>
        </Grid>
        <Grid className="mz-section">
          <h2 id="location" className="mz-section-header">Rural and Urban Poverty</h2>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="mz-section-text">
              <p>Rural areas experience a greater problem with poverty than urban areas, with two out of three poor households living in rural regions of Mozambique. In contrast, nearly the same rate (63%) of non-poor households live in urban regions. Thus, a poor household is 1.34 times more likely to live in a rural region than a not poor household.</p>
              <p>Rural populations are more prone to poverty than non-rural populations. Households located in rural regions are 1.78 times more likely to be a poor household than those in urban regions. Rural households are less likely to access technology (see “Poverty and Technology”), and adults in rural areas see lower rates of literacy than in urban households (x% versus x%). Additionally, rural households have less sanitation than urban households. + Access to health.</p>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
            <iframe width="100%" height="520" frameborder="0" src="https://fladatakind.carto.com/viz/7ef3c418-77e3-4a49-9d6e-155fcd52537e/embed_map" allowfullscreen webkitallowfullscreen mozallowfullscreen oallowfullscreen msallowfullscreen></iframe>
          </Col>
        </Grid>
        <Grid className="mz-section">
          <h2 id="transportation" className="mz-section-header">
            Poverty & Transportation
          </h2>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="mz-section-text">
              <p>The poor have less access to transportation than the non-poor in Mozambique as defined as access to any sort of car, motorcycle, bicycle or being less than 60 minutes away from a bus stop. The poor make up over 73% of people without access to transportation. Moreover the chance that a poor person does not have access to transportation (37.8%) is almost three times that of a non-poor person (13.6%).</p>
              <p>It takes over twice as much time for the average poor person (35 minutes) to reach a bus stop than the average non-poor person (80 minutes).</p>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="mz-socrata-chart-container">
              <a className="socrata-visualization-embed"
                data-embed-version="1"
                data-height="450"
                data-width="100%"
                data-vif="{&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;description&quot;:&quot;Use the dropdown to toggle between poor and non-poor to display a histogram showing the distribution of distances from a bus stop for survey respondents.&quot;,&quot;configuration&quot;:{&quot;bucketType&quot;:&quot;linear&quot;,&quot;viewSourceDataLink&quot;:true,&quot;axisLabels&quot;:{&quot;left&quot;:&quot;Number of Individuals&quot;,&quot;bottom&quot;:&quot;Distance from Bus Stop (in minutes)&quot;}},&quot;series&quot;:[{&quot;color&quot;:{&quot;primary&quot;:&quot;#71abd9&quot;,&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;9m9z-i2ys&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;time_facitlity_c&quot;,&quot;aggregationFunction&quot;:null},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:null,&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[{&quot;joinOn&quot;:&quot;OR&quot;,&quot;function&quot;:&quot;binaryOperator&quot;,&quot;arguments&quot;:[{&quot;operator&quot;:&quot;=&quot;,&quot;operand&quot;:&quot;Poor&quot;}],&quot;columnName&quot;:&quot;below_pov_line&quot;,&quot;isHidden&quot;:false}]},&quot;label&quot;:null,&quot;type&quot;:&quot;histogram&quot;,&quot;unit&quot;:{&quot;one&quot;:&quot;individual&quot;,&quot;other&quot;:&quot;individuals&quot;}}],&quot;title&quot;:&quot;Distance from Bus Stop&quot;,&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/tb95-8une&quot;}}"
                rel="external"
                target="_blank">View the data</a>
            </div>
          </Col>
        </Grid>
      </div>
    );
  }
}

export default App;
