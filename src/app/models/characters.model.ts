//model of characters home
export class ObjectCharacters {
  id: number
  name: string
  description: string
  thumbnail: Thumbnail
  comics: Comics
  constructor(id: number, name: string, description: string, path: string, extension: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.thumbnail = new Thumbnail(path, extension);
  }
}

class Thumbnail {
  path: string
  extension: string
  constructor(path: string, extension: string) {
    this.path = path;
    this.extension = extension;
  }
}

class Comics{
    items: Array<Items>
}

class Items{
  resourceURI: string
  name: string
}


//model of details PopUp