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
        echo "${WORKSPACE}"
        sh 'npm test --prefix ${DIR}'
        sh 'cp ${DIR}/reports/*.xml $WORKSPACE'
      }
    }
  }
  post {
    always {
      junit '**/reports/junit.xml'
    }
  }
}
