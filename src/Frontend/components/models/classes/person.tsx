import { DataModel } from '../dataModel';

export class Person extends DataModel {
    
    static iconUrl = "beach.svg"
    
    constructor(
        arg: any
    ) {
        super({id: arg.id, name: arg.name.value, icon: Person.iconUrl, coordinates: [arg.location.value.coordinates]})
    }

    popup(coordinate: number[]): JSX.Element {
        return PersonPopup(this, coordinate)
    }
    
}

const PersonPopup = (person: Person, coordinate: number[]) => {
    return (
      <>
        <h1>Person!</h1>
      </>
    )
  }