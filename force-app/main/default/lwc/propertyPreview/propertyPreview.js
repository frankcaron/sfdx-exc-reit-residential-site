import { api, LightningElement, wire } from 'lwc';
import { getRecord, getFieldValue } from 'lightning/uiRecordApi';
import IMAGE_FIELD from '@salesforce/schema/Rental_Property__c.Image__c';

export default class PropertyPreview extends LightningElement {
    @api
    recordId;

    @wire(getRecord, { recordId: '$recordId', fields: [IMAGE_FIELD] })
    image;

    get imagePath() {
        return getFieldValue(this.image.data, IMAGE_FIELD);
    }
}