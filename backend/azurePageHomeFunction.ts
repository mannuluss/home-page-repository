import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import db from "./database"

const getAllHome = async (): Promise<any> => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM config_repository.pages', (err, rows, fields) => {
            if (err) {
                console.error(err);
                return reject(err);
            } else {
                console.debug("RESPONSE GET PAGES")
                console.log(rows);
                return resolve(rows);

            }
        });
    })
}

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.log('HTTP trigger function processed a request.');
    let bodyResponse = await getAllHome();
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: bodyResponse
    };
    /*const name = (req.query.name || (req.body && req.body.name));
    const responseMessage = name
        ? "Hello, " + name + ". This HTTP triggered function executed successfully."
        : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
    */
};

export default httpTrigger;