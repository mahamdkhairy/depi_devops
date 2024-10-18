# depi_devops
Final DEPI DevOps Project Steps:

1-Prepare Machines:

Ensure you have both master and slave machines ready, either locally or on EC2.

run the following code when on the master machine:

 sudo apt update &&
 sudo apt install -y software-properties-common &&
 sudo add-apt-repository --yes --update ppa:ansible/ansible &&
 sudo apt install -y ansible &&
 # Add Docker's official GPG key:
sudo apt-get update &&
sudo apt-get install ca-certificates curl &&
sudo install -m 0755 -d /etc/apt/keyrings &&
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc &&
sudo chmod a+r /etc/apt/keyrings/docker.asc &&
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null &&
sudo apt-get update &&
sudo apt-get install docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin &&
 sudo docker run -dit --name jenkins-server -v /var/run/docker.sock:/var/run/docker.sock -p 8080:8080 -v jenkins_home:/var/jenkins_home jenkins/jenkins:lts
 


run the following code when on the slave machine:

  
 sudo apt update &&
 sudo apt install -y software-properties-common &&
 sudo add-apt-repository --yes --update ppa:ansible/ansible &&
 sudo apt install -y ansible &&
 git clone https://github.com/mahamdkhairy/depi_devops.git &&
 ansible-playbook /home/ubuntu/depi_devops/Ansible/playbook.yml


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
