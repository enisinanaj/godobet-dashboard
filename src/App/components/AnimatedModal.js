import React from 'react';
import Modal from "react-animated-modal";

import Aux from "../../hoc/_Aux";

class AnimatedModal extends React.Component {

    render() {
        return (
            <Aux>
                <Modal
                    visible={this.props.showModal}
                    closemodal={this.props.modalClosed}
                    type={this.props.animation}
                >
                    {this.props.children}
                </Modal>
            </Aux>
        );
    }
}

export default AnimatedModal;