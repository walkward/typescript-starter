// Jenkinsfile (Declarative Pipeline)
pipeline {
  agent {
    dockerfile {
      args  '--user jenkins'
    }
  }
  environment {
    CI = 'true'
    DIR = '/usr/src/app'
  }
  stages {
    stage('Test') {
      steps {
        sh 'npm test --prefix ${DIR}'
      }
    }
  }
  post {
    always {
      junit '${DIR}/reports/*.xml'
    }
  }
}
