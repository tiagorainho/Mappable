# Mappable


## Setup environment

To start the project it is required to:

Start the docker environment
`` docker-compose up -d --build``

## Setup Backend

### Setup backend Envionment
Create the conda environment if it is not already
``conda env create -f env.yml``

Initialize the conda environment
``conda activate mappable``

### Create objects

Go to the source of the Backend
``cd Backend/src``

Create the objects to appear in the map
``python3 scripts/datagenerator.py``

If it is required to show moving vehicles it is also available a scripts:
- ``python3 scripts/mobilitygenerator.py``

### Start Backend

Start the backend
`` python3 app.py``

### Start Frontend

Then start the Frontend application
``cd Frontend``
``npm run dev``

---

## Demo

https://user-images.githubusercontent.com/49039023/196045622-92887863-5bbf-4064-9122-a3503f9a8c25.mp4


Enjoy :)
