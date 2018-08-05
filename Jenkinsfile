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
        sh 'cut -d: -f1 /etc/passwd'
        sh '/usr/src/app/internals/shell/test.sh'
      }
    }
  }
}
