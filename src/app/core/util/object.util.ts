export class ObjectUtil {
  static copy(object: any): any {
    return Object.assign({}, object);
  }

  static copyState(source: any, object: any): any {
    return Object.assign({}, source, object);
  }

  static listProperties(source: any): string[] {
    const list = Object.getOwnPropertyNames(source);
    return list;
  }
}
