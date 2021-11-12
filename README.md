
#### Docker example api

Simple api with docker, mysql, express

`docker-compose up --build` (or add `-d` option for detach mode)
  
open new terminal and run to access the **`api`** container
 
`docker exec -it api bash`

Run migrations

`yarn last-migrate`
  
Run seeds

`yarn seeds`


Then access
`http://localhost:4000`