
<!-- ABOUT THE PROJECT -->
## About The Project

This is template wedding invation card  using nodeJs and mongodb. You can create a card and send this link for recevier.
The recevier using link invite for view infomation of marriage ceremony.

Flow:
* Go to admin manager page and create a card with receiver's information.
* Get link from system.
* Send to the recipient :smile:

You can easily edit the information and deploy it simply. All information and installation instructions will be detailed.

Thank you for your visit and we look forward to hearing from you!

### Built With

**Server**
* [NodeJS](https://nodejs.org)
* [Express](https://expressjs.com)
* [MongoDB](https://www.mongodb.com)

**Client**
* [EJS](https://ejs.co)
* [Bootstrap](https://getbootstrap.com)
* [JQuery](https://jquery.com)



<!-- GETTING STARTED -->
## Getting Started

I have apply EJS to an Express application, include repeatable parts of your site, and pass data to the views.

### Prerequisites

You need setup prerequisites: 
*   [NodeJS - v14.17](https://nodejs.org/dist/v14.17.0/node-v14.17.0-x64.msi)
*   [Visual studio code](https://code.visualstudio.com/)

* npm
  ```sh
  npm install npm@latest -g
  ```
* nodemon
  ```sh
  npm i nodemon -g
  ```
  
### Installation

1. Get connection of MongoDB at [https://www.mongodb.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/sauanla/wedding-invitation.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Rename and edit file in `Exemple.env` to `.env`

   ```env
   PORT = 3001
   URI_MONGO = 'URI'
   DOMAIN = 'http://localhost:3001'
   SITE_KEY = 'SITE_KEY'
   SECRET_KEY = 'SECRET_KEY'
   ```
5. Start server
    for dev using nodemon
   ```sh
   npm run dev
   ```


<!-- USAGE EXAMPLES -->
## Usage
Run Seed Database: [http://localhost:3001/setup](http://localhost:3001/setup)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.