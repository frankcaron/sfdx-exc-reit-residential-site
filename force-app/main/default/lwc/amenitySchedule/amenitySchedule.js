import { LightningElement, api } from 'lwc';
import bookAppointment from '@salesforce/apex/reitPropertyDataHelper.bookAppointment';

export default class AmenitySchedule extends LightningElement {

    //Properties
    @api recordId;
    @api operatingMode;
    @api firstName;
    @api lastName;
    @api comment;
    @api email;
    @api phone;

    //Variables
    selectedElement;
    selectedTime;
    selectedEmail;
    booked = false;
    error = false;

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
        this.selectedEmail = event.target.value;
    }

    // Create Record
    createAppointment(event) {

        //Lock button
        let evt = event.currentTarget;
        evt.disabled = true;

        //Clear error
        this.error = null;

        //Check email
        if (!this.selectedEmail) {
            this.selectedEmail = this.email;
        }

        //Call Apex Controller To Created Booking
        bookAppointment({ email: this.selectedEmail, timeSlot: this.selectedTime, amenityOrProperty: this.recordId, operatingMode: this.operatingMode})
            .then((result) => {
                if (result) {
                    console.log("REIT Amenity Schedule || Successfully created booking.");
                    this.booked = true;
                } else {
                    console.log("REIT Amenity Schedule || Failed to create booking.");
                    this.booked = false;
                    evt.disabled = false;
                }
            })
            .catch((error) => {
                console.log("REIT Amenity Schedule || Hard error during booking creation. Details:");
                this.error = error.body.message;
                console.log(error);
                evt.disabled = false;
            });
    }
}