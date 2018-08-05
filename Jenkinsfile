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
        sh 'echo $PWD'
        sh 'ls /usr/src/app'
        sh 'ls ~/'
        sh 'ls'
        // sh './internals/shell/test.sh'
      }
    }
  }
}
