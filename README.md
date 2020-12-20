# Salesforce Platform - REIT Residential Tenant Portal Model

![Status](https://img.shields.io/badge/status-Beta-yellowgreen)
![Geography](https://img.shields.io/badge/Geography-US-blue)

This Salesforce DX (SFDX) repository contains a built out data model, various page customizations, a new Lightning app, and a handful of custom Lightning Web Components that enable you to rapidly roll out a tenant portal for REIT's managing residential buildings. The customizations are designed to support both the internal tenant management for employees of the REIT as well as the Experience Cloud tenant portal.

# Data Model and Structure

The package introduces the following additional objects:

* Rental Properties
* Property Units
* Property Amenities
* Property Amenity Bookings
* Property Special Offers

Each of these objects has been built out with custom pages and page layouts as well as relevant fields. Properties are the overarching object, with Unit and Amenities being related back to the Property. Offers and Bookings are master-details of Properties and Amenities, respectively.

These objects have all been packaged up with a `Property Management Console` app and a handful of custom components that can be used in both an Experience Site and in the Console app itself, including:

* An interactive Amenity Scheduler
* A visual Property List component
* A visual Property Preview component

# Prereqs

In order to use this app, you'll need to ensure that you have...

* A Salesforce dev org
* Knowledge of SFDX
* Some JavaScript skills

## Deploy

Use SFDX, once connected to your Dev org's Dev Hub to deploy the source. The packaged LWCs are built entirely with vanilla JS, HTML, and CSS powered by the static resources included in the repo. The paired Apex classes will be deployed alongside these LWC.

# To Do

1. Build out more.

# Etc.

Created with love by Frank Caron.