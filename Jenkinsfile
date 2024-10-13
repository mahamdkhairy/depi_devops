pipeline {
   // agent {label 'ec2'}
        agent any
        stages {
            stage("SCM checkout") {
                steps {
                    git 'https://github.com/mahamdkhairy/depi_devops.git'
                }
            }
            // stage("Execute Ansible") {
            //     steps {
            //         ansiblePlaybook credentialsId: 'private-key',
            //                          disableHostKeyChecking: true,
            //                          installation: 'Ansible',
            //                          inventory: 'dev.inv',
            //                          playbook: 'apache.yml'
            //     }
            
            stage('build') {
                steps {
                    withCredentials([usernamePassword(credentialsId:"docker",usernameVariable:"USER",passwordVariable:"PASS")]){
                    sh 'docker build . -f dockerfile -t ${USER}/nodejs-iamge:v1.${BUILD_NUMBER}'
                    sh 'docker login -u ${USER} -p ${PASS}'
                    sh 'docker push ${USER}/nodejs-iamge:v1.${BUILD_NUMBER}' 
                    sh 'docker run -d -p 3000:3000 ${USER}/nodejs-iamge:v1.${BUILD_NUMBER}'    
                    }
                }
            }
        }
    // post {
    //     success {
    //         slackSend(
    //             channel: "devops",
    //             color: "good",
    //             message: "${env.JOB_NAME} succeeded. Build no. ${env.BUILD_NUMBER} (<https://hub.docker.com/repository/docker/${USER}/nodejs-iamge/general|Open the image link>)"
    //         )
    //       
    //     }
    //     failure {
    //         slackSend(
    //             channel: "devops",
    //             color: "danger",
    //             message: "${env.JOB_NAME} is failed. Build no. ${env.BUILD_NUMBER} URL: ${env.BUILD_URL} (<${env.BUILD_URL}|Open the pipeline>)"
    //         )
    //     }
    // }
 }
