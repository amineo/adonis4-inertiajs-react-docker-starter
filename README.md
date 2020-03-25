# Inertia + Adonis 4 + React + Emotion + Tailwind + Docker + PM2

## (WIP) Docs coming soon


## About
Containerized AdonisJS + PM2 for portability and development flexibility.
This project aims to keep an organized and reusable file structure. 

---

## Getting Started / Running
The first thing you need to do is generate an `APP_KEY` by simply  running `./generate-adonis-app-key.sh`
This will create a file containing the key that Adonis uses for encryption.

### Local Dev
After you have the `adonis.appkey.v1` file created, you can then run `docker-compose up`   
The `docker-compose.override.yml` is automatically picked up and is used or local dev.

**In local development, the Adonis app will automatically reload.**


### Example Deployment
Deploying this example into Docker Swarm, you would use something like:   
```docker stack deploy -c docker-compose.yml adonis```   

Where `docker-compose.override.yml` would **not** get picked up.

---

## Some Opinions 
- Dockerfiles and related container artifacts don't belong in your app's root folder.
- Use docker-compose.override.yml for local development

---

## Structure

```
|-[app]
|---[myapp]
|-----...the-adonis-app-files

|-[build]
|---[myapp]
|-----...Dockerfile

|-docker-secrets
|---adonis.appkey.v1
```

