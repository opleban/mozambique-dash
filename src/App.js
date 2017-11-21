import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MZChart from './mz-chart.js';
import MZPovertyDescription from './mz-poverty-description.js';
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
          <MZPovertyDescription />
        </Grid>
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
                data-height="250"
                data-width="100%"
                data-vif="{&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;showValueLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showLegend&quot;:true,&quot;axisLabels&quot;:{&quot;left&quot;:&quot;Heads of Household&quot;},&quot;dimensionLabelAreaSize&quot;:77},&quot;description&quot;:&quot;Red = Poor, Yellow = Not Poor&quot;,&quot;series&quot;:[{&quot;color&quot;:{&quot;primary&quot;:&quot;#71abd9&quot;,&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;palette&quot;:&quot;custom&quot;,&quot;customPalette&quot;:{&quot;is_below_poverty&quot;:{&quot;Poor&quot;:{&quot;color&quot;:&quot;#E0521B&quot;,&quot;index&quot;:0},&quot;Not Poor&quot;:{&quot;color&quot;:&quot;#fad04b&quot;,&quot;index&quot;:1}}}},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;34xf-jgsk&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;gender&quot;,&quot;aggregationFunction&quot;:null,&quot;grouping&quot;:{&quot;columnName&quot;:&quot;is_below_poverty&quot;}},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:null,&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[]},&quot;label&quot;:null,&quot;type&quot;:&quot;barChart&quot;,&quot;unit&quot;:{&quot;one&quot;:&quot;household head&quot;,&quot;other&quot;:&quot;household heads&quot;}}],&quot;title&quot;:&quot;&quot;,&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/yjed-qzbb&quot;}}"
                href="https://ori.demo.socrata.com/dataset/Mozambique-Head-of-Households/34xf-jgsk?referrer=embed"
                rel="external"
                target="_blank">View the data</a>
            </div>
          </Col>
        </Grid>
        <Grid className="mz-section">
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
              <p>Poor households are larger than non-poor households in Mozambique. The average poor household has 5.77 members, while households above the poverty line have 4.66 members on average. Poor households also have more children under the age of 14 than non-poor households, with averages of 3.15 children and 1.9 children, respectively.</p>
              <p>Large households are more prone to poverty. Households with three or more children under the age of 14 are almost twice as likely to be poor than households with fewer than three children under the age of 14.</p>
            </div>
          </Col>
        </Grid>
        <Grid className="mz-section">
          <h2 id="education" className="mz-section-header">
            Poverty & Education
          </h2>
            <Col lg={6} md={12} sm={12} xs={12}>
              <div className="mz-section-text">
                <p>Lack of education and poverty are highly correlated in Mozambique. Poor households are more likely to have a household head with less education than non-poor households. Almost 77% of poor households are headed by someone who did not complete primary education, versus 50% of non-poor households. Poor adults experience much worse rates of literacy, with less than half of poor adults being able to read and write. Those adults not in poverty enjoy a 74% literacy rate. The correlation between education and poverty also extends to children: poor children are less likely to have attended school in the last year (44%) than non-poor children (55%).</p>
                <p>People with university education are at the least risk of poverty (1.84%), followed by those with medium (4.6%) and basic (15%) technical education. Those with no education are at the highest risk of poverty (61.5%) followed by those who have only completed a lower primary (54.4%) and adult education (53.6%).</p>
                <p>Education varies across gender. Over a third of adult women have never attended school; less than one sixth of adult men have never attended school. Women heads of households are 2.5 times more likely to lack formal schooling, and this is amplified for the poor: only 39.7% of poor, female household heads have some education, compared to 64.6% of non-poor female household heads.</p>
                <p>Lack of formal education is concentrated in rural areas. The heads of urban households see a higher level of education, with only 19.2% having no education, compared to 35% of the heads of rural households. This, too, is amplified for the poor: rural and poor adults see the highest level of no schooling at 38.2%.</p>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} xs={12}>
              <h3 className="mz-socrata-chart-title">Survey Question: Can you read or write?</h3>
              <div className="mz-socrata-chart-container">
                <a className="socrata-visualization-embed"
                   data-embed-version="1"
                   data-height="450"
                   data-width="100%"
                   data-vif="{&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;showValueLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showLegend&quot;:true},&quot;description&quot;:&quot;Red = Yes, Yellow = No, Grey = Don't Know&quot;,&quot;series&quot;:[{&quot;color&quot;:{&quot;primary&quot;:&quot;#71abd9&quot;,&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;palette&quot;:&quot;custom&quot;,&quot;customPalette&quot;:{&quot;read_write&quot;:{&quot;No&quot;:{&quot;color&quot;:&quot;#F9CF57&quot;,&quot;index&quot;:1},&quot;Don't know&quot;:{&quot;color&quot;:&quot;#969696&quot;,&quot;index&quot;:2},&quot;Yes&quot;:{&quot;color&quot;:&quot;#e25200&quot;,&quot;index&quot;:0}}}},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;9m9z-i2ys&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;below_pov_line&quot;,&quot;aggregationFunction&quot;:null,&quot;grouping&quot;:{&quot;columnName&quot;:&quot;read_write&quot;}},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:null,&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[{&quot;function&quot;:&quot;valueRange&quot;,&quot;arguments&quot;:{&quot;includeNullValues&quot;:true,&quot;start&quot;:15,&quot;end&quot;:99.02000000000001},&quot;columnName&quot;:&quot;age&quot;,&quot;isHidden&quot;:true},{&quot;joinOn&quot;:&quot;OR&quot;,&quot;function&quot;:&quot;binaryOperator&quot;,&quot;arguments&quot;:[{&quot;operator&quot;:&quot;=&quot;,&quot;operand&quot;:&quot;Yes&quot;},{&quot;operator&quot;:&quot;=&quot;,&quot;operand&quot;:&quot;No&quot;},{&quot;operator&quot;:&quot;=&quot;,&quot;operand&quot;:&quot;Don't know&quot;}],&quot;columnName&quot;:&quot;read_write&quot;,&quot;isHidden&quot;:true}]},&quot;label&quot;:null,&quot;type&quot;:&quot;barChart&quot;,&quot;unit&quot;:{&quot;one&quot;:&quot;respondent&quot;,&quot;other&quot;:&quot;respondents&quot;},&quot;stacked&quot;:{&quot;oneHundredPercent&quot;:true}}],&quot;title&quot;:&quot;&quot;,&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/rmhf-f9sn&quot;}}"
                   href="https://ori.demo.socrata.com/dataset/Mozambique-Data/9m9z-i2ys?referrer=embed"
                   rel="external"
                   target="_blank">
                  View the data
                </a>
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <h3 className="mz-socrata-chart-title">Poor Household Heads by Education</h3>
              <div className="mz-socrata-chart-container">
                <a className="socrata-visualization-embed"
                   data-embed-version="1"
                   data-height="600"
                   data-width="100%"
                   data-vif="{&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;showValueLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;dimensionLabelAreaSize&quot;:227,&quot;showOtherCategory&quot;:true},&quot;description&quot;:&quot;&quot;,&quot;series&quot;:[{&quot;color&quot;:{&quot;primary&quot;:&quot;#e25200&quot;,&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;customPalette&quot;:{}},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;34xf-jgsk&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;education_level&quot;,&quot;aggregationFunction&quot;:null},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:null,&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[{&quot;joinOn&quot;:&quot;OR&quot;,&quot;function&quot;:&quot;binaryOperator&quot;,&quot;arguments&quot;:[{&quot;operator&quot;:&quot;=&quot;,&quot;operand&quot;:&quot;Poor&quot;}],&quot;columnName&quot;:&quot;is_below_poverty&quot;,&quot;isHidden&quot;:true}],&quot;limit&quot;:12},&quot;label&quot;:null,&quot;type&quot;:&quot;barChart&quot;,&quot;unit&quot;:{&quot;one&quot;:&quot;household head&quot;,&quot;other&quot;:&quot;household heads&quot;}}],&quot;title&quot;:&quot;&quot;,&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/emqe-286y&quot;}}"
                   target="_blank">
                  View the data
                </a>
              </div>
            </Col>
        </Grid>
        <Grid className="mz-section">
          <h2 id="technology" className="mz-section-header">
            Poverty & Technology
          </h2>
          <Col lg={6} md={8} sm={12} xs={12}>
            <div className="mz-section-text">
              <p>The poor have less access to technology than the non-poor in Mozambique. More than 96% of poor people live in households where no one had accessed the internet within the past year, compared to 70% of non-poor people. Poor households are 1.75 times less likely to own a mobile phone compared to non-poor households.</p>
              <p>Those without access to technology are more likely to be poor than those who do not. Households without access to internet are more than 5 times likelier to be poor than those with internet: 58% of individuals without internet access are poor, while only 10% with internet access are poor. Households that do not own at least one mobile phone had a 69% chance of being poor-- 25% higher than the overall population.</p>
              <p>This could be due to regional concentration of the poor in more rural areas. A person from a rural household is almost 15-times less likely to have internet access compared to her urban peer (29.72% of urban residents belong to households that have accessed the internet in the past year, compared to 2.9% rural residents), and 1.5-times less likely to own a mobile phone (53.5% of rural residents have mobile phones, compared to 82.3% of urban residents).</p>
            </div>
          </Col>
          <Col lg={6} md={8} sm={12} xs={12}>
            <h3 className="mz-socrata-chart-title">Poverty & Internet Access</h3>
            <div className="mz-socrata-chart-container">
              <a class="socrata-visualization-embed"
                data-embed-version="1"
                data-height="450"
                data-width="100%"
                data-vif="{&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;showValueLabels&quot;:false,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showLegend&quot;:true,&quot;axisLabels&quot;:{&quot;top&quot;:&quot;Individuals&quot;}},&quot;description&quot;:&quot;&quot;,&quot;series&quot;:[{&quot;color&quot;:{&quot;primary&quot;:&quot;#71abd9&quot;,&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;palette&quot;:&quot;custom&quot;,&quot;customPalette&quot;:{&quot;access_to_internet&quot;:{&quot;No Access&quot;:{&quot;color&quot;:&quot;#fad04b&quot;,&quot;index&quot;:0},&quot;Access&quot;:{&quot;color&quot;:&quot;#ec3001&quot;,&quot;index&quot;:1}}}},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;ym6e-aw63&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;is_below_poverty&quot;,&quot;aggregationFunction&quot;:null,&quot;grouping&quot;:{&quot;columnName&quot;:&quot;access_to_internet&quot;}},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:null,&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;access_to_internet&quot;,&quot;arguments&quot;:null,&quot;isHidden&quot;:true}]},&quot;label&quot;:null,&quot;type&quot;:&quot;barChart&quot;,&quot;unit&quot;:{&quot;one&quot;:&quot;individual&quot;,&quot;other&quot;:&quot;individuals&quot;}}],&quot;title&quot;:&quot;&quot;,&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/r5i9-ta7h&quot;}}"
                href="https://ori.demo.socrata.com/dataset/Mozambique-Technology-Data/ym6e-aw63?referrer=embed"
                rel="external"
                target="_blank">
                View the data
              </a>
            </div>
          </Col>
        </Grid>
        <Grid className="mz-section">
          <h2 id="location" className="mz-section-header">Rural & Urban Poverty</h2>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="mz-section-text">
              <p>Rural areas experience a greater problem with poverty than urban areas, with two out of three poor households living in rural regions of Mozambique. In contrast, nearly the same rate (63%) of non-poor households live in urban regions. Thus, a poor household is 1.34 times more likely to live in a rural region than a not poor household.</p>
              <p>Rural populations are more prone to poverty than non-rural populations. Households located in rural regions are 1.78 times likelier to be poor than those in urban regions. Rural households are less likely to access technology (see <a href="#technology">Poverty and Technology</a>) and less likely to have good sanitation systems or access to water (see <a href="#livingConditions">Poverty and Living Conditions</a>). The divide in rural and urban literacy mirrors the divide between poor/not poor literacy: only 44% of rural adults, but 75% of urban adults, are able to read and write.</p>
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
        <Grid className="mz-section">
          <h2 id="livingCondition" className="mz-section-header">
            Poverty & Living Conditions
          </h2>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="mz-section-text">
              <p>Certain living conditions can characterize poverty in Mozambique. We measured living conditions by house floor material and access to sanitation (determined by latrine type). Nearly 84% of poor people have either no sanitation facilities or only have an unimproved latrine. This is a distinctly poor phenomenon: 40% of poor people had absolutely no access to sanitation, while only 15% of people over the poverty line had no access to sanitation. Therefore, poor people are 2.5 times likely to have no access to sanitation facilities compared to the non-poor. Those without access to sanitation are highly prone to poverty: 73% of people with access to absolutely no sanitation facilities are poor, whereas only 41% of people who have at least some access to sanitation (unimproved latrine/improved latrine/septic tank etc.) are poor.</p>
              <p>The disparity extends to floor type as well. Only 17% of poor households have floors made of high quality materials (concrete, cement, fiber, tile, etc.), compared to 62% of non-poor households. This makes non-poor households 3.6 times likelier than poor households to have a good floor. Households with a good floor only have an 18% chance of being in poverty.</p>
              <p>Living conditions vary between rural and urban populations. A person from a rural household is nearly 4-times likelier to not have access to any form of sanitation than a person from an urban household. The lack of access to sanitation is made more acute by poverty: 49.9% of rural poor have no sanitation (compared to 34.3% rural non-poor) whereas 23.2% urban poor have no sanitation (compared to only 4.6% urban non-poor). In addition, rural individuals are less likely to live close to a clean water source, with 44% of rural individuals must walk over 30 minutes to access a water source compared to 26% of urban individuals.</p>
            </div>
          </Col>
        </Grid>
        <Grid className="mz-section">
          <h2 id="inequality" className="mz-section-header">
            Inequality in Mozambique
          </h2>
          <Col lg={12} md={12} sm={12} xs={12}>
            <div className="mz-section-text">
              <p>Inequality in Mozambique is relatively high. The Gini coefficient is a measure of the income/wealth inequality of a distribution; values range from 0-1 with 1 corresponding to perfect inequality and 0 equating with perfect equality. Since we didn’t have income information we used consumption a proxy for income. Using this substitution, we found that the Gini coefficient for Mozambique is 0.46. This Gini value puts Mozambique in the most unequal 20% of countries in the world.</p>
              <p>31% of households are responsible for 72% of total consumption (highest consumption quintile). In contrast 17% of households are responsible for 3% of consumption (lowest consumption quintile). On average a household in the highest quintile consumes over 22 times what a household in the lowest quintile consumes.</p>
            </div>
          </Col>
        </Grid>
        <footer></footer>
      </div>
    );
  }
}

export default App;
