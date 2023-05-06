# Databases for Node.js Developers


Linkedin Learning [link](https://www.linkedin.com/learning/databases-for-node-js-developers-2)

## Notes


### Understanding Databases
        - What are databases?
            - Databases are a large collection of data organized for rapid search and retrieval
            - Databases can be anything index, including phone books
            - Databases have a database management system (DBMS), which is an application for organizing data in tables or collections
            - DBMS also supports indexes for fast data retrieval
            - Data is stored on disk or in memory
            - A client library is installed to communicate with the DBMS and access the data from applications.

        - Relational databases
            - have static schemas that define:
                - tables
                table structure
                relation between records
            - examples:
                - a student has one place of birth (1:1)
                - a college has many students (1:n)
                - a subject has many students and a student has many subjects (m:n)
            - entity relationship diagram (ERD)
                - used to better understand the relationships within a database
            - data normalization
            - most relational databases try to follow the ACID principle
                - atomicity - a transaction has to be "all or nothing"
                - consistency - a transaction has to transform the data from one valid state to another
                - isolation - concurrent transactions leave the data in a state as if they were executed in sequence
                - durability - once a transaction has been committed it shall be persistently stored
            - types of databases
                - open source: mySQL, postgreSQL
                - commerical: oracle, IBM Db2, Microsoft SQL Server

        - nonrelational databases
            - existed since 1960s but got popular with web 2.0
            - no integrity through relations
            - by definition not ACID complaint
            - often a synonym for document database, but others include graph dbs
            - schemaless databases
                - no defined data structure
                - can store arbitrary data
                - schema management moves into the application
        
        - Understand NoSQL databases and key-value stores
            - NoSQL databases such as MongoDB, Couchbase, Redis, CouchDB, DynamoDB, and Cassandra are non-relational databases that have no integrity enforcement and are not ACID compliant.
            - NoSQL databases are often a synonym for document databases, but there are others like graph databases as well.
            - NoSQL databases are schema-less, which means they have no predefined data structure and can store arbitrary data.
            - With NoSQL databases, schema management moves into the application.
            - MongoDB supports arrays as the value, which means that multiple values can be stored in one document.
            - MongoDB does not support transactions, but records can still be manipulated in an atomic way.