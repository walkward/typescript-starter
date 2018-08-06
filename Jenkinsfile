// Jenkinsfile (Declarative Pipeline)
pipeline {
  agent {
    dockerfile {
      args  '--user jenkins'
    }
  }
  environment {
    CI = 'true'
  }
  stages {
    stage('Test') {
      steps {
        sh '/usr/src/app/internals/shell/test.sh'
        sh 'cat /usr/src/app/junit.xml'
      }
    }
  }
  post {
    always {
      sh 'ls /usr/src/app'
      junit '/usr/src/app/*.xml'
    }
  }
}
