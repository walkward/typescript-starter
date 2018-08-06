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
      }
    }
  }
}
