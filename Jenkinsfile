// Jenkinsfile (Declarative Pipeline)
pipeline {
  agent {
    dockerfile {
      customWorkspace '/usr/src/app'
    }
  }
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
        sh 'pwd'
        // sh './internals/shell/test.sh'
      }
    }
  }
}
