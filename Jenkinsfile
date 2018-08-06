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
        echo "${env.PWD}"
        sh '${DIR}/internals/shell/test.sh'
      }
    }
  }
  post {
    always {
      junit '**/reports/*.xml'
    }
  }
}
