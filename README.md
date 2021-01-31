# App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Steps to run the project:

1. clone project.
2. Run `yarn install`.
3. Run `yarn serve`.
4. Navigate to `http://localhost:4200/`.



## Things that should be done:

front:
1. implement local data streaming
2. implement caching
3. implement deeply regex for forms
4. had errors handler mechanism.
5. mapping all data by customers, and uniqe by transactions by it's customer.
   In this way for every customer we hold array of it transactions, and then we can do niced ui dashboard.
   
server:
adding routes

db:
Separate scheme for 2 separated schemes: 1. customers // 2. transactions.
we will connect them by id property and we will manage them separately.

