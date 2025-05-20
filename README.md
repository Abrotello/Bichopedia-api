# 🐞 Bichopedia API

Una API educativa que permite consultar información sobre insectos y arácnidos, obtenida en tiempo real desde fuentes científicas como [iNaturalist](https://www.inaturalist.org/) e [IUCN Red List](https://www.iucnredlist.org/).

Construida con Express, TypeScript y Docker.

---

## 🚀 ¿Qué hace?

Bichopedia API devuelve un listado de organismos del reino animal (por ahora, insectos y arácnidos) con datos como:

- Nombre científico y común (cuando está disponible)
- Foto representativa con licencia
- Licencia de atribución de imagen
- ID único por especie
- *(En desarrollo: estado de conservación y amenazas según IUCN)*

---

## 🧰 Tecnologías usadas

- [x] Express
- [x] TypeScript
- [x] Docker + Docker Compose
- [x] API pública de iNaturalist
- [x] API pública de IUCN Red List

---

## 🐳 Clonación y ejecución con Docker

```bash
git clone https://github.com/Abrotello/Bichopedia-api.git
cd Bichopedia-api
docker compose up --build
```

---

## 🕷️ Ejemplo para Arachnida

```json
{
  "data": [
    {
      "name": {
        "scientificName": "Thelacantha brevispina",
        "commonName": "Asian Spinybacked Orbweaver"
      },
      "photo": "https://inaturalist-open-data.s3.amazonaws.com/photos/5453209/medium.jpg",
      "license": {
        "attribution": "(c) Chen-Pan Liao, some rights reserved (CC BY-SA)",
        "code": "cc-by-sa"
      },
      "id": 360593
    },
    {
      "name": {
        "scientificName": "Dermacentor variabilis",
        "commonName": "American Dog Tick"
      },
      "photo": "https://inaturalist-open-data.s3.amazonaws.com/photos/136253899/medium.jpg",
      "license": {
        "attribution": "(c) Karl Kroeker, some rights reserved (CC BY-NC), uploaded by Karl Kroeker",
        "code": "cc-by-nc"
      },
      "id": 52155
    },
    {
      "name": {
        "scientificName": "Nephilingis cruentata",
        "commonName": "African Hermit Spider"
      },
      "photo": "https://static.inaturalist.org/photos/3227112/medium.JPG",
      "license": {
        "attribution": "(c) Marco Rastelli, all rights reserved, uploaded by Marco Rastelli",
        "code": "No license code"
      },
      "id": 425206
    }
  ]
}
```

---

## 🪰 Ejemplo para Insecta

```json
{
  "data": [
    {
      "name": {
        "scientificName": "Lithacodes fasciola",
        "commonName": "Yellow-shouldered Slug Moth"
      },
      "photo": "https://inaturalist-open-data.s3.amazonaws.com/photos/29460468/medium.jpeg",
      "license": {
        "attribution": "(c) John Guerin, some rights reserved (CC BY-NC), uploaded by John Guerin",
        "code": "cc-by-nc"
      },
      "id": 201343
    },
    {
      "name": {
        "scientificName": "Danaus petilia",
        "commonName": "Lesser Wanderer"
      },
      "photo": "https://inaturalist-open-data.s3.amazonaws.com/photos/23166410/medium.jpeg",
      "license": {
        "attribution": "(c) Reiner Richter, some rights reserved (CC BY-NC-SA), uploaded by Reiner Richter",
        "code": "cc-by-nc-sa"
      },
      "id": 333775
    },
    {
      "name": {
        "scientificName": "Pararge aegeria",
        "commonName": "Speckled Wood"
      },
      "photo": "https://inaturalist-open-data.s3.amazonaws.com/photos/102255693/medium.jpg",
      "license": {
        "attribution": "(c) Felipe Hidalgo, some rights reserved (CC BY-NC), uploaded by Felipe Hidalgo",
        "code": "cc-by-nc"
      },
      "id": 52592
    }
  ]
}
```

---

## 📜 Créditos y licencias

Imágenes provistas por usuarios de iNaturalist.org
Licencias de uso incluidas en cada resultado
Esta API es de uso educativo y sin fines de lucro

---

## 📫 Contacto

Desarrollado por Adrián
Proyecto personal educativo · 🇲🇽 México