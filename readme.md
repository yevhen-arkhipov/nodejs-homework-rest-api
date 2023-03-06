## API Contact List Manager

The project was created to simplify the management of your contact list.

### Project launch commands:

- `npm start` &mdash; start server in mode production
- `npm run start:dev` &mdash; start server in mode development
- `npm run lint` &mdash; run a code check execution with eslint
- `npm run lint:fix` &mdash; the same eslint check, but with automatic fixes for
  simple errors

Branch name and query command:

- "/api/users/signup" : Registration (POST)
- "/api/users/login" : Log in (POST)
- "/api/users/logout" : Log out (POST)
- "/api/users/current" : Get information about current user (GET)
- "/api/users/" : Update user's subscription status with body param:
  {subscription} (PATCH)

- "/api/contacts/" : Get all contacts(GET)
- "/api/contacts/id" : Get contact by id (GET)
- "/api/contacts/" : Add contact with body params (POST)
- "/api/contacts/id" : Delete contact by id (DELETE)
- "/api/contacts/id" : Update contact by id with body params: {name, email,
  phone} (PUT)
- "/api/contacts/id/favorite" : Update contact favorite status by id with body
  param: {favorite} (PATCH)

User object example:

```javascript
{
    "_id": "63fa4f0b201959e1b4c15e6a",
    "email": "Donec.elementum@scelerisquescelerisquedui.net",
    "password": "54526kj62n36n6435",
    "subscription": "starter",
    "token": null
}
```

| Field        | Description                                         |
| ------------ | --------------------------------------------------- |
| **id**       | The user's unique id (auto-generated).              |
| email        | Type: String, contact email.                        |
| password     | Type: String, contact password.                     |
| subscription | Type: String, values: 'starter', 'pro', 'business'. |
| token        | The user's unique jwt (auto-generated).             |

Contact object example:

```javascript
{
    "_id": "63fa4f0b201959e1b4c15e6a",
    "name": "Alec Howard",
    "email": "Donec.elementum@scelerisquescelerisquedui.net",
    "phone": "(748) 206-2688",
    "favorite": false,
    "owner": "63fa4f0b201959e1b4c15e6a"
}
```

| Field    | Description                            |
| -------- | -------------------------------------- |
| **id**   | The item's unique id (auto-generated). |
| name     | Type: String, contact name.            |
| email    | Type: String, contact email.           |
| phone    | Type: String, contact phone.           |
| favorite | Type: Boolean, default value: `false`. |
| owner    | Type: ObjectId, unique owner's id      |
