class Item {
  constructor(position, rotation, scale) {
    this.position = position;
    this.rotation = rotation;
    this.scale = scale;
  }
}

class Camera extends Item {
  constructor(position, rotation, scale, lookAt, up) {
    super(position, rotation, scale);
    this.lookAt = lookAt;
    this.up = up;
  }

  transformAllObjects(matrix) {}
}

class RenderObject extends Item {
  constructor(position, rotation, scale) {
    super(position, rotation, scale);
  }

  intersect(ray) {
    return false;
  }

  transform(matrix) {}
}

class Light extends Item {
  constructor(position, rotation, scale, color, opacity) {
    super(position, rotation, scale, opacity);
    this.color = color;
    this.opacity = opacity;
  }
}

class Sphere extends RenderObject {
  constructor(position, rotation, scale) {
    super(position, rotation, scale);
  }

  intersect(ray) {
    return false;
  }

  transform(matrix) {}
}

class Plane extends RenderObject {
  constructor(position, rotation, scale) {
    super(position, rotation, scale);
  }

  intersect(ray) {
    return false;
  }

  transform(matrix) {}
}
