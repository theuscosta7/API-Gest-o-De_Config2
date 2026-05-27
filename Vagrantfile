Vagrant.configure("2") do |config|
  
  config.vm.box = "ubuntu/jammy64"
  config.vm.boot_timeout = 600 

  # VM1
  config.vm.define "vm1" do |vm1|
    vm1.vm.hostname = "vm1-client"
    vm1.vm.network "private_network", ip: "192.168.56.10"


    vm1.vm.provider "virtualbox" do |vb|
      vb.memory = "1024"
      vb.name = "VM1-Client"
      vb.gui = true
    end

    vm1.vm.provision "shell", inline: <<-SHELL
      sudo apt update
      sudo apt install -y ansible git
    SHELL
  end

  # VM2
  config.vm.define "vm2" do |vm2|
    vm2.vm.hostname = "vm2-backend"
    vm2.vm.network "private_network", ip: "192.168.56.20"
    vm2.vm.synced_folder ".", "/home/vagrant/vagrant_data"
    vm2.vm.provider "virtualbox" do |vb|
      vb.memory = "2048"
      vb.name = "VM2-Backend"
      vb.gui = true
    end

    vm2.vm.provision "shell", inline: <<-SHELL
      echo "Instalando Node.js v20..."
      curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
      sudo apt-get install -y nodejs
      
      echo "Preparando pastas para evitar erro de Symlink do Windows..."
      mkdir -p /home/vagrant/node_modules_vm2
      mkdir -p /home/vagrant/vagrant_data/node_modules
      sudo mount --bind /home/vagrant/node_modules_vm2 /home/vagrant/vagrant_data/node_modules
      
      echo "Instalando dependências do projeto..."
      cd /home/vagrant/vagrant_data
      npm install
    SHELL
  end
end