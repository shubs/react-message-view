import { BaseStore } from "fluxible/addons";

/*
This is a "resource store", holding the photo objects loaded by the app.
Photo objects can come either loading a single photo (`LOAD_PHOTO_SUCCESS`)
or after loading featured photos (`LOAD_FEATURED_PHOTOS_SUCCESS`).
*/

class TestStore extends BaseStore {

  static storeName = "TestStore"

  static handlers = {
    ['TOTO_START']: "handleTotoStartSuccess",
    ['TOTO_DONE']: "handleTotoDoneSuccess",
  }

  constructor(dispatcher) {
    super(dispatcher);
    this.datas = null;
  }

  handleTotoStartSuccess() {
  	this.datas = 'start'

    this.emitChange();
  }

  handleTotoDoneSuccess(datas) {
  	this.datas = datas

    this.emitChange();
  }

  getDatas() {
  	return this.datas
  }

  dehydrate() {
    return {
      datas: this.datas
    };
  }

  rehydrate(state) {
    this.datas = state.datas;
  }

}


export default TestStore;
