This example demonstrates how to run io.Manager Server from NPM packages using basic authentication.

## Prerequisites 

### Access
The NPM packages exposing the io.Manager Server and the Admin UI are hosted in a private NPM repository. To obtain access, contact us at info@glue42.com.

### Environment Setup
Generate an .npmrc file that will contain the authentication information for connecting to the private NPM repository. Make sure to exclude this file from your source control system.

To generate an .npmrc file:

* Login to Glue42 JFROG.
* Expand the menu in top right.
* Click "Setup".
* Select "NPM".
* From the dropdown menu select _default-npm-virtual_.
* Copy the snippet.
* Create an .npmrc file with the copied contents.

### Setup MongoDB or other database

io.Manager requires a database to connect to - this example depends on MongoDB, but you can use any other of the supported databases. You will need to either have a local instance or setup a remote database to connect to.

## How to run the server

Execute 
```sh
cd server
npm i
npm run start
```

This will start the server with one predefined user (username:admin, password: admin)

## How to run the administrative UI

1. Execute 
```sh
cd admin-ui
npm i
npm run start
```

This will run the administrative UI on *http://localhost:3000/*. Use (username:admin, password: admin) to login.
You can create extra users from the All Users screen (under Users menu).

## How to configure io.Connect Desktop use the server

You will need to edit system.json file located in %LocalAppData%\Tick42\GlueDesktop\config.

**Connecting to io.Manager Server**

To configure io.Connect Desktop to connect to the io.Manager Server, use the "server" top-level key. Add the following configuration to enable connection to the io.Manager Server:

```json
{
    "server": {
        "enabled": true,
        "url": "http://localhost:4356/api"
    }
}
```

This will add the io.Manager Server as an additional application store. If you want the io.Manager Server to be the only app store, set the "appStores" top-level key to an empty array.

This will also instruct Glue42 Enterprise to store Layouts and Application Preferences on the io.Manager Server.

**Using a custom login screen**

For basic authentication you can use the built in screen that comes as part of **Admin UI**.
To enable the custom login screen, use the "ssoAuth" top-level key. You need to point the login screen to the **Admin UI** url and add the **gd** query parameter. The **gd** query parameter is used to indicate that the login comes from io.Connect Desktop login page.

```json
{
    "ssoAuth": {
        "authController": "sso",
        "options": {
            "url": "http://localhost:3000/?gd",
            "window": {
                "width": 500,
                "height": 650,
                "mode": "flat"
            }
        }
    }
}
```
