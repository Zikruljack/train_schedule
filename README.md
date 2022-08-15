# Train Schedule Docs

berikut ini merupakan dokumentasi tentang aplikasi ini

---

## Task List

Here is the list of tasks :

- [x] Create Controller for Train, schedule, stations and route
- [x] Create model for Train, schedule, stations and route
- [x] Create View using Bootstrap and Ejs
- [x] edit View

## Run App

    npm install

    npm run dev

## app model schemas

Before you using app, you must configure the database model schemes like this below:

    npx sequelize-cli model:generate --name train --attributes name:string,class:string,stationId:integer &&
    npx sequelize-cli model:generate --name schedule --attributes timeArrive:date,timeDeparture:date &&
    npx sequelize-cli model:generate --name stations --attributes name:string,location:string &&
    npx sequelize-cli model:generate --name route --attributes trainId:integer,scheduleId:integer &&
    npm run db-install

## app URL routing

| Method | Route                | Description                                              |
| ------ | -------------------- | -------------------------------------------------------- |
| GET    | /                    | Menampilkan Home                                         |
| GET    | /trains              | Menampilkan semua kereta yang ada didalam database       |
| GET    | /schedule            | Menampilkan semua schedule yang ada didalam database     |
| GET    | /stations            | Menampilkan semua stations yang ada didalam database     |
| POST   | /trains/create       | Menambahkan data train kedalam database                  |
| POST   | /stations/create     | Menambahkan data station kedalam database                |
| POST   | /trains/create       | Menambahkan data schedule kedalam database               |
| GET    | /trains/create       | Menampilkan data kereta yang baru ditambahkan database   |
| GET    | /schedule/create     | Menampilkan data schedule yang baru ditambahkan database |
| GET    | /stations/create     | Menampilkan data station yang baru ditambahkan database  |
| GET    | /trains/delete/:id   | Delete data trains sesuai dengan ID yang ditentukan      |
| GET    | /schedule/delete/:id | Delete data schedule sesuai dengan ID yang ditentukan    |
| GET    | /stations/delete/:id | Delete data station sesuai dengan ID yang ditentukan     |
| POST   | /trains/update/:id   | Update data trains sesuai dengan ID yang ditentukan      |
| POST   | /schedule/update/:id | Update data schedules sesuai dengan ID yang ditentukan   |
| POST   | /stations/update/:id | Update data schedules sesuai dengan ID yang ditentukan   |
| GET    | /trains/update/:id   | Menampilkan data kereta yang baru di Update              |
| GET    | /schedule/update/:id | Menampilkan data schedule yang baru di Update            |
| GET    | /stations/update/:id | Menampilkan data station yang baru di Update             |
