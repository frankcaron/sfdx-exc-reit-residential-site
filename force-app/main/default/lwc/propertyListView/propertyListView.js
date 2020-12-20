import { LightningElement, api, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class PropertyListView extends NavigationMixin(LightningElement) {

    //Properties
    @api
    numResults;

    //Variables
    @api
    properties = [
        { id: 123, title: "AVA 55 Ninth", description: "This is a property description.", offers: 2, studio: 500, oneBed: 1000, twoBed: 2000, img: "https://media.gettyimages.com/photos/large-multicondos-building-blocks-with-bicycles-lane-picture-id1174752803?s=612x612"},
        { id: 234, title: "AVA Sunset", description: "This is another property description.", offers: 1, studio: 800, oneBed: 1200, twoBed: 1900, img: "https://media.gettyimages.com/photos/large-multicondos-building-blocks-with-bicycles-lane-picture-id1174752803?s=612x612"}
    ];

    //@api
    //properties;


    // Navigate to the record list page for the object
    navigateToPropertyList() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Rental_Property__c',
                actionName: 'list'
            },
            state: {
                filterName: 'All'
            }
        });
    }

    // Navigate to the record list page for the object
    navigateToCreatePropertyPage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Rental_Property__c',
                actionName: 'new'
            }
        });
    }

}