import { LightningElement, api } from 'lwc';
export default class AmenitySchedule extends LightningElement {

    //Properties
    @api
    recordId;

    //Variables
    selectedElement;
    selectedTime;

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

    // Create Record
    createAppointment() {
        //Create appointment
    }
}