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
    @AuraEnabled (cacheable=true)
    public static Boolean bookAmenity(String email, String timeSlot) {
        System.debug(email);
        System.debug(timeSlot);

        return true;
    }

}
