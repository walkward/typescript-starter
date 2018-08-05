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
        sh 'sudo chmod -R +x /usr/src/app/node_modules'
        sh '/usr/src/app/internals/shell/test.sh'
      }
    }
  }
}
