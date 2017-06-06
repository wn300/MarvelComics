export class Item_Comic{
  id:string;
  title:string;
  description:string;
  prices:Array<Price>;
  thumbnail:Thumbnail;
}

class Price{
  type:string;
  price:string;
}

class Thumbnail{
  path:string;
  extension:string;
}

class Thumbnail_model{
  path:string;
  extension:string;
}

