# ecommerce-masksrus-m3p-ih

# Project URL:

https://masks-r-us.firebaseapp.com/

## Description

eCommerce shop for any kind of mask.

## Pages


- **homepage** - I want to be able to access the homepage and filter by type of mask, search, log in and sign up. 
- **sign up** - As a user I want to sign up on the webpage so that I can make purchases and add items to my wishlist.
- **login** - As a user I want to be able to log in on the webpage so that I can get back to my account.
- **logout** - As a user I want to be able to log out from the webpage so that I can make sure no one will access my account.
- **wishlist** - As a user I want to see the list of my favorite and delete them.
- **edit user** - As a user I want to be able to edit my profile.
- **search result/categories** - I want to see the list of masks filter by my search, and browse by categories.
- **mask listing** - I want to see more details of the mask, be able to call them and visit their website and save it as favorites.


## Routes:


| Method | Route Front | Route Back | Description| Completed routes 
|--------|-------|-------|------------|--------|
| GET  | / | /products | Main page route. Render home view.|yes|
| POST | auth/login | /auth/login | Login route. Sends login form info to the server.|yes|
| POST | auth/signup | /auth/signup | Signup route. Sends signup info to server and creates user in DB.|yes|
| POST | auth/logout | /auth/logout | logout route.logs out user in db.|yes|
| GET | /user | /user | Private route. Renders profile view.|yes|
| POST | auth/user/:id/edit-profile | /user/:id/edit-profile | Private route. Sends edit-profile info to server and updates user in DB.|yes|
| GET | /user/:id/wishlist | /user/:id/wishlist | Private route. Render the wishlist view.|yes|
|DELETE| /user/wishlist | /user/wishlist| Removes products from wishlist.|yes|
| GET | /products | /products | Renders products-list view.|yes|
| GET | /products/:id | /products/:id | Render mask-details view.|yes|
| POST | /products/:id | /products/:id | Post the user's product to DB.|yes|
| POST |               | /user/:id/cart|Post the products into User's product list array|yes|
| GET |                 |/user/:id/cart| Brings the cart's products from db|yes|




## Models

User model

```javascript
{
  name: String,
  email: String,
  password: String,
  shippingAddress: String,
  cartList: [Object.type. ref'product']
  wishlist: [{Object.type ref'product', quantity}]
}

```
Product model

```javascript
{
  brand: String,
  name: String,
  description: String,
  originalPrice: String,
  actualPrice: String,
  feedback: [{ }],// backlog
  Rating: [ ], 
  photo: String,
  shippingTime: String,
  material: String,
  color: String,
  size: String,
  stock: Number
}

```


## Backlog

### Passport

Social login through Passport.

### Payments

Accept payments through Stripe or similar platform.

### Scrapping

Web Scrapping on Amazon and/or Aliexpress for dropshipping.



## Links

### Trello 

https://trello.com/b/V8Oadhfw/proyecto3-adrian-unai

### Figma

https://www.figma.com/file/xjrZvqTT3ucQcdQwzsUhas/proyecto3-adrian-unai?node-id=0%3A1

### Git

https://github.com/adrianVide/ecommerce-masksrus-m3p-ih

### Slides

To be added.
