
# Project Title

Data collection website for a yoga form

I've used database as the MongoDB dataabse name here:

Name of yogaForm Collection: flexmoney


There are two directories:

1)Client side: design

2)Server-side: the server

1.The App.js is the homescreen from which we may browse to Home.js (the form) and the payment successful screen in the form (Response.js)

2.I gathered the following information:

a)Name (should not be empty) (should not be empty)

b)Age (should be between 18 and 65 inclusive) (should be between 18 and 65 inclusive)

c)Email ID (must be valid and tested against a regex pattern)

d)Telephone number (should be a 10 digit phone number)

e)The batch in which the individual desires to register (6-7 AM, 7-8 AM, 8-9 AM, and 5-6 PM, which is needed information and should not be left blank)

This collected data is updated in the database (along with the payment month) The fields in the collection:

_ id: given by the database itself
name: name of the person
age: age of the person
email: email of the person
number: phone number of the person
radio: which batch he/she chooses
payment_for: which month is the payment intended for


So I gathered the aforementioned information and verified the accuracy of the information entered. Once the validity check is complete, the entered data is inserted (if the email is not already existing) or updated (if the email is already there) by utilising the updateOne() method and submitting the upsert as true.

This acquired data is entered into the database and updated (along with the payment month) The following fields are included in the collection:
So email is used as a query to determine whether the database includes this email or not; if it does, we simply update the details; otherwise, we add a new record. Following this, the website is led to the responsescreen, which displays that the payment was successful (which is not implemented (the payment gateway) as it should be).

## Deployment

Frontend is hosted on netlify.



## Installation


## Run Locally

Clone the project

Run my-project with npm for Client Side

```bash
  cd Client
```

```bash
  npm i
```

```bash
  npm start
```
Run my-project with npm for Server Side

```bash
  npm i
```

```bash
  nodemon server.js 
```


## Screenshots

ER Diagram:
![abhi_er_diagram](https://user-images.githubusercontent.com/53110403/208310997-12fda750-9a3c-4b0f-b149-fdc3388cb647.jpg)

Registration Page :

![flex1](https://user-images.githubusercontent.com/53110403/208310913-dcd6e695-fdae-488c-87f6-d302c7d7dd2a.png)


Registration page success:

![flex2](https://user-images.githubusercontent.com/53110403/208310918-46134c28-2c75-4ba4-97d9-10071af70779.png)

Payment Page:

![flex3](https://user-images.githubusercontent.com/53110403/208310919-251b300e-3c87-445d-a432-044cbef736b6.png)

