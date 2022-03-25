def buildNumber = env.BUILD_NUMBER as int
if (buildNumber > 1) milestone(buildNumber - 1)
milestone(buildNumber)
// stops previous instance if its built but forever looping - code above

pipeline {
    agent any

        tools {nodejs "node"}
    	
        stages {
        stage ('clear'){
            steps{
                // clears extra containers generated for angular
                sh 'docker system prune -f'
                sh 'docker image prune -f'

                // not sure if i need to keep replacing the nginx server or not
            //    sh 'docker image rm -f nginx'
                sh 'docker image rm -f project2-frontend'
                sh 'docker image rm -f nginx'
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