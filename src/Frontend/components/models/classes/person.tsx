import { DataModel } from '../dataModel';

export class Person extends DataModel {
    
    constructor(
        id: string,
        name: string,
        coordinates: number[],
        icon: string = "person.svg",
    ) {
        super(id, name, icon, [coordinates])
    }

    popup(coordinate: number[]): JSX.Element {
        return PersonPopup(this, coordinate)
    }
    
}

const PersonPopup = (model: DataModel, coordinate: number[]) => {
    return (
      <>
        <h1>Person!</h1>
      </>
    )
  }