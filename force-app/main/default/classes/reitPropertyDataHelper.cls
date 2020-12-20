public with sharing class reitPropertyDataHelper {

    //Constructor
    public reitPropertyDataHelper() {
        //super
    }

    //Apex method to fetch REIT property data
    @AuraEnabled (cacheable=true)
    public static List<Rental_Property__c> getPropertyList(Integer lim) {
        List<Rental_Property__c> listToReturn = [SELECT Id,
                                                        Name,
                                                        Nickname__c,
                                                        Street_Address__c,
                                                        State__c,
                                                        City__c,
                                                        Country__c,
                                                        ZIP__c,
                                                        Description__c,
                                                        Image__c,
                                                        Studio_Start_Price__c,
                                                        One_Bedroom_Start_Price__c,
                                                        Two_Bedroom_Start_Price__c,
                                                        Offer_Count__c
                                                FROM Rental_Property__c LIMIT :lim];
        return listToReturn;
    }

    //Apex method to create Booking against an Amenity
    @AuraEnabled (cacheable=false)
    public static Boolean bookAppointment(String email, String timeSlot, String amenityOrProperty, String operatingMode) {

        System.debug('REIT Appointment Schedule || Email is... ' + email);
        System.debug('REIT Appointment Schedule || Timeslot is... ' + timeSlot);
        System.debug('REIT Appointment Schedule || Record is... ' + amenityOrProperty);

        //Find contact
        List<Contact> contactToUse = [SELECT Id, email FROM Contact WHERE email = :email LIMIT 1];

        if (operatingMode == 'Amenity') {
            //Create Amenity Booking
            try {
                Amenity_Booking__c newBooking = new Amenity_Booking__c();
                newBooking.Booking_Time__c = DateTime.valueOf(timeSlot);
                newBooking.Amenity__c = amenityOrProperty;
                if (contactToUse.size() > 0) {
                    newBooking.Contact__c = contactToUse[0].Id;
                }
                insert newBooking;
                System.debug('REIT Amenity Schedule || Created Booking successfully.');
                return true;
            } catch(DmlException e) {
                System.debug('REIT Amenity Schedule || The following exception has occurred: ' + e.getMessage());
                return false;
            }
        } else if (operatingMode == 'Property') {
            //Create Property Viewing
            try {
                Property_Viewing__c newBooking = new Property_Viewing__c();
                newBooking.Viewing_Time__c = DateTime.valueOf(timeSlot);
                newBooking.Property__c = amenityOrProperty;
                if (contactToUse.size() > 0) {
                    newBooking.Contact__c = contactToUse[0].Id;
                }
                insert newBooking;
                System.debug('REIT Viewing Schedule || Created Booking successfully.');
                return true;
            } catch(DmlException e) {
                System.debug('REIT Viewing Schedule || The following exception has occurred: ' + e.getMessage());
                return false;
            }
        } else {
            System.debug('REIT Appoitment Schedule || Type is not known');
            return false;
        }
    }

}
