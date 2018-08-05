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
        sh 'echo $PATH'
        // sh './internals/shell/test.sh'
      }
    }
  }
}
