# docker

<h2>Version 1.0</h2>

<h2>What is it?</h2>

this application consist of docker file, that include healthcheck's application. This application consist of 3 endpoints: </br>
First is it /. This page is the main page and needed for choose other endpoints. </br>
Second is it /random. This page is the page, that will connect with yesno.wtf and will show to you the result of it.</br>
Last is it /healthcheck. This page is the page, that will check for you opportunity to connect yesno.wtf api's.

<h2>How to run the program?</h2>

You need docker engine and docker compose and node.js. Then you have to use "cd path" in terminal, it is path to repository.

```
cp .env.example .env
sudo docker compose up -d 
```