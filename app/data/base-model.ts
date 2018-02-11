export interface BaseModelInterface {

  [key: string]: any;

}

export abstract class BaseModel implements BaseModelInterface {

  protected _rawLoaded;

  protected constructor(rawData: Object) {
    this.setRawData(rawData);
  }

  public setRawData(rawData: Object) {
    this.preRawDataTransform(rawData);
    this._rawLoaded = rawData;
    for (let key in rawData) {
      let value = rawData[key];
      if (this.hasOwnProperty(key) && this[key] && !value) {
        continue;
      }
      this[key] = value;
    }
    this.transformDateValues();
    this.postRawDataTransform();
  }
  
  protected transformKey(key: string) {
    key = key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
    return key.charAt(0).toLowerCase() + key.slice(1);
  }

  public get rawLoadedData() {
    return this._rawLoaded;
  }

  protected preRawDataTransform(data: Object) {
  }

  protected postRawDataTransform() {

  }

  protected transformDateValues() {
  }

}

export interface FilteredModelList<Type> {
  [key: string]: Type[];
}
