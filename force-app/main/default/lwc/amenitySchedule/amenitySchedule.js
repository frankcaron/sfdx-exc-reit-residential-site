import { LightningElement, api } from 'lwc';

export default class AmenitySchedule extends LightningElement {

    //Properties
    @api
    recordId;

    //Variables
    selectedElement;

    // Toggle Select
    toggleSelection(event){
        //Remove old class
        if (this.selectedElement) { this.selectedElement.classList.toggle('selected') };

        //Add new class
        let evt = event.currentTarget;
        evt.classList.toggle('selected');
        this.selectedElement = evt;
    }
}