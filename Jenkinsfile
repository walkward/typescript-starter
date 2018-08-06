// Jenkinsfile (Declarative Pipeline)
pipeline {
  agent {
    dockerfile {
      args '--user jenkins'
    }
  }
  environment {
    CI = 'true'
    DIR = '/usr/src/app'
  }
  stages {
    stage('Test') {
      steps {
        sh 'npm test --prefix ${DIR}' // Running tests
        sh 'cp ${DIR}/reports/junit.xml ${WORKSPACE}' // Copying to workspace for discoverability
      }
    }
  }
  post {
    always {
      junit '${WORKSPACE}/junit.xml' // Use tap reporter results
      cleanWs() // Remove all files from workspace
    }
  }
}
