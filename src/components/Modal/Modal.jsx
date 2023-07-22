import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { ModalContainer, Overlay } from './Modal.style'

export class Modal extends Component {

    componentDidMount() { 
        window.addEventListener('keydown', this.onEscape)
        // window.addEventListener('click', this.onOverlayClick)
    }
    
    componentDidUpdate(prevProps, prevState) { 
         window.removeEventListener('keydown', this.handleCloseModal)
        // window.removeEventListener('click', this.onOverlayClick)

    } 

    handleCloseModal = (e) => {
        if (e.key === 'Escape' || e.currentTarget === e.target) {
            this.props.closeModal()
        }
    }

    render() {
        const { largeImgObj } = this.props
        return (
            <Overlay onClick={this.handleCloseModal}>
                <ModalContainer>
                    <img src={largeImgObj.largeImageURL} alt={largeImgObj.tags} />
                </ModalContainer>
            </Overlay>
        )
    }
}

