import { Animal } from './Animal';

export class WhoAmI {

  get():string | null {

    const animal = new Animal();
    return animal.specie;
  }

}

