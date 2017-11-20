import React, { Component } from 'react';
import { Col, Grid, OverlayTrigger, Tooltip } from 'react-bootstrap';

export default () => {
  const educationTooltip = (
    <Tooltip id="tooltip">
      Of poor adults, 70.87% have not completed primary education, with nearly 38% of poor adults never having attended school. Almost 77% of poor households are headed by someone who did not complete primary education. Less than half of poor adults are able to read and write.
    </Tooltip>
  );
  const householdTooltip = (
    <Tooltip id="tooltip">
      The average poor household has 5.77 members, with an average of 3.15 children under the age of 14. In line with the general population, most poor households (69.14%) are headed by men.
    </Tooltip>
  );
  return (
    <div className="mz-icon-canvas">
      <Col lg={4} md={4} sm={4} xs={12}
            className="mz-icon">
        <OverlayTrigger placement="left" overlay={educationTooltip}>
          <i class="fa fa-graduation-cap" aria-hidden="true"></i>
        </OverlayTrigger>
      </Col>
       <Col lg={4} md={4} sm={4} xs={12}
            className="mz-icon">
        <OverlayTrigger placement="left" overlay={educationTooltip}>
          <i class="fa fa-child" aria-hidden="true"></i>
        </OverlayTrigger>
      </Col>
      <Col lg={4} md={4} sm={4} xs={12}
            className="mz-icon">
        <OverlayTrigger placement="left" overlay={educationTooltip}>
          <i class="fa fa-map-marker" aria-hidden="true"></i>
        </OverlayTrigger>
      </Col>
      <Col lg={12} md={12} sm={12} xs={12}>
        <Col lg={4} md={4} sm={4} xs={12}
              lgOffset={4} mdOffset={4} smOffset={4}
              className="mz-icon">
          <div className="mz-central-figure">
            <OverlayTrigger placement="left" overlay={educationTooltip}>
              <i class="fa fa-female" aria-hidden="true"></i>
            </OverlayTrigger>
          </div>
        </Col>
      </Col>
      <Col lg={4} md={4} sm={4} xs={12}
            className="mz-icon">
        <OverlayTrigger placement="left" overlay={educationTooltip}>
          <i class="fa fa-wifi" aria-hidden="true"></i>
        </OverlayTrigger>
      </Col>
       <Col lg={4} md={4} sm={4} xs={12}
            className="mz-icon">
        <OverlayTrigger placement="left" overlay={educationTooltip}>
          <i class="fa fa-medkit" aria-hidden="true"></i>
        </OverlayTrigger>
      </Col>
      <Col lg={4} md={4} sm={4} xs={12}
            className="mz-icon">
        <OverlayTrigger placement="left" overlay={educationTooltip}>
          <i class="fa fa-home" aria-hidden="true"></i>
        </OverlayTrigger>
      </Col>
    </div>
  );
}
