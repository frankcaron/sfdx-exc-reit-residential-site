public with sharing class getReitPropertyList {

    @AuraEnabled (cacheable=true)
    public List<Rental_Property__c> properties getReitPropertyList(Integer lim) {
        List<Rental_Property__c> listToReturn = [SELECT Name,
                                                        Street_Address__c,
                                                        State__c,
                                                        City__c,
                                                        Country__c,
                                                        Unit__c
                                                        Description__c,
                                                        Image__c,
                                                        Studio_Start_Price__c,
                                                        One_Bedroom_Start_Price__c,
                                                        Two_Bedroom_Start_Price__c,
                                                        Offer_Count__c
                                                FROM Rental_Property__c LIMIT :lim];

    }
}
