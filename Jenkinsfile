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
        sh 'suid jenkins'
        su 'whoami'
        sh '/usr/src/app/internals/shell/test.sh'
      }
    }
  }
}
