pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                echo 'Building Node.js application...'
                bat 'npm install'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                bat 'npm test'
            }
        }

        stage('Docker Build') {
            steps {
                echo 'Building Docker image...'
                bat 'docker build -t nodejs-demo-app .'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying Docker container...'
                bat 'docker rm -f nodejs-demo-app || echo No existing container'
                bat 'docker run -d --name nodejs-demo-app -p 3000:3000 nodejs-demo-app'
            }
        }
    }
}
