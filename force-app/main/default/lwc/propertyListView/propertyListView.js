import { LightningElement, api, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getPropertyList from '@salesforce/apex/reitPropertyDataHelper.getPropertyList';

export default class PropertyListView extends NavigationMixin(LightningElement) {

    //Properties
    @api
    numResults;

    //Variables
    properties;

    //Data Wire
    @wire(getPropertyList, { lim: '$numResults' })
    wiredProperties({ error, data }) {
        console.log("REIT Property Fetch || Trying to fetch property records...");
        if (data) {
            console.log("REIT Property Fetch || Found records!");
            console.log(data);
            this.properties = data;
            this.error = undefined;
        } else if (error) {
            console.log("REIT Property Fetch || Failed to find records");
            console.log(error);
            this.error = error;
            this.properties = undefined;
        } else {
            console.log("REIT Property Fetch || Something went wrong.");
        }
    }

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