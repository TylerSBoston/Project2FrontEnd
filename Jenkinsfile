def buildNumber = env.BUILD_NUMBER as int
if (buildNumber > 1) milestone(buildNumber - 1)
milestone(buildNumber)
// stops previous instance if its built but forever looping - code above

pipeline {
    agent any
    	
        stages {

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
               	

               	sh "docker-compose up"
            }
        }
    }
}