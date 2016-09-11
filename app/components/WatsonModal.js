import React from 'react';
import {Popover, Tooltip, Button, Modal, OverlayTrigger} from 'react-bootstrap'
export default class WatsonModal extends React.Component {
  constructor(props) {
    super(props);
  //   this.state = {
		// showModal: this.props.modalOpen
  //   };
    this.close = this.close.bind(this)
    this.open = this.open.bind(this)

  }

  close() {
    this.setState({ showModal: false });
    this.props.onModalChange()
  }

  open() {
    this.setState({ showModal: true });
  }

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = (
      <Tooltip id="modal-tooltip">
        wow.
      </Tooltip>
    );

    return (
      <div onDoubleClick={this.open}>
        <Modal show={this.props.showModal} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome to IBM Watson!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>Start a Conversation!</h4>
            <p>(Perhaps you would like to do something...like upload a proposal?)</p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
