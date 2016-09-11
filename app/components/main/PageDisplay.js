import React from 'react';
import styles from '../../styles/indexStyles'
// import FileUploadForm from '../venue/FileUploadForm'
import Typist from 'react-typist';
import PageDisplayVenue from './PageDisplayVenue'
export default class PageDisplay extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClicked: false
    }
  }

  handleClick(){
    this.setState({isClicked: !this.state.isClicked})
  }

  componentDidMount(){
    window.addEventListener('click', this.handleClick);
  }


  render() {
  	let watsonJSON = { "source_document_id": "", "timestamp": "2016-09-11T07:12:36.453Z", "media_type_detected": "application/pdf", "metadata": [ { "name": "publicationdate", "content": "2016-09-10" } ], "answer_units": [ { "id": "d46466aa-7dc6-4469-8ff0-501f598c5e24", "type": "body", "parent_id": "", "title": "no-title", "direction": "ltr", "content": [ { "media_type": "text/plain", "text": "Name : WEST IN ST. FRANC IS Address : 335 Powel l S t , San Franc isco , CA 94102 Contact Name : Lauren Schardt Contact Number : (412) 397-­‐‑7000 Proposal : Wedding Date: 08/01/17 Guest Count: 100 Package Choice: Imperial Package includes: Venue Rental 8 hours Imperial Tasting Menu Champagne Toast Complimentary room for the Couple Initial Deposit: $17,000 2nd Payment due by Jan 1, 2017 $10,000 Final Payment due by Aug 1, 2017 $10,000 Cancellation Fee is 50% within 160 days No outside caterers allowed Expenses : 1. Meal Package: $200 @ 100 2. Valet Parking $20 @ 100 3. Venue Rental Fee: $5000 Notes : " } ] } ], "warnings": [ { "phase": "answer_units", "warning_id": "no_selector_tag_match", "description": "Only one answer unit was produced because none of the selector_tags [h1, h2, h3, h4, h5, h6] matched against the document." } ] }
  	let watsonText = watsonJSON.answer_units[0].content[0].text
    let watsonTextClean = watsonText.replace(/\s+/g, " ");


    let venueName = watsonTextClean.match(/^Name\s:\s.+?(?=:)/).toString()
    let venueNameClean = venueName.substring(7, 27)
    venueNameClean = venueNameClean.replace(/\s/, '')
    venueNameClean = venueNameClean.replace(/\s\S*$/, '') + 'IS'



    let venueAddress = watsonTextClean.match(/Address\s:\s.+?(?=:)/).toString()
    let venueAddressClean = venueAddress.substring(10, 53)
    venueAddressClean = venueAddressClean.replace(/(l l)/, 'll')
    venueAddressClean = venueAddressClean.replace(/(S\st\s)/, 'St')
    venueAddressClean = venueAddressClean.replace(/(c\si)/, 'ci')
    venueAddressClean = venueAddressClean.replace(/(l l)/, 'll')

    let contactName = watsonTextClean.match(/Contact\sName\s:\s.+?(?=(Contact))/).toString()
    let contactNameClean = contactName.substring(13, 29)

    let contactNumber = watsonTextClean.match(/Contact\sNumber\s:\s.+?(?=:)/).toString()
    let contactNumberClean = contactNumber.substring(17,34)
    contactNumberClean = contactNumberClean.replace(/(-­‐‑)/, '-')

    let initialDeposit = watsonTextClean.match(/Initial\sDeposit:\s.+?(?=(2nd))/).toString()
    let initialDepositClean = initialDeposit.substring(17,24)


    let venueRentalFee = watsonTextClean.match(/Venue\sRental\sFee:\s.+?(?=(Notes))/).toString()
    let venueRentalFeeClean = venueRentalFee.substring(18,25)
    let mealPackage = watsonTextClean.match(/Meal\sPackage:\s.+?(?=(2.\s))/).toString()
    let mealPackageClean = mealPackage.substring(14, 24)
    let mealPackagePrice = mealPackageClean.substring(0,4)
    let mealPackageQuantity = mealPackageClean.substring(7)

    let valetParking = watsonTextClean.match(/Valet\sParking.+?(?=(3.\s))/).toString()
    let valetParkingClean = valetParking.substring(14, 22)
    let valetParkingPrice = valetParkingClean.substring(0,3)
    let valetParkingQuantity = valetParkingClean.substring(6)

    if (this.state.isClicked === false) {
      return (
        <div className={styles.page.verticalAlign} style={{
        		height: '73vh'
        }}>
          <div style={{
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
    } else {
      return (
        <div className={styles.page.verticalAlign} style={{
          height: '73vh'
        }}>
          <PageDisplayVenue />
        </div>
      );
    }
  }
}

