import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MZChart from './mz-chart.js';
import { Col, Grid } from 'react-bootstrap';

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
          <img src="http://afrobarometer.org/sites/default/files/country_images/country-mozambique.png" className="App-logo" alt="logo" />
        </header>
          <h1 className="App-title">Welcome to the Mozambique Poverty Profile Dashboard</h1>
        <div className="mz-section mz-image">
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
              <h3 className="mz-socrata-chart-title">Proportion of Poor Household Heads by Gender</h3>
              <div className="mz-socrata-chart-container">
                <a className="socrata-visualization-embed"
                   data-embed-version="1"
                   data-height="300"
                   data-width="100%"
                   data-vif="{&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;showValueLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;axisLabels&quot;:{&quot;left&quot;:&quot;Gender&quot;,&quot;top&quot;:&quot;Proportion of household heads&quot;},&quot;dimensionLabelAreaSize&quot;:86,&quot;showLegend&quot;:true},&quot;series&quot;:[{&quot;color&quot;:{&quot;primary&quot;:&quot;#71abd9&quot;,&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;palette&quot;:&quot;custom&quot;,&quot;customPalette&quot;:{&quot;is_below_poverty&quot;:{&quot;Poor&quot;:{&quot;color&quot;:&quot;#f98d27&quot;,&quot;index&quot;:1},&quot;Not Poor&quot;:{&quot;color&quot;:&quot;#71abd9&quot;,&quot;index&quot;:0}}}},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;34xf-jgsk&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;gender&quot;,&quot;aggregationFunction&quot;:null,&quot;grouping&quot;:{&quot;columnName&quot;:&quot;is_below_poverty&quot;}},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:null,&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;asc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[]},&quot;label&quot;:null,&quot;type&quot;:&quot;barChart&quot;,&quot;stacked&quot;:{&quot;oneHundredPercent&quot;:true},&quot;unit&quot;:{&quot;one&quot;:&quot;household head&quot;,&quot;other&quot;:&quot;household heads&quot;}}],&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/5bq6-rk2f&quot;}}"
                   href="https://ori.demo.socrata.com/dataset/Mozambique-Head-of-Households/34xf-jgsk?referrer=embed"
                   rel="external"
                   target="_blank">
                  View the data
                </a>
              </div>
            </Col>
        </Grid>
        <Grid className="mz-section mz-grey">
          <h2 id="gender" className="mz-section-header">
            Poverty & Household Size
          </h2>
          <Col lg={6} md={8} sm={12} xs={12}>
            <div className="mz-section-text">
              <p>The poor have larger household sizes and more children under the age of 14 than the non-poor in Mozambique. More than 96% of poor people lived in households where no one had accessed the internet within the past year, compared to 70% of non-poor people. Poor households were 1.75 times less likely to own a mobile phone compared to non-poor households.</p>
              <p>Those without access to technology are more likely to be poor than those who have internet or own a mobile phone. Those without access to the internet are more than 5 times as likely to be poor as those without internet: 58% of individuals without internet access are poor, while only 10% with internet access are poor. Households that did not own at least one mobile phone had a 69% chance of being poor, 25% higher than the overall population. This could be due to regional concentration of the poor in rural areas – a rural household is x-times less likely to have access to the internet than an urban household, and x-times less likely to own a mobile phone.</p>              </div>
          </Col>
          <Col lg={6} md={8} sm={12} xs={12}>
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
        </Grid>
        <Grid className="mz-section">
          <h2 id="gender" className="mz-section-header">
            Poverty & Education
          </h2>
            <Col lg={12} md={12} sm={12} xs={12}>
              <div className="mz-section-text">
                <p>Poor households are more likely to be headed by a person with less education than non-poor households. Almost 77% of poor households are headed by someone who did not complete primary education, versus 50% of non-poor households. [Note – this is best shown with graph because it’s a distribution]. Poor adults experience much lower rates of literacy, with less than half of poor adults being able to read and write. Those not in poverty enjoy a 74% literacy rate. The correlation between education and poverty extends to children: poor children are less likely to have attended school in the last year (44%) than non-poor children (55%).</p>
                <p>Level of education correlates with incidence of poverty. Adults with no formal education are at a much higher risk of poverty (x%) than those who have completed primary education (x%) or secondary education (x%). Poverty rates are lowest among those with postsecondary training, either at university or vocational school (x%).</p>
                <p>Education varies across gender and location. Women are X% more likely to lack formal schooling, and this is amplified for the poor: only x% of poor women have some education, compared to x% of non-poor women. Urban adults see a higher level of education, with only x% having no education, compared to x% of rural adults. This, too, is amplified for poor adults, with rural and poor adults seeing the highest level of no schooling at x%.</p>
              </div>
            </Col>
            <Col lg={12} md={12} sm={12} xs={12}>
              <h3 className="mz-socrata-chart-title">Households by Poverty and Education</h3>
              <div className="mz-socrata-chart-container">
                <a class="socrata-visualization-embed"
                   data-embed-version="1"
                   data-height="600"
                   data-width="100%"
                   data-vif="{&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showOtherCategory&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showValueLabels&quot;:true,&quot;dimensionLabelAreaSize&quot;:227},&quot;series&quot;:[{&quot;unit&quot;:{&quot;other&quot;:&quot;household heads&quot;,&quot;one&quot;:&quot;household head&quot;},&quot;color&quot;:{&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;customPalette&quot;:{&quot;is_below_poverty&quot;:{&quot;Poor&quot;:{&quot;color&quot;:&quot;#f98d27&quot;,&quot;index&quot;:0},&quot;Not Poor&quot;:{&quot;color&quot;:&quot;#5b9ec9&quot;,&quot;index&quot;:1}}},&quot;primary&quot;:&quot;#f98d27&quot;},&quot;type&quot;:&quot;columnChart&quot;,&quot;dataSource&quot;:{&quot;measure&quot;:{&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;limit&quot;:12,&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;filters&quot;:[{&quot;joinOn&quot;:&quot;OR&quot;,&quot;function&quot;:&quot;binaryOperator&quot;,&quot;arguments&quot;:[{&quot;operator&quot;:&quot;=&quot;,&quot;operand&quot;:&quot;Poor&quot;}],&quot;columnName&quot;:&quot;is_below_poverty&quot;,&quot;isHidden&quot;:true}],&quot;type&quot;:&quot;socrata.soql&quot;,&quot;datasetUid&quot;:&quot;34xf-jgsk&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;education_level&quot;,&quot;aggregationFunction&quot;:null}},&quot;label&quot;:null}],&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/emqe-286y&quot;},&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;description&quot;:&quot;&quot;,&quot;title&quot;:&quot;&quot;}"                   href="https://ori.demo.socrata.com/dataset/Mozambique-Head-of-Households/34xf-jgsk?referrer=embed"
                   rel="external"
                   target="_blank">
                  View the data
                </a>
              </div>
            </Col>
        </Grid>
        <Grid className="mz-section mz-grey">
          <h2 id="gender" className="mz-section-header">
            Poverty & Technology
          </h2>
          <Col lg={6} md={8} sm={12} xs={12}>
            <div className="mz-section-text">
              <p>The poor have less access to technology than the non-poor in Mozambique. More than 96% of poor people lived in households where no one had accessed the internet within the past year, compared to 70% of non-poor people. Poor households were 1.75 times less likely to own a mobile phone compared to non-poor households.</p>
              <p>Those without access to technology are more likely to be poor than those who have internet or own a mobile phone. Those without access to the internet are more than 5 times as likely to be poor as those without internet: 58% of individuals without internet access are poor, while only 10% with internet access are poor. Households that did not own at least one mobile phone had a 69% chance of being poor, 25% higher than the overall population. This could be due to regional concentration of the poor in rural areas – a rural household is x-times less likely to have access to the internet than an urban household, and x-times less likely to own a mobile phone.</p>              </div>
          </Col>
          <Col lg={6} md={8} sm={12} xs={12}>
            <h3 className="mz-socrata-chart-title">Proportion of Poor Household Heads by Gender</h3>
            <div className="mz-socrata-chart-container">
              <a class="socrata-visualization-embed"
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
      </div>
    );
  }
}

export default App;
