import { LightningElement, api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class PropertyCard extends NavigationMixin(LightningElement) {

    //Variables
    @api
    property;

    // Navigate to the record list page for the object
    navigateToProperty() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: this.property.Id,
                objectApiName: 'Rental_Property__c',
                actionName: 'view'
            }
        });
    }

}