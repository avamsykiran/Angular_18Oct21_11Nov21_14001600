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

    Angular CLI 
    ---------------------------------------------------------------------------------------------------
        is a Project Mangement Tool.

        ng new proj-name

        cd proj-name

        ng g component componentName
        ng g service serviceName
        ng g module moduleName
        ng g guard guardName
        ng g pipe pipeName
        ng g class className
        ng g interface interfaceName

            --skipTests flag can be used to avoid creating unit test files.

        ng build                    transpell all .ts into .js and then 
                                    will provide the compiled app files in a 'dist' folder.

        ng serve                    transpell all .ts into .js and then 
        ng serve --port 5656 -o     will host them in a temparary devlopement server. default port 4200.

        ng test                     transpell all .ts into .js and then 
                                    will launch the unit test cases on karma platform


    Angular Archetecture
    ---------------------------------------------------------------------------------------------------

    an angular application composes of various Typescript classes each identified by
    a decorator. Every decorator takes some config properties called META_DATA

        Module              @NgModule
        Componenet          @Component
        Directive           @Directive
        Pipe                @Pipe
        Service             @Injectable
        Guard               @Injectable
        Interceptor         @Injectable


        Module
        -----------------------
                    Angular Modules are different from ES-Modules

                    An angular module is a logical collection of Components,Directives....etc.,
                    and other modules as well.

                    Each angular app must be within a module called the root module 'app.module'

                    @NgModule({
                        declarations:[
                            list of components,directives and pipes
                        ],
                        imports:[
                            list of sub-modules
                        ],
                        exports:[
                            list of components,directives and pipes that are to be used by 
                            other modules
                        ],
                        providers:[
                           list of services that belong to the current module 
                        ],
                        bootstrap:[
                            one or more components whose DOM must be inserted into the index.htm while
                            launching the app.
                        ]
                    })
                    class AppModule{}

                    a sub-module is called a Feature module.

        Component
        ---------------------------------
                        a component is smart segment of a page that encapsualtes 
                        a specific feature. a component is used as a user-defiend
                        html element (tag)

                        Component = Controller              +   Template
                                    (state and behaviour)       (html dom)


                        header.component.ts
                        --------------------------------
                        @Component({
                            selector:'my-header',
                            templateUrl:'header.component.html',
                            providers:[]
                        })
                        class HeaderComponent{
                            
                            title:string;

                            constructor(){
                                this.title="This is my first angular component";
                            }
                        }

                        header.component.html
                        --------------------------
                            <h3>{{title}}</h3>
                        
                        <my-header></my-header>

                        Components and Styke sheets
                        ----------------------------------
                            src/styles.css          Global Style Sheet

                            component.css           Component specific style sheet.
        
        Directive
        --------------------------------------------------------------------------------

            is a customized attribute.

            in-built
                ngModel
                ngClass
                eventDirecitves
                    click
                    dblclick
                    blur
                    focus
                    mouseover
                    mouseenter ...etc

                Structural Directives
                    *ngIf
                    *ngFor
                    ngSwitch
                        *ngSwitchCase
                        *ngDefault

            custom
                        @Directive({
                            selector:'my-attrib'
                            providers:[]
                        })
                        class MyAttrib{
                            .......
                        }

        Data Binding
        ----------------------------------

            associating the fields and methods in the controller
            with the tag content/attributes and events in the template.

            Interpolation

                {{angular-expression}}

            Event Binding

                (eventDirective)="eventHandler()"

            One-Way Data Binding 
                Attribute Binding

                    [attribute]="angular-expression"

                Style Binding

                    [style.cssProperty]="angular-expression"    

                Class Binding

                    [class]="{'class-name1':booleanFlag,'class-name2':booleanFlag,'class-name3':booleanFlag}"

                    [class.class-name]="booleanFlag"

                    [ngClass]="angular-expression"
                            this angular-expression must return 
                                a string of classes like 'class1 class2 classe'
                                an array of classes like ['class1','class2','class3']
                                a json object of classes like {'class-name1':booleanFlag,'class-name2':booleanFlag,'class-name3':booleanFlag}

            Two-Way Data Binding

                is used only with 'input' elements.

                ngModel     FormsModule     @angular/forms

                [(ngModel)]="fieldFromController"

    Pipe
    -----------------------

        is used to transform data just before it is rendered.

        in-built
            lowercase
            uppercase
            titlecase
            number
            currency
            date
            async
            json

        custom
            @Pipe({
                name:''
            })
            class MyPipe implements PipeTransform {
                transform(value:any):any {
                    .........
                }
            }         