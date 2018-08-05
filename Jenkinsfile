// Jenkinsfile (Declarative Pipeline)
pipeline {
  agent { dockerfile true }
  environment {
    CI = 'true'
  }
  stages {
    // stage('Build') {
    //   steps {
    //     sh 'npm install'
    //   }
    // }
    stage('Test') {
      steps {
        dir ('/usr/src/app') {
          sh 'npm test'
        }
        // sh './internals/shell/test.sh'
      }
    }
  }
}
