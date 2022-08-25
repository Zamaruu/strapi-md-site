# Strapi Headless CMS for a personal blog and other stuff 


The live admin environment can be found [here](https://strapi.maximilian-ditz.de/admin). 
A sample api call would be: **https://strapi.maximilian-ditz.de/api/blogs**.
As of now (25.08.2022), an API Key is needed to fetch Data from the endpoints.

If any changes are to be made to the admin panel or the api itself, develop and test the changes locally and when ready deploy to the live environment.

## Deployment Info

Connect to VPS via SSH
- User: strapi-controller
- PW: aBN1fzEutA


Make shure that the ufw firewall settings are correct and the strapi port is open:

```sh
sudo apt install ufw -y
sudo ufw allow 1337
sudo ufw allow 3307
sudo ufw allow 'Nginx Full'
sudo ufw enable 
sudo ufw status
```

Now make shure that the mysql 5.7 container is running:

```sh
sudo docker ps -a
sudo docker start legacy_mysql
```

If the Firewall is not allowing traffic to the docker container, validate the **/etc/default/docker** file:
If it is not there, add the following line to the mentioned file and restart docker.

```sh
DOCKER_OPTS="--iptables=false"
sudo systemctl restart docker
```

To start or stop the strapi application the server utilizes [pm2](https://pm2.keymetrics.io/docs/usage/process-management/). To launch or stop strapi use one of the following commands.

```sh
pm2 status

pm2 start strapi-md-site
pm2 stop strapi-md-site
```


---

### Pull changes from github

Go to folder **~/strapi-md-site**.
Into this folder you will want to pull your approved changes. But befor you merge dont forget to stop the pm2 process, and start it again after the merge. Pull with following command: 

```sh
git pull
```

---

This [guide](https://www.ravsam.in/blog/deploy-strapi-on-vps-with-ubuntu-mysql/) was used to first install strapi alongside containered mysql on VPS#

<br>

# 🚀 Getting started with Strapi

Strapi comes with a full featured [Command Line Interface](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html) (CLI) which lets you scaffold and manage your project in seconds.

### `develop`

Start your Strapi application with autoReload enabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-develop)

```
npm run develop
# or
yarn develop
```

### `start`

Start your Strapi application with autoReload disabled. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-start)

```
npm run start
# or
yarn start
```

### `build`

Build your admin panel. [Learn more](https://docs.strapi.io/developer-docs/latest/developer-resources/cli/CLI.html#strapi-build)

```
npm run build
# or
yarn build
```

## ⚙️ Deployment

Strapi gives you many possible deployment options for your project. Find the one that suits you on the [deployment section of the documentation](https://docs.strapi.io/developer-docs/latest/setup-deployment-guides/deployment.html).

## 📚 Learn more

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Strapi tutorials](https://strapi.io/tutorials) - List of tutorials made by the core team and the community.
- [Strapi blog](https://docs.strapi.io) - Official Strapi blog containing articles made by the Strapi team and the community.
- [Changelog](https://strapi.io/changelog) - Find out about the Strapi product updates, new features and general improvements.

Feel free to check out the [Strapi GitHub repository](https://github.com/strapi/strapi). Your feedback and contributions are welcome!

## ✨ Community

- [Discord](https://discord.strapi.io) - Come chat with the Strapi community including the core team.
- [Forum](https://forum.strapi.io/) - Place to discuss, ask questions and find answers, show your Strapi project and get feedback or just talk with other Community members.
- [Awesome Strapi](https://github.com/strapi/awesome-strapi) - A curated list of awesome things related to Strapi.

---

<sub>🤫 Psst! [Strapi is hiring](https://strapi.io/careers).</sub>

---

