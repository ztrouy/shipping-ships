# Learning Efficiency Focus

### How can you change the layout of the lists from top-down to having 3 columns?
By using the CSS `display: flex` on the HTML Element containing the 3 lists, each list could sit side by side, rather than in one column

### How can you sort each list of names alphabetically?
Using the `.sort()` or `.localeCompare()` methods, while also using `.toLowerCase()` on each String to ensure case does not alter results

### How would your ERD change if the customer had the following, new requirement?
> Each dock will only service some of the hauling ships because of contracts with their companies. 
> For example, Rotterdam will only service "Seawise Giant" and "Pioneering Spirit", and Busan will service "Seawise Giant" and "Boaty McBoatface". 
> Each hauling ship can be serviced by many docks, and each dock can service one, or more, hauling ships. 
> You need to keep track of the allowed relationships in your database.

Adding a new element to the dock table, an Array of Foreign Keys of all the hauling ships the dock has a contract with

The Primary Key of a hauling ship would have a one-to-many relationship with the new Array in the dock Table

### What is `structuredClone()` in Javascript, and how could it be used in your project?
The `structuredClone()` function allows for the creation of actual, deep copies, rather than simply creating additional references to the same data. 

Could be useful when alphabetizing the Objects in an Array, as the alphabetization would not alter the original database Array