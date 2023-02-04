# Nodejs Testing and Code Quality

linkedin tutorial [link](https://www.linkedin.com/learning/node-js-testing-and-code-quality-14003857)

## Notes from Testing and Code Quality Fundamentals

**What is Code Quality**
- Quality consists of those product features that meet the needs of customers and thereby provide product satisfaction.
- Quality consists of freedom from deficiencies
- Functionality
    - does what it's supposed to do
    - example: email storage
        - requirements: store email address
    - can't store?
        - failed storage requirement
    - store non-email?
        - failed storage requirement
- What is useful codes?
    - flexible and reusable
    - example: Add "1" to a number
        - functional, but inflexible
    - example: add any number to any number
        - more useful
    - example: built-in math library
        - more useful
- Is code maintainable?
    - 1) can you maintain the code?
    - 2) can someone else maintain without help?
    - 3) can someone else read and understand the design and intent?
    - if yes to all three then it is maintainable code
- code maintainability evovles
    - may start unmaintainable and improve over time
    - may get worse over time
    - engineers improve with experience -- revisits old code and improves
    - goal: continual improvement
        - make series of improvements
        - less risk of damaging functional code
- Improve maintainability
    - consistent formatting, logical naming
        - helps reading
    - clear comments and functional docs
        - describes intent
**How Can You Improve Code Quality?**
- what is a coding convention?
    - set of guidelines for a language
    - programming style - code readabiility
    - practices - how to build and architect
    - methods -- how to plan and implement
- what is a coding standard?
    - collection of coding conventions
    - designed to produce quality code
    - formally specified and adopted
- programming styles conventions
    - comments
        - documentation of methods and functions
        - spelling and punctuation
        - format
        - multi-line vs single-line 
    - whitespace
        - spaces vs tabs
        - line length
    - naming (variables, functions, etc)
        - capitalization of identifiers and properties
        - length of identifiers
        - meaningful
    - possible errors
        - syntactically legal, but cause problems, etc syntax issues and typos
    - security etc.
**Creating a Coding Standard**
    1. determine what's available and appropriate
    2. decide what has the most positive impact -- experiement!
    3. briefly document each justification (the why)
    4. create configurations
    5. revisit rules regularly
    - involve the whole team, share decision making, build consensus
    - goal is gradual improvement
- coding standard pitfalls
    - too many rules
    - needlessly strict rules
- what is a linter?
    - tool that flags suspcious usage in code
    - fast, accurate, consistent, impersonal
    - can autofix problems
    - linter reports affected location, severity of error, and describes the problem in human readable form, provides rules