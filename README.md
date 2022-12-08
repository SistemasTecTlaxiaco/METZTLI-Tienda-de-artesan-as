# Smart Contract Metztli :briefcase:
# INTRODUCCIÓN 
A medida que las criptomonedas y la tecnología blockchain se hicieron más populares, Bitcoin, Ethereum y otras redes empezaron a enfrentar desafíos de escalabilidad debido a una mayor demanda. El creciente interés por las aplicaciones descentralizadas y los tokens no fungibles (NFT) hace que dichos desafíos sean particularmente notorios en la blockchain Ethereum. La red a menudo sufre elevados precios del gas y costos de transacción debido al gran tráfico, lo que puede resultar desalentador para muchos usuarios y desarrolladores. 
A pesar de que hay varios equipos que exploran distintas soluciones de escalabilidad para redes blockchain, el equipo de NEAR Protocol (NEAR) está centrado en solventar las limitaciones a través del sharding.


# Bienvenido a METZTLI :classical_building:
---
METZTLI es un smart contract el cual tiene como principal objetivo hacer uso de la WEB 3.0 y apoyar al comercio local de una forma inovadora:
* Realizar Compras..
* Agregar productos.
* Eliminar un producto en especifico.
* Conviertete en un vendedor.

## Cómo utilizar este contrato ?
---
### Pré-requisitos :hammer:
1. Debe tener [Nodejs](https://nodejs.org/en/) instalado en su versión 12.0 o mayor.
2. Debe tener instalado [Yarn](https://yarnpkg.com/). Para saber si lo tiene, ejecute el comando ```yarn --version ```. En caso de no tenerlo, puede instalarlo ejecutando el comando ```sudo npm install -g yarn```
3. Instale las dependencias de yarn ejecutando ```yarn install```
4. Debe tener una cuenta en la [testnet de NEAR](https://wallet.testnet.near.org/)
5. Debe tener [NEAR-CLI](https://github.com/near/near-cli) instalado globalmente en su ordenador. Para saber si ya lo tiene instalado, ejecute ```near --version```. En caso de no tenerlo, instálelo ejecutando el comando ```sudo npm install -g near-cli``` 

Ya tenemos todo lo que necesitamos para probar nuestro contrato inteligente. Ahora vamos a ejecutarlo.

## Instalación :open_file_folder:
---
1. Clone el repositorio ```git clone https://github.com/Near-University-Tec-de-Tlaxiaco/METZTLI``` 
2. Vamos a iniciar sesión en nuestra wallet que creamos anteriormente: ```near login```
3. Dentro del repositorio, instalemos las dependencias del proyecto ejecutando ```npm install```, tranquilo, esto puede tomar unos segundos.
4. Si quieres desplegar el contrato y probar sus funciones, puedes hacerlo con ```yarn deploy:dev``` esto le devolverá un conjunto de caracteres que empezarán por "dev-" seguido por numeros generados por la red. Guárdelo, lo necesitará si quiere probar los métodos del contrato inteligente.
5. Por último, si queremos ejecutar los tests desarrollados, podemos hacerlo ejecutando ```yarn test```
   
## Despliegue del contrato 🧰   
---
* Clone el repositorio con ```git clone https://github.com/Near-University-Tec-de-Tlaxiaco/METZTLI ```
* Inicie sesión con su wallet de tesnet utilizando ``near login``.
* Ejecute el comando ``yarn asb`` para compilar el contrato.
* Para desplegar el contrato utilize la siguiente sintaxis ``near deploy --accountId (Cuenta de Testnet) --wasnFile build/release/METZTLI.wasm``.
* Con el código ``near call`` llamamos al método que deseamos ejecutar, a continuación se muestra un ejemplo llamando al método que permite ingresar un nuevo producto: ``near call ejemplo.testnet setProduct '{"name":"Sombrero","description":"Sombrero artesanal","price":50}' --accountId ejemplo.testnet``.

## Author's 🧑‍🤝‍🧑

- [Luis Carlos Rendon Aparicio(CxrlosMX)](https://github.com/cxrlosmx) 💻
-  [Arturo Angon Jose(ArturoAngonJosé)](https://github.com/ArturoAngonJose)
-  [Nayeli Anai Gonzalez Lopez (Nayee123)](https://github.com/Nayee123)
-  [Fernando Miguel Lopez (Ferch0419)](https://github.com/Ferch0419)


## Contact with the Developer(CxrlosMX)

<a target="_blank" rel="vsc" href="https://www.linkedin.com/in/luis-carlos-rendon-8945a0221/">
<img alt="likedin-logo" src="https://github.com/devicons/devicon/blob/master/icons/linkedin/linkedin-original.svg" style="max-width: 100%;"
     width="60" height="60" align="middle">
</a>
<a target="_blank" rel="vsc" href="https://www.facebook.com/luisc.rendon.3">
<img alt="facebook-logo" src="https://github.com/devicons/devicon/blob/master/icons/facebook/facebook-original.svg" style="max-width: 100%;"
     width="60" height="60" align="middle">
</a>


