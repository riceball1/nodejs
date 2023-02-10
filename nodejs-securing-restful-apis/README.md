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