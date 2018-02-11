import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage';
import { Platform } from 'ionic-angular';

/**
 * An isotropic storgae library built on top of local storage and 
 * Native Storage plugin for Ionic application. 
 * Author: @sshivamsngh
 */

@Injectable()
export class StorageProvider {

  mobile: boolean = false;
  constructor(private nativeStorage: NativeStorage, private plt: Platform) {
    console.log('Hello StorageProvider Provider');
    const platDetail = this.plt.platforms();
    console.log("platforms:", platDetail);
    platDetail.forEach(x => {
      if (x === 'mobile')
        this.mobile = true;
    });
  }

  /**
   * Set item in local storage 
   * @param key 
   * @param value 
   */
  public setItem(key: string, value: any): Promise<any> {
    console.log("mobile plt", this.mobile);
    if (this.mobile) {
      return this.nativeStorage.setItem(key, value);
    }
    else {
      try {
        const res = localStorage.setItem(key, JSON.stringify(value));
        return Promise.resolve('success');
      }
      catch (ex) {
        return Promise.reject(ex);
      }

    }
  }

  /**
   * Get item from local storage
   * @param key 
   */
  public getItem(key: string) {
    console.log("mobile plt", this.mobile);
    if (this.mobile) {
      return this.nativeStorage.getItem(key);
    }
    else {
      try {
        const res = JSON.parse(localStorage.getItem(key));
        return (res === null || res === undefined) ? Promise.reject('Not Found') : Promise.resolve(res);
      }
      catch (ex) {
        return Promise.reject(ex);
      }
    }
  }

  /**
   * Clear storage
   * @param key 
   */
  public clear(key: string) {
    console.log("mobile plt", this.mobile);
    if (this.mobile) {
      return this.nativeStorage.remove(key);
    }
    else {
      try {
        const res = localStorage.removeItem(key);
        return Promise.resolve('success');
      }
      catch (ex) {
        return Promise.reject(ex);
      }
    }
  }

  /**
   * Clear  all items from storage
   */
  public clearAll() {
    console.log("mobile plt", this.mobile);
    if (this.mobile) {
      return this.nativeStorage.clear();
    }
    else {
      try {
        const res = localStorage.clear();
        return Promise.resolve(res);
      }
      catch (ex) {
        return Promise.reject(ex);
      }
    }
  }
}
