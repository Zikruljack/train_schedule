# Train Schedule Docs

    berikut ini merupakan dokumentasi tentang aplikasi ini

---

## Task List

Here is the list of tasks :

- [x] Create Controller for Train, schedule, stations and route
- [ ] Create model for Train, schedule, stations and route
- [ ] Create View using Bootstrap and Ejs

## app URL routing

| Method | Route     | Description                                          |
| ------ | --------- | ---------------------------------------------------- |
| get    | /         | Menampilkan Home                                     |
| get    | /trains   | menampilkan semua kereta yang ada didalam database   |
| get    | /schedule | Menampilkan semua schedule yang ada didalam database |
| get    | /stations | Menampilkan semua stations yang ada didalam database |

## app model schemas

Before you using app, you must configure the database model schemes like this below:

`npx sequelize-cli db:create --name train --attributes `

`npx sequelize-cli db:create --name schedule --attributes `

`npx sequelize-cli db:create --name stations --attributes`

`npx sequelize-cli db:create --name route --attributes `
