pipeline {
    agent any

    stages {
        stage('Install dependence') {
            steps {
                sh 'cd /backend'
                sh 'npm install'
                sh 'cd /frontend'
                sh 'npm install'
            }
        }
        stage('Build Frontend') {
            steps {
                echo 'Building...'
                sh 'cd /frontend'
                sh 'npm run build'
            }
        }
        
        stage('Build Backend') {
            steps {
                echo 'Building...'
                sh 'cd /backend'
                sh 'npm run build'
            }
        }
    }
}