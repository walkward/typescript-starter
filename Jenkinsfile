// Jenkinsfile (Declarative Pipeline)
pipeline {
  agent {
    dockerfile {
      args '--user jenkins'
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
        sh 'cp ${DIR}/reports/junit.xml ${WORKSPACE}' // Copying to workspace for discoverability
      }
    }
  }
  post {
    always {
      sh 'ls ${WORKSPACE}'
      junit '**/junit.xml' // Use tap reporter results
      cleanWs() // Remove all files from workspace
    }
  }
}
