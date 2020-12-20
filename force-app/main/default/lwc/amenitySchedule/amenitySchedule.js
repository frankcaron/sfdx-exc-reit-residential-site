import { LightningElement, api } from 'lwc';
import bookAmenity from '@salesforce/apex/reitPropertyDataHelper.getPropertyList';

export default class AmenitySchedule extends LightningElement {

    //Properties
    @api
    recordId;

    @api
    operatingMode;

    //Variables
    selectedElement;
    selectedTime;
    selectedEmail;
    booked = false;

    // Toggle Select
    toggleSelection(event){

        //Get new event
        let evt = event.currentTarget;

        //If an event is already selected before,
        if (this.selectedElement) {
            this.selectedElement.classList.toggle('selected');
            this.selectedElement = evt;
            this.selectedElement.classList.toggle('selected');
            this.selectedTime = this.selectedElement.getAttribute('data-appointmenttime');
        } else {
            this.selectedElement = evt;
            this.selectedElement.classList.toggle('selected');
            this.selectedTime = this.selectedElement.getAttribute('data-appointmenttime');
        }

        // Logging
        console.log("REIT Amenity Schedule || Selected element: " + this.selectedElement);
        console.log("REIT Amenity Schedule || Selected Time: " + this.selectedTime);
    }

    // Snag Email
    emailChange(event) {
        this.selectedEmail= event.target.value;
    }

    // Create Record
    createAppointment() {

        //Create appointment
        this.booked = true;

        //Build amenity details

        //Call Apex Controller To Created Booking
        bookAmenity({ email: this.selectedEmail, timeSlot: this.selectedTime })
            .then((result) => {
                console.log(result);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}