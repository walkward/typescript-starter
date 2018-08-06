// Jenkinsfile (Declarative Pipeline)
pipeline {
  agent {
    dockerfile {
      args  '--user jenkins'
    }
  }
  // agent { any true }
  environment {
    CI = 'true'
    DIR = '/usr/src/app'
  }
  stages {
    stage('Test') {
      steps {
        sh 'npm test --prefix ${DIR}'
        sh 'cp ${DIR}/reports/junit.xml ${WORKSPACE}'
        sh 'touch ${WORKSPACE}/*.xml' // Update timestamps to prevent error
      }
    }
  }
  post {
    always {
      junit '**/reports/junit.xml'
    }
  }
}
