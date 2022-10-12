
import { Icon, IconOptions } from 'leaflet';
import { ReactNode } from 'react';

export const BASE_ICONS = "../../../static/assets/icons"

export interface IDataModel {
  id: string
  name: string
  icon: Icon
}

type Props = {
  children?: ReactNode
}

export abstract class DataModel implements IDataModel {
  id: string
  name: string
  icon: Icon

  abstract view: (model: any) => JSX.Element;

  constructor(
    id: string,
    name: string,
    icon: string
  ) {
    this.id = id;
    this.name = name;
    this.icon = new Icon({
      iconUrl: `${BASE_ICONS}/${icon}`,
      iconSize: [25, 25]
    });
  }

  marker(): JSX.Element {
    return this.view(this)
  }

}