// Jenkinsfile (Declarative Pipeline)
pipeline {
  agent {
    dockerfile {
      args '--user jenkins'
      additionalBuildArgs '--no-cache'
    }
  }
  // agent { any true }
  environment {
    CI = 'true'
    DIR = '/usr/src/app'
  }
  stages {
    stage('Test') {
      steps {
        sh 'npm test --prefix ${DIR}'
      }
    }
  }
  post {
    always {
      sh 'ls $DIR'
      junit '**/reports/junit.xml'
    }
  }
}
