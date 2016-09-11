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
    // this.setState({ showModal: false });
    this.props.onModalChange()
  }

  open() {
    // this.setState({ showModal: true });
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
            <Modal.Title>{this.props.header}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{this.props.title}</h4>
            <p>{this.props.text}</p>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onClose}>{this.props.buttonText}</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
