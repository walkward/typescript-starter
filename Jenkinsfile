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
        sh 'cp ${DIR}/reports/junit.xml ${WORKSPACE}/reports' // Copying to workspace for discoverability
      }
    }
  }
  post {
    always {
      sh 'ls $DIR'
      junit '**/reports/junit.xml'
      cleanWs()
    }
  }
}
