import { addNewContact, getContactWithID, getContacts, updateContact, deleteContact } from "../controllers/crmController";

const routes = (app) => {

// get all contacts
app.route('/contact')
.get((req, res, next) => {
    // middleware
    console.log(`Request from : ${req.originalUrl}`)
    console.log(`Request type : ${req.method}`)
    next(); 
}, getContacts)
// create a new contact
.post(addNewContact);

// get specific contact
app.route('/contact/:contactId')
.get(getContactWithID)

// update data
.put(updateContact)
// delete a contact
.delete(deleteContact)

}

export default routes;