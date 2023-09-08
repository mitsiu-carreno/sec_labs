# Moodle 3.10.4 XSS vuln

## Overview
This project set's up a containerized moodle + mariadb in which we can create and exploit an XSS in the WYSWYG utility.

## Usage
### Container setup
```sh
$ docker-compose build
```
```sh
$ docker-compose up
```

### Moodle (3.10.4) Setup
1. Login (<host>:8080)   
u: user    
p: bitnami  
2. Create course

### XSS setup
1. Create a resource that uses WYSGYG
2. Select "insert or edit an audio/video file"
3. Select "video"
4. Set any yt in the "Video source URL"
5. Select "Subtitles and captions"
6. Set the same yt in "Subtitle track URL"
6. Field "Label" has the vuln


## References & credits:

[Docker image ](https://hub.docker.com/r/bitnami/moodle)     
[Docker image v3.10.4](https://hub.docker.com/layers/bitnami/moodle/3.10.4-debian-10-r6/images/sha256-c06bd0aced11704edb861e629c7c60f84af1881e0a5301e6c2a31831206cf247?context=explore)   
[Payload](https://learn-cyber.net/article/Self-XSS-Attacks)   
[Vuln](https://www.exploit-db.com/exploits/49714)

