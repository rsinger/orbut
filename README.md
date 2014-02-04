orbut
=====

Current awareness system for DPLA

Follow That Cab!

A DPLA Appfest project designed to use the DPLA API to allow for users to easily design a query and have it auto-update on a regular basis. On update, it will report out to user-designated functions such as email, twitter, Tumblr, etc. 

The initial incarnation will be limited in output to email, but will be designed to produce structured data that can be used in future development. 

USE

Users will be presented with 3 field inputs that will be used to construct a query against the DPLA API: Subject, Place, and Time. Users will also be prompted for their email address, which will be used as their system identifier for future visits.

Once their query is constructed, they can set a frequency (Daily, Weekly, Monthly) and it will run on that schedule and email them the updated results. If the system returns no results, no email is sent. 

FUTURE DEVELOPMENT 

Future development should be centered around increasing the granularity/functionality of the front-end query design, adding fields and operators as they are added to the API. Additional destinations can be added by transforming the JSON and pushing to the service of choice. 