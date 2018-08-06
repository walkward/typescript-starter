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
    stage('Lint') {
      steps {
        sh 'npm run lint --prefix ${DIR}'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test --prefix ${DIR}' // Running tests
        sh 'cp ${DIR}/reports/*-junit.xml ${WORKSPACE}' // Copying to workspace for discoverability
      }
    }
    stage('Deploy') {
      steps {
        sh "echo 'shell scripts to deploy to server...'"
      }
    }
  }
  post {
    always {
      junit '**/*-junit.xml' // Use tap reporter results
      cleanWs() // Remove all files from workspace
    }
  }
}
