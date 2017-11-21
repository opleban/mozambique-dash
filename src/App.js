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
          <Col lg={12} md={12} sm={12} xs={12}>
            <h2 id="executive">Overview of Poverty in Mozambique</h2>
            <div className="mz-section-text">
              <p>Poverty is a complex phenomenon. It is difficult to appropriately define, and adequately describe. Examining poverty in Mozambique is particularly interesting. Despite its “blistering pace of economic growth” from 2006 to 2011<sup className="mz-reference" title="Hanlon, Joseph (19 September 2007). Is Poverty Decreasing in Mozambique?. Open University, England">[1]</sup>, Mozambique remains one of the poorest countries the world.</p>
              <p>Close to half of all individuals (49.6%) and households (44.2%) are poor as defined by the World Bank Poverty line. This poverty line is based on aggregate consumption, and has been adjusted for a) differences in prices faced by houses, and b) differences in household composition.</p>
              <p>We examined the distinct characteristics of the poor to paint a holistic picture of poverty in Mozambique. Our analysis utilized survey data for 13,000 individuals in 2,526 households on over 150 variables. Certain characteristics were highly correlated with poverty, including:</p>
              <ol className="mz-list">
                <li>Living in a rural district</li>
                <li>Lack of education</li>
                <li>Poor sanitation</li>
                <li>Lack of access to technology</li>
              </ol>
              <p>Additionally, certain characteristics that we expected to correlate with being poor were, in fact, statistically insignificant indicators of poverty, including: gender, proximity to medical care, proximity to a water source, joblessness, and home ownership.</p>
              <p>We must caveat our findings by acknowledging that certain factors may have affected our data. As most Mozambicans are small-scale subsistence farmers, questions surrounding recent employment may be skewed due to the timing or framing of the survey questionnaire, masking seasonal or disguised unemployment. Some data was too extreme to be accurate; for example, 96% of individuals reported being blind. Finally, our binary differentiation between “poor” and “not-poor” is necessarily simplistic and may not accurately capture the depth of poverty. Such a metric ignores households that narrowly exceed the poverty line, yet experience the same living conditions and characteristics of those living below it.</p>
              <p>This website examines poverty across specific parameters. For each parameter, we answer the questions “What are the differences between the poor and not-poor?” and “Who is most prone to poverty?” Our analysis concludes with a discussion of inequality in Mozambique.</p>
            </div>
          </Col>
        </Grid>
        <Grid className="mz-section">
          <MZPovertyDescription />
        </Grid>
        <Grid className="mz-section">
          <h2 id="gender" className="mz-section-header">
            Poverty & Gender
          </h2>
          <Col lg={6} md={8} sm={12} xs={12}>
            <div className="mz-section-text">
              <p>Gender plays a less important role in Mozambique’s poverty than might be expected given global trends. The gender of the household head is not a predictor of that household’s poverty, nor is gender correlated with poverty at the individual level.</p>
              <p>However, there is a difference in education across gender. Women heads of households are 2.5 times more likely to lack formal schooling, and this is amplified for the poor: only 39.7% of poor female household heads have some education, compared to 64.6% of non-poor female household heads. See <a href="#education">Poverty and Education</a> </p>
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
                data-vif="{&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;showValueLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;axisLabels&quot;:{&quot;top&quot;:&quot;Proportion of Household heads&quot;},&quot;dimensionLabelAreaSize&quot;:94,&quot;showLegend&quot;:true},&quot;description&quot;:&quot;Red = \&quot;Male\&quot;, Yellow = \&quot;Female\&quot;&quot;,&quot;series&quot;:[{&quot;color&quot;:{&quot;primary&quot;:&quot;#71abd9&quot;,&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;customPalette&quot;:{&quot;gender&quot;:{&quot;Male&quot;:{&quot;color&quot;:&quot;#e25200&quot;,&quot;index&quot;:0},&quot;Female&quot;:{&quot;color&quot;:&quot;#fad04b&quot;,&quot;index&quot;:1}}},&quot;palette&quot;:&quot;custom&quot;},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;34xf-jgsk&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;is_below_poverty&quot;,&quot;aggregationFunction&quot;:null,&quot;grouping&quot;:{&quot;columnName&quot;:&quot;gender&quot;}},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:null,&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[]},&quot;label&quot;:null,&quot;type&quot;:&quot;barChart&quot;,&quot;unit&quot;:{&quot;one&quot;:&quot;household head&quot;,&quot;other&quot;:&quot;household heads&quot;},&quot;stacked&quot;:{&quot;oneHundredPercent&quot;:true}}],&quot;title&quot;:&quot;&quot;,&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/yjed-qzbb&quot;}}"
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
                 data-vif="{&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showLegend&quot;:true,&quot;axisLabels&quot;:{&quot;bottom&quot;:&quot;Household Size&quot;,&quot;left&quot;:&quot;Number of Households&quot;}},&quot;description&quot;:&quot;Yellow = \&quot;Not Poor\&quot;, Red = \&quot;Poor\&quot;. Use the dropdown to filter by urban and rural households.&quot;,&quot;series&quot;:[{&quot;color&quot;:{&quot;primary&quot;:&quot;#71abd9&quot;,&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;palette&quot;:&quot;custom&quot;,&quot;customPalette&quot;:{&quot;is_below_poverty&quot;:{&quot;Poor&quot;:{&quot;color&quot;:&quot;#e25200&quot;,&quot;index&quot;:1},&quot;Not Poor&quot;:{&quot;color&quot;:&quot;#fad04b&quot;,&quot;index&quot;:0}}}},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;i8nq-dty2&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;hhsize&quot;,&quot;aggregationFunction&quot;:null,&quot;grouping&quot;:{&quot;columnName&quot;:&quot;is_below_poverty&quot;}},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:null,&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;dimension&quot;,&quot;sort&quot;:&quot;asc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;location&quot;,&quot;isHidden&quot;:false,&quot;arguments&quot;:null}]},&quot;label&quot;:null,&quot;type&quot;:&quot;columnChart&quot;,&quot;unit&quot;:{&quot;one&quot;:&quot;household&quot;,&quot;other&quot;:&quot;households&quot;}}],&quot;title&quot;:&quot;&quot;,&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/fdxh-ig6u&quot;}}"
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
                 data-vif="{&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showLegend&quot;:true,&quot;axisLabels&quot;:{&quot;bottom&quot;:&quot;Number of Children Under Age 14&quot;,&quot;left&quot;:&quot;Number of Households&quot;}},&quot;description&quot;:&quot;Yellow = \&quot;Not Poor\&quot;, Red = \&quot;Poor\&quot;. Use the dropdown to filter by urban and rural households.&quot;,&quot;series&quot;:[{&quot;color&quot;:{&quot;primary&quot;:&quot;#71abd9&quot;,&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;palette&quot;:&quot;custom&quot;,&quot;customPalette&quot;:{&quot;is_below_poverty&quot;:{&quot;Poor&quot;:{&quot;color&quot;:&quot;#e25200&quot;,&quot;index&quot;:1},&quot;Not Poor&quot;:{&quot;color&quot;:&quot;#fad04b&quot;,&quot;index&quot;:0}}}},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;qsr5-qxtr&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;number_of_children&quot;,&quot;aggregationFunction&quot;:null,&quot;grouping&quot;:{&quot;columnName&quot;:&quot;is_below_poverty&quot;}},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:null,&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;dimension&quot;,&quot;sort&quot;:&quot;asc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;location&quot;,&quot;isHidden&quot;:false,&quot;arguments&quot;:null}]},&quot;label&quot;:null,&quot;type&quot;:&quot;columnChart&quot;,&quot;unit&quot;:{&quot;one&quot;:&quot;household&quot;,&quot;other&quot;:&quot;households&quot;}}],&quot;title&quot;:&quot;&quot;,&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/xvgu-f3dy&quot;}}">
                 View the data
              </a>
            </div>
          </Col>
           <Col lg={12} md={12} sm={12} xs={12}>
            <div className="mz-section-text">
              <br/>
              <p>Poor households are larger than non-poor households in Mozambique. The average poor household has 5.77 members, while households above the poverty line have 4.66 members on average. Poor households also have more children under the age of 14 than non-poor households, with averages of 3.15 children and 1.9 children, respectively.</p>
              <p>Households with many children are more prone to poverty. Households with three or more children (under age 14) are almost twice as likely to be poor than households with fewer than three children.</p>
            </div>
          </Col>
        </Grid>
        <Grid className="mz-section">
          <h2 id="education" className="mz-section-header">
            Poverty & Education
          </h2>
            <Col lg={6} md={12} sm={12} xs={12}>
              <div className="mz-section-text">
                <p>Lack of education and poverty are highly correlated in Mozambique. Poor households are more likely to have a household head with less education than non-poor households. Almost 77% of poor households are headed by someone who did not complete primary education, versus 50% of non-poor households. Poor adults experience significantly worse literacy rates, with less than half of poor adults being able to read and write. Not-poor adults enjoy a 74% literacy rate. The correlation between education and poverty also extends to children: poor children are less likely to have attended school in the last year (44%) than non-poor children (55%).</p>
                <p>People with university education are at the least risk of poverty (1.84%), followed by those with medium (4.6%) and basic (15%) technical education. Those with no education are at the highest risk of poverty (61.5%) followed by those who have only completed a lower primary (54.4%) and adult education (53.6%).</p>
                <p>Education varies across gender. Over a third of adult women have never attended school versus less than one sixth of adult men who have never attended school. Women heads of households are 2.5 times more likely to lack formal schooling, and this is amplified for the poor: only 39.7% of poor, female household heads have some education, compared to 64.6% of non-poor female household heads.</p>
                <p>Lack of formal education is concentrated in rural areas. The heads of urban households see a higher level of education, with only 19.2% having no education; comparatively, 35% of the heads of rural households have never attended school. This, too, is amplified for the poor: rural and poor adults see the highest level of no schooling at 38.2%.</p>
              </div>
            </Col>
            <Col lg={6} md={12} sm={12} xs={12}>
              <h3 className="mz-socrata-chart-title">Survey Question: Can you read or write?</h3>
              <div className="mz-socrata-chart-container">
                <a className="socrata-visualization-embed"
                   data-embed-version="1"
                   data-height="450"
                   data-width="100%"
                   data-vif="{&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;showValueLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showLegend&quot;:true},&quot;description&quot;:&quot;Red = Yes, Yellow = \&quot;No\&quot;, Grey = \&quot;Don't Know\&quot;. Use the dropdown to filter by rural and urban individuals.&quot;,&quot;series&quot;:[{&quot;color&quot;:{&quot;primary&quot;:&quot;#71abd9&quot;,&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;palette&quot;:&quot;custom&quot;,&quot;customPalette&quot;:{&quot;read_write&quot;:{&quot;No&quot;:{&quot;color&quot;:&quot;#F9CF57&quot;,&quot;index&quot;:1},&quot;Don't know&quot;:{&quot;color&quot;:&quot;#969696&quot;,&quot;index&quot;:2},&quot;Yes&quot;:{&quot;color&quot;:&quot;#e25200&quot;,&quot;index&quot;:0}}}},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;9m9z-i2ys&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;below_pov_line&quot;,&quot;aggregationFunction&quot;:null,&quot;grouping&quot;:{&quot;columnName&quot;:&quot;read_write&quot;}},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:null,&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[{&quot;function&quot;:&quot;valueRange&quot;,&quot;arguments&quot;:{&quot;includeNullValues&quot;:true,&quot;start&quot;:15,&quot;end&quot;:99.02000000000001},&quot;columnName&quot;:&quot;age&quot;,&quot;isHidden&quot;:true},{&quot;joinOn&quot;:&quot;OR&quot;,&quot;function&quot;:&quot;binaryOperator&quot;,&quot;arguments&quot;:[{&quot;operator&quot;:&quot;=&quot;,&quot;operand&quot;:&quot;Yes&quot;},{&quot;operator&quot;:&quot;=&quot;,&quot;operand&quot;:&quot;No&quot;},{&quot;operator&quot;:&quot;=&quot;,&quot;operand&quot;:&quot;Don't know&quot;}],&quot;columnName&quot;:&quot;read_write&quot;,&quot;isHidden&quot;:true},{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;location&quot;,&quot;arguments&quot;:null,&quot;isHidden&quot;:false}]},&quot;label&quot;:null,&quot;type&quot;:&quot;barChart&quot;,&quot;unit&quot;:{&quot;one&quot;:&quot;respondent&quot;,&quot;other&quot;:&quot;respondents&quot;},&quot;stacked&quot;:{&quot;oneHundredPercent&quot;:true}}],&quot;title&quot;:&quot;&quot;,&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/rmhf-f9sn&quot;}}"
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
                   data-vif="{&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;showValueLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;dimensionLabelAreaSize&quot;:227,&quot;showOtherCategory&quot;:true,&quot;axisLabels&quot;:{&quot;left&quot;:&quot;Education Level&quot;,&quot;top&quot;:&quot;Number of Household Heads&quot;}},&quot;description&quot;:&quot;Use the dropdowns to filter by poverty level and urban/rural household heads.&quot;,&quot;series&quot;:[{&quot;color&quot;:{&quot;primary&quot;:&quot;#e25200&quot;,&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;34xf-jgsk&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;education_level&quot;,&quot;aggregationFunction&quot;:null},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:null,&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[{&quot;joinOn&quot;:&quot;OR&quot;,&quot;function&quot;:&quot;binaryOperator&quot;,&quot;arguments&quot;:[{&quot;operator&quot;:&quot;=&quot;,&quot;operand&quot;:&quot;Poor&quot;}],&quot;columnName&quot;:&quot;is_below_poverty&quot;,&quot;isHidden&quot;:false},{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;location&quot;,&quot;arguments&quot;:null,&quot;isHidden&quot;:false}],&quot;limit&quot;:12},&quot;label&quot;:null,&quot;type&quot;:&quot;barChart&quot;,&quot;unit&quot;:{&quot;one&quot;:&quot;household head&quot;,&quot;other&quot;:&quot;household heads&quot;}}],&quot;title&quot;:&quot;&quot;,&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/emqe-286y&quot;}}"
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
              <p>The poor have less access to technology than the non-poor in Mozambique. More than 96% of poor people live in households where no one had accessed the internet within the past year, compared to 70% of non-poor people. The disparity is less stark, but apparent, for mobile phone ownership. Poor households are 1.75 times less likely to own a mobile phone compared to non-poor households.</p>
              <p>Those without access to technology are more likely to be poor than those who do. Households without internet are over 5 times more likely to be poor than those with internet: 58% of individuals without internet access are poor, while only 10% with internet access are poor. Households that do not own at least one mobile phone had a 69% chance of being poor -25% higher than the overall population.</p>
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
                data-vif="{&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;showValueLabels&quot;:false,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showLegend&quot;:true,&quot;axisLabels&quot;:{&quot;top&quot;:&quot;Individuals&quot;}},&quot;description&quot;:&quot;Yellow = \&quot;No Access to Internet\&quot;, Red = \&quot;Access to Internet\&quot;&quot;,&quot;series&quot;:[{&quot;color&quot;:{&quot;primary&quot;:&quot;#71abd9&quot;,&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;palette&quot;:&quot;custom&quot;,&quot;customPalette&quot;:{&quot;access_to_internet&quot;:{&quot;No Access&quot;:{&quot;color&quot;:&quot;#e25200&quot;,&quot;index&quot;:0},&quot;Access&quot;:{&quot;color&quot;:&quot;#fad04b&quot;,&quot;index&quot;:1}}}},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;ym6e-aw63&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;is_below_poverty&quot;,&quot;aggregationFunction&quot;:null,&quot;grouping&quot;:{&quot;columnName&quot;:&quot;access_to_internet&quot;}},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:null,&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;access_to_internet&quot;,&quot;isHidden&quot;:true,&quot;arguments&quot;:null},{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;location&quot;,&quot;arguments&quot;:null,&quot;isHidden&quot;:false}]},&quot;label&quot;:null,&quot;type&quot;:&quot;barChart&quot;,&quot;unit&quot;:{&quot;one&quot;:&quot;individual&quot;,&quot;other&quot;:&quot;individuals&quot;},&quot;stacked&quot;:{&quot;oneHundredPercent&quot;:true}}],&quot;title&quot;:&quot;&quot;,&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/r5i9-ta7h&quot;}}"
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
              <p>Rural populations are more prone to poverty than non-rural populations. Households located in rural regions are 1.78 times more likely to be poor than those in urban regions. Rural households are less likely to access technology (see <a href="#technology">Poverty and Technology</a>) and less likely to have good sanitation systems or access to water (see <a href="#livingConditions">Poverty and Living Conditions</a>). The divide in rural and urban literacy mirrors the divide between poor/not poor literacy: only 44% of rural adults, but 75% of urban adults, are able to read and write.</p>
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
              <p>The poor are less able to access transportation than the non-poor in Mozambique. We defined transportation as access to any sort of car, motorcycle, or bicycle, or being less than 60 minutes away from a bus stop. Of those without access to transportation, 73% are poor. Moreover, poor individuals are nearly three times likelier to lack access to transportation than non-poor individuals (37.8% vs. 13.6% respectively). </p>
              <p>These differences persist even when we look at ease of access, versus just lack of access, for poor individuals. It takes over twice as much time for the average poor person to reach a bus stop (80 minutes) than the average non-poor person (35 minutes).</p>
            </div>
          </Col>
          <Col lg={12} md={12} sm={12} xs={12}>
            <h3 className="mz-socrata-chart-title">Distance from Bus Stop (in Minutes)</h3>
            <div className="mz-socrata-chart-container">
              <a className="socrata-visualization-embed"
                data-embed-version="1"
                data-height="450"
                data-width="100%"
                data-vif="{&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;description&quot;:&quot;Use the dropdown to filter by poverty level and by urban and rural areas.&quot;,&quot;configuration&quot;:{&quot;bucketType&quot;:&quot;linear&quot;,&quot;viewSourceDataLink&quot;:true,&quot;axisLabels&quot;:{&quot;bottom&quot;:&quot;Distance from Bus Stop (in minutes)&quot;,&quot;left&quot;:&quot;Number of Individuals&quot;}},&quot;series&quot;:[{&quot;color&quot;:{&quot;primary&quot;:&quot;#e25200&quot;,&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;9m9z-i2ys&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;time_facitlity_c&quot;,&quot;aggregationFunction&quot;:null},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:null,&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[{&quot;joinOn&quot;:&quot;OR&quot;,&quot;function&quot;:&quot;binaryOperator&quot;,&quot;arguments&quot;:[{&quot;operator&quot;:&quot;=&quot;,&quot;operand&quot;:&quot;Poor&quot;}],&quot;columnName&quot;:&quot;below_pov_line&quot;,&quot;isHidden&quot;:false},{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;location&quot;,&quot;arguments&quot;:null,&quot;isHidden&quot;:false}]},&quot;label&quot;:null,&quot;type&quot;:&quot;histogram&quot;,&quot;unit&quot;:{&quot;one&quot;:&quot;individual&quot;,&quot;other&quot;:&quot;individuals&quot;}}],&quot;title&quot;:&quot;&quot;,&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/tb95-8une&quot;}}"
                rel="external"
                target="_blank">View the data</a>
            </div>
          </Col>
        </Grid>
        <Grid className="mz-section">
          <h2 id="livingCondition" className="mz-section-header">
            Poverty & Living Conditions
          </h2>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="mz-section-text">
              <p>Certain living conditions can characterize poverty in Mozambique. We measured living conditions by access to sanitation (determined by latrine type), house floor material, and house roof material. Nearly 84% of poor people have either no sanitation facilities or only have an unimproved latrine. This is a distinctly poor phenomenon: 40% of poor people had absolutely no access to sanitation, while only 15% of people over the poverty line had no access to sanitation. Therefore, poor people are 2.5 times likely to have no access to sanitation facilities compared to the non-poor. Those without access to sanitation are highly prone to poverty: 73% of people with access to absolutely no sanitation facilities are poor, whereas only 41% of people who have at least some access to sanitation (unimproved latrine and better) are poor.</p>
              <p>The disparity extends to house quality as well, as reflected by floor and roof type. Only 17% of poor households have floors made of high quality materials (cement, lumber, tile, etc.), compared to 62% of non-poor households. This makes non-poor households 3.6 times likelier than poor households to have a high-quality floor. Similarly, only 27% of poor households have roofs made of high quality materials (concrete, zinc, tile etc.), compared to 73% of non-poor households.</p>
              <p>Living conditions vary between rural and urban populations. Rural households are nearly 4-times more likely to lack access to any form of sanitation than urban households. The lack of access to sanitation is made more acute by poverty: 49.9% of rural poor have no sanitation (compared to 34.3% rural non-poor) whereas 23.2% urban poor have no sanitation (compared to only 4.6% urban non-poor). Rural individuals are also less likely to live close to a clean water source, with 73% of rural individuals having to walk more than 30 minutes to access a water source, compared to 26% of urban individuals.</p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h3 className="mz-socrata-chart-title">Poverty & Sanitation</h3>
            <div className="mz-socrata-chart-container">
              <a className="socrata-visualization-embed"
                data-embed-version="1"
                data-height="400"
                data-width="100%"
                data-vif="{&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;showValueLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showLegend&quot;:true},&quot;description&quot;:&quot;Yellow = \&quot;Sanitation\&quot;, Red = \&quot;No Sanitation\&quot;. Use the dropdown to filter between urban and rural individuals.&quot;,&quot;series&quot;:[{&quot;color&quot;:{&quot;primary&quot;:&quot;#71abd9&quot;,&quot;secondary&quot;:&quot;#71abd9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;,&quot;palette&quot;:&quot;custom&quot;,&quot;customPalette&quot;:{&quot;sanitation&quot;:{&quot;Sanitation&quot;:{&quot;color&quot;:&quot;#fad04b&quot;,&quot;index&quot;:0},&quot;No Sanitation&quot;:{&quot;color&quot;:&quot;#e25200&quot;,&quot;index&quot;:1}}}},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;exvt-p8x7&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;is_below_poverty&quot;,&quot;aggregationFunction&quot;:null,&quot;grouping&quot;:{&quot;columnName&quot;:&quot;sanitation&quot;}},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:null,&quot;aggregationFunction&quot;:&quot;count&quot;},&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;measure&quot;,&quot;sort&quot;:&quot;desc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;sanitation&quot;,&quot;arguments&quot;:null,&quot;isHidden&quot;:true},{&quot;function&quot;:&quot;noop&quot;,&quot;columnName&quot;:&quot;location&quot;,&quot;arguments&quot;:null,&quot;isHidden&quot;:false}]},&quot;label&quot;:null,&quot;type&quot;:&quot;barChart&quot;,&quot;unit&quot;:{&quot;one&quot;:&quot;Individual&quot;,&quot;other&quot;:&quot;Individuals&quot;},&quot;stacked&quot;:{&quot;oneHundredPercent&quot;:true}}],&quot;title&quot;:&quot;&quot;,&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/cn3z-udbw&quot;}}"
                href="https://ori.demo.socrata.com/dataset/Mozambique-Sanitation/exvt-p8x7?referrer=embed"
                rel="external"
                target="_blank">
                View the data
              </a>
            </div>
          </Col>
        </Grid>
        <Grid className="mz-section">
          <h2 id="inequality" className="mz-section-header">
            Inequality in Mozambique
          </h2>
          <Col lg={6} md={6} sm={12} xs={12}>
            <div className="mz-section-text">
              <p>Inequality in Mozambique is relatively high. The primary measure used to characterize inequality is the Gini coefficient. The Gini coefficient is a measure of the income/wealth inequality of a distribution; values range from 0-1 with 1 corresponding to perfect inequality and 0 equating with perfect equality. Since we did not have access to income information, we used total household consumption a proxy for income. Using this substitution, we found that the Gini coefficient for Mozambique is 0.46. This Gini value puts Mozambique in the most unequal 20% of countries in the world. This discovery is further supported by the finding that current consumption per quartile is significantly different from expected consumption per quartile, assuming perfect equality. </p>
              <p>Notably, 31% of households in Mozambique are responsible for 72% of total consumption (the highest consumption quintile). In contrast 17% of households are responsible for 3% of consumption (the lowest consumption quintile). This means that on average, a household in the highest quintile consumes over 22 times what a household in the lowest quintile consumes.</p>
            </div>
          </Col>
          <Col lg={6} md={6} sm={12} xs={12}>
            <h3 className="mz-socrata-chart-title">Consumption Across Quintiles</h3>
            <div className="mz-socrata-chart-container">
              <a className="socrata-visualization-embed"
                data-embed-version="1"
                data-height="500"
                data-width="100%"
                data-vif="{&quot;format&quot;:{&quot;type&quot;:&quot;visualization_interchange_format&quot;,&quot;version&quot;:2},&quot;configuration&quot;:{&quot;viewSourceDataLink&quot;:true,&quot;showDimensionLabels&quot;:true,&quot;xAxisScalingMode&quot;:&quot;pan&quot;,&quot;showLegend&quot;:true,&quot;axisLabels&quot;:{&quot;bottom&quot;:&quot;Quintile&quot;,&quot;left&quot;:&quot;% of Total&quot;}},&quot;description&quot;:&quot;Red = % of Total Households, Yellow = % of Total Consumption&quot;,&quot;series&quot;:[{&quot;color&quot;:{&quot;primary&quot;:&quot;#e25200&quot;,&quot;secondary&quot;:&quot;#a6cee3&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;bqpt-z7nx&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;quintile&quot;,&quot;aggregationFunction&quot;:null},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:&quot;of_total_house_holds&quot;,&quot;aggregationFunction&quot;:null},&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;dimension&quot;,&quot;sort&quot;:&quot;asc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[]},&quot;label&quot;:null,&quot;type&quot;:&quot;columnChart&quot;,&quot;unit&quot;:{&quot;one&quot;:&quot;%&quot;,&quot;other&quot;:&quot;%&quot;}},{&quot;color&quot;:{&quot;primary&quot;:&quot;#fad04b&quot;,&quot;secondary&quot;:&quot;#5b9ec9&quot;,&quot;highlight&quot;:&quot;#cccccc&quot;},&quot;dataSource&quot;:{&quot;datasetUid&quot;:&quot;bqpt-z7nx&quot;,&quot;dimension&quot;:{&quot;columnName&quot;:&quot;quintile&quot;,&quot;aggregationFunction&quot;:null},&quot;domain&quot;:&quot;ori.demo.socrata.com&quot;,&quot;measure&quot;:{&quot;columnName&quot;:&quot;of_total_consumption&quot;,&quot;aggregationFunction&quot;:null},&quot;orderBy&quot;:{&quot;parameter&quot;:&quot;dimension&quot;,&quot;sort&quot;:&quot;asc&quot;},&quot;type&quot;:&quot;socrata.soql&quot;,&quot;filters&quot;:[]},&quot;label&quot;:null,&quot;type&quot;:&quot;columnChart&quot;,&quot;unit&quot;:{&quot;one&quot;:&quot;%&quot;,&quot;other&quot;:&quot;%&quot;}}],&quot;title&quot;:&quot;&quot;,&quot;origin&quot;:{&quot;type&quot;:&quot;visualization_canvas&quot;,&quot;url&quot;:&quot;https://ori.demo.socrata.com/d/fs9e-tenf&quot;}}"
              href="https://ori.demo.socrata.com/dataset/Mozambique-Household-Quintiles/bqpt-z7nx?referrer=embed"
              rel="external"
              target="_blank">
                View the data
              </a>
            </div>
          </Col>
        </Grid>
        <footer></footer>
      </div>
    );
  }
}

export default App;
