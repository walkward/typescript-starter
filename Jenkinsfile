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
        sh 'ls /usr/src/app'
      }
    }
  }
  post {
    always {
      junit '/usr/src/app/junit.xml'
    }
  }
}
