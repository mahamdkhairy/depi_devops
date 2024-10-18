# depi_devops
Final DEPI DevOps Project Steps:

1-Prepare Machines:
  Ensure you have both master and slave machines ready, either locally or on EC2.

2-Install Jenkins:
  On the master machine, install Jenkins as a container.
  Set Up Slave Node:
  Log into Jenkins and add the slave node. Retrieve the SSH key from the slave machine.

3-Clone Repository:
  Log into the slave machine and clone the repository from GitHub.
    
4-Run Ansible Playbook:
  Navigate to the Ansible folder and run the playbook to manage configurations.

5-Configure Jenkins:
  Add Docker Hub credentials to Jenkins and connect Jenkins to Slack.

6-Set Up Pipeline:
  Create a pipeline in Jenkins, and use SCM to pull the repository from GitHub.

7-Verify Pipeline Output:
  Check the output in the console to ensure the pipeline runs successfully.
