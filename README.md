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

pipeline {
    agent any

    stages {
        stage('code') {
            steps {
                echo "git cloning"
                git url: 'https://github.com/DeveloperMokchhedul/auto_deployment_with_aws.git', branch: 'main'
                echo "git cloning complete"
            }
        }

        stage('build') {
            steps {
                echo "docker build"
                sh "docker build -t node-app:latest ."
                echo "docker build complete"
            }
        }

        stage('deploy') {
            steps {
               echo "deploy start"
                sh '''
                docker rm -f node-app || true
                docker run -d --name node-app -p 3000:3000 node-app:latest
                '''
                echo "deploy complete"
            }
        }
    }
}

