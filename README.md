# Mappable

## Demo

https://user-images.githubusercontent.com/49039023/196045622-92887863-5bbf-4064-9122-a3503f9a8c25.mp4

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

## How to use

### Markers

In a new .tsx file create a class which extends DataModel.tsx, then implement the required functions:

```typescript
export class ExampleModel extends DataModel {
  important_number: number
  
  static iconUrl = "example_marker_icon.svg"
  static clusterIconUrl = "example_cluster_icon.svg"

  constructor(
        arg: any
    ) {
        super(
          {
            id: arg.id, 
            type:arg.type,
            icon: ExampleModel.iconUrl,
            cluster_icon: ExampleModel.clusterIconUrl,
            name: arg.name.value,
            coordinates: [arg.location.value.coordinates]
          }
        )

        this.important_number = arg.important_number
    }

  cluster(cluster: Cluster): JSX.Element {
    ...
  }

  cluster_popup(cluster: Cluster): JSX.Element {
    ...
  }

  marker(): JSX.Element {
    ...
  }

  popup(coordinate: number[]): JSX.Element {
    return ExampleModelPopup(this, coordinate)
  }

}

const ExampleModelPopup = (model: ExampleModel, coordinate: number[]) => {
  return (
    <>
      <h1>{model.id}</h1>
      <h4>{model.name}</h4>
      <hr/>
      <span>{model.important_number}</span>
    </>
  )
}
```


Enjoy :)
