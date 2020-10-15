import {addNewContact, getContacts, getContactsWithID, updateContact, deleteContact} from '../controllers/crmController'

const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // Middlewares
            console.log(`Request from: ${req.originalUrl}`);
            console.log(`Request type ${req.method}`);
            next();
        }, getContacts)
        //Post endpoint
        .post(addNewContact)

    app.route('/contact/:contactID')
         // get specific contact
        .get(getContactsWithID)
        // updating and delete specific contact
        .put(updateContact)
        .delete(deleteContact)
}

export default routes;