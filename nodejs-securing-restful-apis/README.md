# Node.js Securing RESTful APIs

[Linkedin tutorial](https://www.linkedin.com/learning/node-js-securing-restful-apis-2)

## Notes

- Top 5 Security Threats
    1. injection attacks
    2. Broken authentication
    3. Sensitive data exposure
    4. XML Entities
    5. Broken access control 
- OWASP - open web application security project
- JWT - json web token
    - JSON Web Tokens (JWT) and its use in secure information transmission between parties. 
    - JWT consists of three parts: a header, a payload, and a signature. 
        - The header has information about the type of token and the encryption algorithm used. 
        - The payload contains metadata from the request party, such as the issuer and expiration. 
        - The signature proves the identity of the requester and validates the request. 
    - JWT is used for secure information transmission and can also be used for user authentication. 
    - The AuthO service uses JWT, and its documentation was created by the AuthO team.
    - `bcrypt` is used to encrypt and decrypt data
        - also used is json web token (JWT)

    ## Run project

    - Use `brew services start mongodb-community@6.0` to run the mongodb setup from [here](https://www.mongodb.com/docs/manual/tutorial/install-mongodb-on-os-x/) 
    - also change `localhost` to `127.0.0.1`


## Test the API endpoints:

1. Register a user - checkout the userControllers to see what to send via postman
2. Login to get a token
3. Get contacts allows you to pass in the header the following:

```
{content-type: application/x-www-form-urlencoded, authorization: 'JWT <token>'}
```

## Services for securing APIS
1. firebase
2. cloud mongodb
3. microsoft azure
4. aws

frameworks
1. loopback
2. strapi
3. sails.js

Alternative
1. auth0
