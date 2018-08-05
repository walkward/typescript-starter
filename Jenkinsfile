Jenkinsfile (Declarative Pipeline)
pipeline {
  agent {
    docker {
      image 'walkward/typescript-starter:latest'
      args '-p 3000:3000 --restart always -d'
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
        sh './internals/shell/test.sh'
      }
    }
  }
}
