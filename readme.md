## API Contact List Manager

The project was created to simplify the management of your contact list.

### Project launch commands:

- `npm start` &mdash; start server in mode production
- `npm run start:dev` &mdash; start server in mode development
- `npm run lint` &mdash; run a code check execution with eslint
- `npm run lint:fix` &mdash; the same eslint check, but with automatic fixes for
  simple errors

Branch name and query command:

- "/" : Get all contacts(GET)
- "/id" : Get contact by id (GET)
- "/" : Add contact with body params (POST)
- "/id" : Delete contact by id (DELETE)
- "/id" : Update contact by id with body params: {name, email, phone} (PUT)
- "/id/favorite" : Update contact favorite status by id with body param:
  {favorite} (PATCH)

Contact object example:

```javascript
{
    "_id": "63fa4f0b201959e1b4c15e6a",
    "name": "Alec Howard",
    "email": "Donec.elementum@scelerisquescelerisquedui.net",
    "phone": "(748) 206-2688",
    "favorite": false
}
```

| Field    | Description                            |
| -------- | -------------------------------------- |
| **id**   | The item's unique id (auto-generated). |
| name     | Type: String, contact name.            |
| email    | Type: String, contact email.           |
| phone    | Type: String, contact phone.           |
| favorite | Type: Boolean, default value: `false`. |
