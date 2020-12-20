import { LightningElement, api, wire } from 'lwc';

export default class PropertyListView extends LightningElement {

    //Variables
    @api
    properties = [
        { id: 123, title: "AVA 55 Ninth", description: "This is a property description.", offers: 2, studio: 500, oneBed: 1000, twoBed: 2000, img: "https://media.gettyimages.com/photos/large-multicondos-building-blocks-with-bicycles-lane-picture-id1174752803?s=612x612"},
        { id: 234, title: "AVA Sunset", description: "This is another property description.", offers: 1, studio: 800, oneBed: 1200, twoBed: 1900, img: "https://media.gettyimages.com/photos/large-multicondos-building-blocks-with-bicycles-lane-picture-id1174752803?s=612x612"}
    ];

    //@api
    //properties;

}