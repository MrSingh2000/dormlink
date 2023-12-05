## User Registeration Endpoints

- Login -
    - (POST) Endpoint - /api/auth/login
    - Data - {roll, password }
    - response -
        - success - { authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6" }
        - error - { error: "error_message" }
- Register -
    - (POST) Endpoint - /api/auth/register
    - Data - {fullName, rollNum, password, email, phoneNum}
    - response -
        - success - { authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6" }
        - error - { error: "error_message" }

## Admin Registeration Enpoints

- Login -
    - (POST) Endpoint - /api/auth/admin/login
    - Data - { email, password }
    - response -
        - success - { authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6" }
        - error - { error: "error_message" }
- Register -
    - (POST) Endpoint - /api/auth/admin/register
    - Data - { email, password }
    - response -
        - success - { authToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6" }
        - error - { error: "error_message" }

### Send 'authToken' in headers for these routes

## Documents Routes for users

- save documents
    - (POST) Endpoint - /api/docs/save
    - Data - { files: \[\] }
    - response -
        - success - { message: "Upload successful!" }
        - error - { error: "error_message" }
- fetch documents
    - (GET) Endpoint - /api/docs/fetch
    - response -
        - success - { data: { userId: 123, rollNum: 123, docs: \[\], verified: true } }
        - error - { error: "error_message" }

## Routes availabe for admin

- fetch all documents on db
    - (GET) Endpoint - /api/admin/fetch
    - response -
        - success - { data: \[ { userId: 123, rollNum: 123, docs: \[\], verified: true } \] }
        - error - { error: "error_message" }
- update user documents verification status
    - (PUT) Endpoint - /api/admin/update?updateId="1111'
    - response -
        - success - { message: "Updated successfully" };
        - error - { error: "error_message" }
- get specific user's documents
    - (GET) Endpoint - /api/admin/update?updateId="1111"
    - response -
        - success - { data: { userId: 123, rollNum: 123, docs: \[\], verified: true } }
        - error - { error: "error_message" }

## Routes for room status and info.

- update a room information
    - (POST) Endpoint - /api/room/update
    - data - { roomNum: 121, hostel: "bh-1" }
    - response -
        - success - { message: "Success" }
        - error - { error: "Error_message" }
- fetch the details of a room for the user
    - (GET) endpoint - /api/room/fetch
    - response -
        - success - { data: { userId: 12, rollNum: 121, roomNum: 21, hostel: 'bh-1' } }
        - error - { error: "error_message" }
- fetch all filled rooms in all hostels
    - (GET) endpoint - /api/room/all
    - response -
        - success - { data: \[ {userId, rollNum, roomNum, hostel} \] }
        - error - { error: "error_message" }
- fetch all filled rooms in a particular hostel
    - (GET) endpoint - /api/room/all?hostel=bh1
    - response -
        - success - { data: \[ {userId, rollNum, roomNum, hostel} \] }
        - error - { error: "error_message" }