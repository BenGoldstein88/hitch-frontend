import React from 'react';
import VenueHeader from '../venue/VenueHeader'
import VenueLeftColumn from '../venue/VenueLeftColumn'
import VenueRightColumn from '../venue/VenueRightColumn'
import VenueFooter from '../venue/VenueFooter'
import WatsonModal from '../WatsonModal'
export default class PageDisplayVenue extends React.Component {
   constructor(props) {
    super(props);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleModalChange = this.handleModalChange.bind(this);

    this.openModal = this.openModal.bind(this)
    this.handleClose = this.handleClose.bind(this)
    this.state = {
      modal: false
    }
  }

  handleClose() {
    this.props.onPayChange()
    this.setState({
      modal: !this.state.modal
    })
  }

  handleModalChange() {
    this.setState({
      modal: !this.state.modal
    })
    // this.props.onDisplayChange('venue')
  }
  handleDoubleClick(e){
    // this.setState({isClicked: !this.state.isClicked})
    // this.props.onDisplayChange('venue')
    console.log('clicked!')
    this.openModal()
  }

  openModal() {
    console.log('wtfff?')
    this.setState({
      modal: true
    })
  }

  render() {

    var watsonJSON = { "source_document_id": "", "timestamp": "2016-09-11T07:12:36.453Z", "media_type_detected": "application/pdf", "metadata": [ { "name": "publicationdate", "content": "2016-09-10" } ], "answer_units": [ { "id": "d46466aa-7dc6-4469-8ff0-501f598c5e24", "type": "body", "parent_id": "", "title": "no-title", "direction": "ltr", "content": [ { "media_type": "text/plain", "text": "Name : WEST IN ST. FRANC IS Address : 335 Powel l S t , San Franc isco , CA 94102 Contact Name : Lauren Schardt Contact Number : (412) 397-­‐‑7000 Proposal : Wedding Date: 08/01/17 Guest Count: 100 Package Choice: Imperial Package includes: Venue Rental 8 hours Imperial Tasting Menu Champagne Toast Complimentary room for the Couple Initial Deposit: $17,000 2nd Payment due by Jan 1, 2017 $10,000 Final Payment due by Aug 1, 2017 $10,000 Cancellation Fee is 50% within 160 days No outside caterers allowed Expenses : 1. Meal Package: $200 @ 100 2. Valet Parking $20 @ 100 3. Venue Rental Fee: $5000 Notes : " } ] } ], "warnings": [ { "phase": "answer_units", "warning_id": "no_selector_tag_match", "description": "Only one answer unit was produced because none of the selector_tags [h1, h2, h3, h4, h5, h6] matched against the document." } ] }
    var watsonText = watsonJSON.answer_units[0].content[0].text
    var watsonTextClean = watsonText.replace(/\s+/g, " ");


    var venueName = watsonTextClean.match(/^Name\s:\s.+?(?=:)/).toString()
    var venueNameClean = venueName.substring(7, 27)
    venueNameClean = venueNameClean.replace(/\s/, '')
    venueNameClean = venueNameClean.replace(/\s\S*$/, '') + 'IS'



    var venueAddress = watsonTextClean.match(/Address\s:\s.+?(?=:)/).toString()
    var venueAddressClean = venueAddress.substring(10, 53)
    venueAddressClean = venueAddressClean.replace(/(l l)/, 'll')
    venueAddressClean = venueAddressClean.replace(/(S\st\s)/, 'St')
    venueAddressClean = venueAddressClean.replace(/(c\si)/, 'ci')
    venueAddressClean = venueAddressClean.replace(/(l l)/, 'll')

    var contactName = watsonTextClean.match(/Contact\sName\s:\s.+?(?=(Contact))/).toString()
    var contactNameClean = contactName.substring(15, 29)

    var contactNumber = watsonTextClean.match(/Contact\sNumber\s:\s.+?(?=:)/).toString()
    var contactNumberClean = contactNumber.substring(17,34)
    contactNumberClean = contactNumberClean.replace(/(-­‐‑)/, '-')

    var initialDeposit = watsonTextClean.match(/Initial\sDeposit:\s.+?(?=(2nd))/).toString()
    var initialDepositClean = initialDeposit.substring(17,24)


    var venueRentalFee = watsonTextClean.match(/Venue\sRental\sFee:\s.+?(?=(Notes))/).toString()
    var venueRentalFeeClean = venueRentalFee.substring(18,25)
    var mealPackage = watsonTextClean.match(/Meal\sPackage:\s.+?(?=(2.\s))/).toString()
    var mealPackageClean = mealPackage.substring(14, 24)
    var mealPackagePrice = mealPackageClean.substring(0,4)
    var mealPackageQuantity = mealPackageClean.substring(7)

    var valetParking = watsonTextClean.match(/Valet\sParking.+?(?=(3.\s))/).toString()
    var valetParkingClean = valetParking.substring(14, 23)
    var valetParkingPrice = valetParkingClean.substring(0,3)
    var valetParkingQuantity = valetParkingClean.substring(6)
          // {venueNameClean}
          // {venueAddressClean}
          // {contactNumberClean}
          // {contactNameClean}
          // {initialDepositClean}
          // {venueRentalFeeClean}
          // {mealPackageClean}
          // {mealPackagePrice}
          // {mealPackageQuantity}
          // {valetParkingClean}
          // {valetParkingPrice}
          // {valetParkingQuantity}
    var pdfMap = {
      venueName: venueNameClean,
      venueAddress: venueAddressClean,
      contactNumber: contactNumberClean,
      contactName: contactNameClean,
      initialDeposit: initialDepositClean,
      venueRentalFee: venueRentalFeeClean,
      mealPackagePrice: mealPackagePrice,
      mealPackageQuantity: mealPackageQuantity,
      valetParkingPrice: valetParkingPrice,
      valetParkingQuantity: valetParkingQuantity,
      watsonText: watsonTextClean

    }
    return (
      <div onDoubleClick={this.handleDoubleClick} style={{height: '100%', width: '100%'}}>
        <WatsonModal header='Not so fast, whippersnappers!' title='IBM Watson is here to help!' text='Hey! This all looks great. Would you like to go ahead and pay the deposit?' buttonText='Pay Deposit!' showModal={this.state.modal} onModalChange={this.handleModalChange} onClose={this.handleClose}/>
      	<VenueHeader venueName={pdfMap.venueName} venueAddress={pdfMap.venueAddress}/>
      	<VenueLeftColumn contactName={pdfMap.contactName} contactNumber={pdfMap.contactNumber} watsonText={pdfMap.watsonText}/>
        <VenueRightColumn onPayChange={this.props.onHandlePayChange} pay={this.props.pay} mealPackagePrice={pdfMap.mealPackagePrice} mealPackageQuantity={pdfMap.mealPackageQuantity} valetParkingPrice={pdfMap.valetParkingPrice} valetParkingQuantity={pdfMap.valetParkingQuantity} venueRentalFee={pdfMap.venueRentalFee}/>
        <VenueFooter />
      </div>
    );
  }
}

