# export_data_node_excel

## -------------------Node js-------------------
## Node js : ce n'est pas un framework web
->Permet de exécuter du javaScript du coter serveur et permet de faire différent action

Librarie v8 : intépréter le javascript

	inconvenient
-Bas niveau : il faudra créer le serveur web au niveau de notre code
        Avantage
-on peut faire des action simultanément
-Une seule langage pour fonctionner sur tout système
-Mutli-platforme
## -------------30/10/20------------------
## 1-Tuto Node js with Mysql :
 -> https://www.youtube.com/watch?v=VavWEtI5T7c&list=PLD9SRxG6ST3GBsczn8OUKLaErhrvOz9zQ&index=1
## 2-Tut Node js with mongo
 ->https://www.youtube.com/watch?v=XFpV8b5937M&list=PLSpJkDDmpFZ7GowbJE-mvX09zY9zfYatI&index=4

## ---------Etape 1 (Tuto 1)-----------
*pwd pour regarder le path dans visual code
	
 ##  1- Création du projet
-> npm init -y

  ## 2-Installation du express mysql
-> npm i express mysql dotenv hbs

 ##  3-Installation du nodemon
-> npm i --save nodemon

Rmq : nodemon nous permet de lancer le serveur permanent

  ## 4-lancer application
->npm start

	Installation du cors
->Rmq : Pour avoir l'access à tous foncions qui l'appelle
	npm install cors
->https://expressjs.com/en/resources/middleware/cors.html

## ----------02/11/2020-------

## Installation bcryptjs
->npm i bcryptjs

	Installation cookie-parse jsonwebtoken
->npm i cookie-parser jsonwebtoken

## Problème : bycrpt.compare
## Solution: https://stackoverflow.com/questions/34982964/bcrypt-error-illegal-arguments-string-unidentified/45507725

## -------------13/11/20--------------
##	PM2
## Doc 1 : https://sodocumentation.net/fr/node-js/topic/2975/deploiement-d-applications-node-js-en-production
## Doc 2 : https://oncletom.io/node.js/chapter-06/

## pm2 deploy production
-Installation globale : npm install -g pm2
-Lancement du projet : pm2 start
------------deployement (pour etablir une connection avec le serveur) :--------------------------
  -> pm2 deploy production setup
  -> pm2 deploy production   (deployement du projet)

## -----------16/11/20-----------------
Vidéo  : Comment déployer NodeJS avec PM2 
lien :  https://www.youtube.com/watch?v=cXaPkD9qCTU

Chemin vers back dans le serveur
->ftp://app%2540kenza.re@185.22.109.100/back_node

Lancement de notre serveur : npm start app.js
Restarte le serveur : pm2 restart app.js
	
Problème de deployement
-> : ssh: connect to host 185.22.109.100 port 22: Connection timed out

	Création d'un clés ssh
-ssh-key -t rsa
->user :  yowan
->key : 123456789
	Installation de openSSH
Lien pour telecharger OpenSSH
https://github.com/PowerShell/Win32-OpenSSH/releases

Problème :  CategoryInfo : Erreur de sécurité : (:) [], PSSecurityException
Solution: set-executionpolicy unrestricted
lien: https://www.windows8facile.fr/powershell-execution-de-scripts-est-desactivee-activer/


commande :Windows --> CMD --> tracert -h 30 -w 60 -4 IPaddressOFTarget

Problème 2: si je change en 21 le port et il sort une noouvelle bug
->ssh_exchange_identification: Connection closed by remote host


			Installation du commande sudo sous windows
Ce programme s’appelle « Sudo for Windows ».Pour l’installer ouvrez PowerShell et exécutez les 3 commandes suivantes :
-iex (new-object net.webclient).downloadstring(‘https://get.scoop.sh’)
-set-executionpolicy unrestricted -s cu -f
-scoop install sudo


Problème du branche master : fatal: no upstream configured for branch 'master'
->git push -u origin head 

Clé ssh public ???

## ------------23/10/20------------
	Création du back apk du kenza
connection avec server : lien -> https://www.youtube.com/watch?v=iad_oNhRgaI&list=PLatXnLy-YGQexU9sktggQbw7tq815yGbR&index=20

## ------------24/10/20------------
		Modification produit
->Requette update : il faut le placer dans l'ordre le requette "body , id"
o 

## -------------14/12/2020-------------
Installation du ecosystème : pm2 ecosystem
Rmq : "pm2 ls" pour voire si le serveur marche
Commande de deployement :
Etape 1:  
Rmq: pour configurer le lien entre le projet et serveur
Etape 2: pm2 deploye production


Cette commande créera les dossiers sur votre serveur distant.
->pm2 deploy ecosystem.json production setup   (etapblier connexion au serveur)
 
->pm2 deploye production   (deployement prod)

pwd : pour voir le path dans le cmd

stop server pm2 : pm2 stop app.js

## ------------15/12/2020---------
  1- Création du projet
-> npm init -y
  2-Installation du express mysql
-> npm i express mysql dotenv hbs
  3-Installation du nodemon
-> npm i --save nodemon
  4-Installation cors
->npm install cors
  5-Installation bcryptjs
->npm i bcryptjs
  6-Installation cookie-parse jsonwebtoken
->npm i cookie-parser jsonwebtoken
  7-Installation multer
->npm install --save multer
  8-Installation du pm2
->npm install -g pm2
  9-Création du ficher ecosystème
->pm2 ecosystem

->Dossier back_node

## ----------------------------22/12/2020---------------------
Installation pm2 with linux
->sudo npm install pm2 -g

Rmq : lorsqu'on deploye le code par exportation de zip
-> on ne met pas le node module avec 
-> c'est dans le commande serveur (cmd) qu'on lence le commande "npm install"

Installation zip avec linux
->sudo apt install unzip

->unzip backup.zip


## -------------------------PHPMyAdmin---------------------------------
Pour regarder le port : SHOW VARIABLES WHERE variables_name = 'port';
->Port par defaut du mysql 3306


## --------------04/01/20-----------------
Erreur de pm2 dans le serveur
Problème
->-bash: fork: Resource temporarily unavailable
Solution:
piste_1 : Augmenter le temps de limit d'exécution du script

## //--------------09/04/2021/-----------------
Installation md5 with node js
npm install md5

 

## ##---------------Installation de Axios pour node js--------------
## Installation de axios pour node js
## ->npm install axios

https://kenza.re/advcard/api.php?code=
 {   headers: {    'Authorization': 'Basic '+btoa('kenza:Kenza.re2020')  } }


## //-----------Export data to excel -----------------
## 1- npm init
## 2- npm i --save xlsx