#  Auto Deployment of Dockerized Node.js App using CI/CD

This project demonstrates a complete DevOps pipeline that automates the deployment of a simple Node.js application using Docker, GitHub, Jenkins (or GitHub Actions), and AWS EC2.

---

##  Tech Stack

- **Node.js & Express** - Application framework
- **Docker** - Containerization
- **Git & GitHub** - Version control & source code management
- **Jenkins / GitHub Actions** - CI/CD automation
- **AWS EC2 (Ubuntu)** - Cloud server hosting


---

##  Project Workflow

1. Clone a Node.js app from GitHub
2. Create a Dockerfile to build an image
3. Push code to GitHub to trigger CI/CD pipeline
4. Jenkins (or GitHub Actions) builds Docker image & deploys it to EC2


---

##  Dockerfile Sample

```dockerfile
FROM node:18
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["node", "index.js"]


## pipeline shell script
@Library("shared") _ 

pipeline {
    agent any

    stages {
        stage('Print') {
            steps {
                script {
                    jenkin() 
                }
            }
        }

        stage('Code Clone') {
            steps {
                script {
                    gitclone("https://github.com/DeveloperMokchhedul/auto_deployment_with_aws.git", "main") 
                }
            }
        }

        stage('build') {
            steps {
                script {
                    build("node-app", "latest")
                }
            }
        }
        
        stage('deploy') {
            steps {
                script {
                    deploy("nodeapp","node-app", "latest")
                }
            }
        }
        
        
    }
}
