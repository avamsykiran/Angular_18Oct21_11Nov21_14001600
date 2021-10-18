Angular 11
------------------------------------------------------------------------

    is a SPA javascript framework.

        Pre-Requisite
        --------------------------------------------------
            HTML 5
                DOM elements
                Form Elements and Validation attributes

            CSS 3 
                CSS-proeprties
                Type sof styles
                Selectors
                Responsiveness

            Bootstrap   (optional)

            Javascript (ES6)
                Standard JS objects like window,docuemnt,history,navigator,location
                Standard JS classes String, Math, Promise 
                Javascript Functions
                    Fucntion
                    Arrow Function
                    Closure
                    Call Back
                    'this'
                    IIFE
                    Optional Args, Rest Parameters
                Arrays, Spread Operator, Array Prototype Fucntions
                ES6 Features
                    ES6 Module (esm)
                    Tempalte Lieterals
                    Classes, Objects, Constructor, Inhertetence
            
        Web App Evolution
        -------------------------------------------------------
        
            Static Website      .html + css

            Dynamic Web Applications

                    Servlet + JSP
                    ASP.NET
                    ..etc

                Server-Side                                         Client-Side
                                <----------REQ---------------------
                    BackEnd App+
                    ViewEngine
                                ----Geenrated HTML+CSS+JS RESP -------> Unload te exsting content
                                                                    and render the newly received html+css


            Single Page Applications

                 Server-Side                                         Client-Side
                               
                    SPA Bundle       <----------First REQ---------------
                    
                     (index.htm + CSS+ JS)  ---------SPA Bundle (RESP)---> index.htm is loaded


                    
                    WebService      
                        SOAP/REST api   <----------REQ-------------------
                                        -------- DATA JSON/XML RESP------->  The JS on the client will receive
                                                                                the data and will manipulate
                                                                                the DOM on the existing index.htm
                                                                                such a way that the data is
                                                                                rendered on the sceen.

               
        Why Angular??
        -------------------------------------------------------
            Angular , ReactJS , VueJS ..etc are the other SPA frameworks.

            + HTML extendable
                    we can create our own html elements (tags) and attributes
            
            + DOM is auto updated as and when the bound data changes
            + Shadow DOM also enables this update to happen pretty faster.
            + Modular
                @angular/core
                @angular/commons
                @angular/forms
                @angular/browser
                @angular/commons/http
                @angular/router ...etc

            + Lazy Loading

        Angular Evolution
        -------------------------------------------------------

        angularJS               written in javascript and also consuemd in javascript and served as javascript

        Angular 2               written in typescript and consumed in typescript  but served as javascript
        Angular 4
        Angular 5
                .......
                11
                12

        Typescript
        -------------------------------------------------------

                        javascript                                      typescript
                        -------------------------------------------------------------------

                        const f1 = function(userName)  {            const f1 = function(userName:string):string  {
                            console.log(userName.length);             console.log(userName.length);
                            return "Hello " + userName;               return "Hello " + userName;
                        }                                           }

                        f1("Vamsy");                                f1("Vamsy");
                        f1(new Date());
                        f1(1234);
                        f1(null);
                                                                    string
                                                                    number
                                                                    boolean
                                                                    function
                                                                    string[]
                                                                    number[] ...etc
                                                                    undefined
                                                                    null
                                                                    any
                                                                    unknown

                      classes, constructor , objects                classes, constructor , objects
                                                                    enums and interfaces

        Lab Setup
        -------------------------------------------------------

            Visual Studio Code          IDE                               https://code.visualstudio.com/download
            NodeJS                      Development Platform             node --version  https://nodejs.org/en/
                npm                     Build and Dependency  Tool       npm --version
            Angular CLI                 Project Management Tool          ng --version    
                                                                            npm install -g @angular/cli@11      
            Typescript                  Scripting Language
            Chrome                      Browser
