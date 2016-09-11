import React from 'react';
import styles from '../../styles/indexStyles'
import WatsonModal from '../WatsonModal'
export default class PageDisplayMain extends React.Component {
 constructor() {
    super();
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleModalChange = this.handleModalChange.bind(this);

    this.openModal = this.openModal.bind(this)
    this.state = {
      isClicked: false,
      modal: false
    }
  }

  handleModalChange() {
    this.setState({
      modal: !this.state.modal
    })
  }
  handleDoubleClick(e){
    // this.setState({isClicked: !this.state.isClicked})
    // this.props.onDisplayChange('venue')
    this.openModal()
  }

  openModal() {
    console.log('wtf?')
    this.setState({
      modal: true
    })
  }
  componentDidMount(){
    // window.addEventListener('doubleclick', this.handleClick);
  }

  render() {
  return (
        <div className={styles.page.verticalAlign} style={{
            height: '73vh'
        }}>
        <WatsonModal showModal={this.state.modal} onModalChange={this.handleModalChange}/>
          <div onDoubleClick={this.handleDoubleClick} style={{
            height: '100%',
            margin: '50px 60px 75px 90px',
            backgroundImage: 'url("../../app/images/maxiDiamond.png")',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain'
          }}>
            <p style={{
              top: '-25px',
              left: '78px',
              display: 'inline',
              position: 'relative',
              fontFamily: '"Raleway", sans-serif'
            }}>WEDDING PARTY</p>
            <p style={{
              top: '-25px',
              left: '275px',
              display: 'inline',
              position: 'relative',
              fontFamily: '"Raleway", sans-serif'
            }}>GUESTS</p>
            <p style={{
              top: '145px',
              right: '230px',
              display: 'inline',
              position: 'relative',
              fontFamily: '"Raleway", sans-serif'
            }}>DETAILS</p>
            <p style={{
              top: '145px',
              left: '330px',
              display: 'inline',
              position: 'relative',
              fontFamily: '"Raleway", sans-serif'
            }}>LOCATION</p>
            <p style={{
              top: '495px',
              right: '55px',
              display: 'inline',
              position: 'relative',
              fontFamily: '"Raleway", sans-serif'
            }}>VENDORS</p>
            <p style={{
              top: '245px',
              left: '330px',
              display: 'inline',
              position: 'absolute',
              fontFamily: '"Raleway", sans-serif',
              fontSize: '2em'
            }}>ALYSSA</p>
            <p style={{
              top: '285px',
              left: '370px',
              display: 'inline',
              position: 'absolute',
              fontFamily: '"Raleway", sans-serif',
              fontSize: '2em'
            }}>&</p>
            <p style={{
              top: '325px',
              left: '350px',
              display: 'inline',
              position: 'absolute',
              fontFamily: '"Raleway", sans-serif',
              fontSize: '2em'
            }}>DAN</p>
            <img src='../../app/images/commandIcon.png' alt="Watson Command Icon"
              style={{
                width: '10%',
                position: 'relative',
                float: 'right',
                top: '85%'
              }}
            />
          </div>
        </div>
      );
  }
}
