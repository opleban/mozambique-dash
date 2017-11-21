import React, { Component } from 'react';
import { Col, Grid, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default () => {
  const educationTooltip = (
    <Tooltip id="eduTooltip" className="mz-tooltip">
      Of poor adults, 70.87% have not completed primary education, with nearly 38% of poor adults never having attended school. Almost 77% of poor households are headed by someone who did not complete primary education. Less than half of poor adults are able to read and write.
    </Tooltip>
  );
  const demographicTooltip = (
    <Tooltip id="demoTooltip" className="mz-tooltip">
      The average poor household has 5.77 members, with an average of 3.15 children under the age of 14. In line with the general population, most poor households (69.14%) are headed by men.
    </Tooltip>
  );
  const locationTooltip = (
    <Tooltip id="locTooltip" className="mz-tooltip">
      Two out of three poor households live in rural regions of Mozambique. Poverty rates are highest in Nampula, with 68% of households living below the poverty line.
    </Tooltip>
  );
  const householdTooltip = (
    <Tooltip id="houseTooltip" className="mz-tooltip">
      The average poor household has 5.77 members, with an average of 3.15 children under the age of 14. In line with the general population, most poor households (69.14%) are headed by men.
    </Tooltip>
  );
  const technologyTooltip = (
    <Tooltip id="techTooltip" className="mz-tooltip">
      More than 96% of poor people lived in households where no one has accessed the internet in the past year, and only 45% of poor households own a mobile phone.
    </Tooltip>
  );
  const livingConditionsTooltip = (
    <Tooltip id="livCondTooltip" className="mz-tooltip">
      Only 17% of poor households have a floor made of high quality materials (concrete, cement, fiber, tile, etc.) with most poor households using clay (66%). Poor households have low quality sanitation: nearly 84% of poor people have either no sanitation facilities or only have an unimproved latrine.
    </Tooltip>
  );
  const giniTooltip = (
    <Tooltip id="giniTooltip" className="mz-tooltip">
      On average a household in the highest quintile consumes over 22 times what a household in the lowest quintile consumes.
    </Tooltip>
  );

  return (
    <div className="mz-poverty-description-wrapper">
      <h2 id="description" className="mz-section-header">Who is poor in Mozambique?</h2>
      <h3>A detailed description of the poor</h3>
      <p><i>Hover over the icons to see a description of the "average" poor person in Mozambique.</i></p>
      <div className="mz-icon-canvas">
         <Col lg={4} md={4} sm={4} xs={12}
              className="mz-icon">
          <OverlayTrigger placement="right" overlay={householdTooltip} trigger={['hover', 'focus']}>
            <button><i class="fa fa-users" aria-hidden="true"></i></button>
          </OverlayTrigger>
        </Col>
        <Col lg={4} md={4} sm={4} xs={12}
              className="mz-icon">
          <OverlayTrigger placement="bottom" overlay={educationTooltip}>
            <button><i className="fa fa-graduation-cap" aria-hidden="true"></i></button>
          </OverlayTrigger>
        </Col>
        <Col lg={4} md={4} sm={4} xs={12}
              className="mz-icon">
          <OverlayTrigger placement="left" overlay={locationTooltip}>
            <button><i className="fa fa-map-marker" aria-hidden="true"></i></button>
          </OverlayTrigger>
        </Col>
        <Col lg={12} md={12} sm={12} xs={12}>
          <Col lg={4} md={4} sm={4} xs={12}
                lgOffset={4} mdOffset={4} smOffset={4}
                className="mz-icon">
            <div className="mz-central-figure">
              <OverlayTrigger placement="bottom" overlay={demographicTooltip}>
                <button><i className="fa fa-female" aria-hidden="true"></i></button>
              </OverlayTrigger>
            </div>
          </Col>
        </Col>
        <Col lg={4} md={4} sm={4} xs={12}
              className="mz-icon">
          <OverlayTrigger placement="right" overlay={technologyTooltip}>
            <button><i className="fa fa-wifi" aria-hidden="true"></i></button>
          </OverlayTrigger>
        </Col>
        <Col lg={4} md={4} sm={4} xs={12}
              className="mz-icon">
          <OverlayTrigger placement="right" overlay={giniTooltip}>
            <button><i className="fa fa-balance-scale" aria-hidden="true"></i></button>
          </OverlayTrigger>
        </Col>
        <Col lg={4} md={4} sm={4} xs={12}
              className="mz-icon">
          <OverlayTrigger placement="left" overlay={livingConditionsTooltip}>
            <button><i className="fa fa-home" aria-hidden="true"></i></button>
          </OverlayTrigger>
        </Col>
      </div>
    </div>
  );
}
