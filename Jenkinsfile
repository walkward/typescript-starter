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
        sh 'chown -R $(npm root -g) $(npm root) ~/.npm'
        sh '/usr/src/app/internals/shell/test.sh'
      }
    }
  }
}
