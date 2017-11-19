import React from 'react';
import { Button, Modal } from 'react-bootstrap';

class MZChartModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
    this._handleClose = this._handleClose.bind(this);
  }


  render() {
    return (
      <Modal {...this.props} bsSize="large" aria-labelledby="contained-modal-title-lg">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">{this.props.mzChartTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {this.props.children}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  _handleClose() {
    this.setState({ show: false });
  }
}

export default MZChartModal