def buildNumber = env.BUILD_NUMBER as int
if (buildNumber > 1) milestone(buildNumber - 1)
milestone(buildNumber)
// stops previous instance if its built but forever looping - code above

pipeline {
    agent any

      //  tools {nodejs "815Node"}
    	
        stages {
        stage ('clear'){
            steps{
                // clears extra containers generated for angular
                sh 'docker system prune -y'

                sh "npm install"
                echo 'clear stage'
            }
        
        }
        stage('Clone') {
            steps {
                // Get some code from a GitHub repository
                git 'https://github.com/TylerSBoston/Project2FrontEnd'

                echo 'clone step'
            }
        }
        stage('Build') {
            steps {

                sh "node_modules/.bin/ng build --prod"
                echo 'build step'
            }
        }
        stage('Stage') {
            steps {
               	echo 'deploy step'
               	
               	
               	sh "docker-compose down"
               	
             //   sh "sh docker image rm --force nginx"
               	sh "docker-compose up"
            }
        }
    }
}