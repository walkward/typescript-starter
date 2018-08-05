// Jenkinsfile (Declarative Pipeline)
pipeline {
  agent { dockerfile true }
  environment {
    CI = 'true'
    PATH = "${env.PATH}"
  }
  stages {
    // stage('Build') {
    //   steps {
    //     sh 'npm install'
    //   }
    // }
    stage('Test') {
      steps {
        sh 'ls /usr/local/bin'
        // sh './internals/shell/test.sh'
      }
    }
  }
}
