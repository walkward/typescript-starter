// Jenkinsfile (Declarative Pipeline)
pipeline {
  agent { dockerfile true }
  environment {
    CI = 'true'
    PWD = "${env.PWD}"
  }
  stages {
    // stage('Build') {
    //   steps {
    //     sh 'npm install'
    //   }
    // }
    stage('Test') {
      steps {
        sh 'cd /usr/src/app'
        sh 'ls'
        // sh './internals/shell/test.sh'
      }
    }
  }
}
