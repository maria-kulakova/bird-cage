import {observable, action, computed} from 'mobx';

class BirdStore {
  @observable birds = [];

  // modify data
  @action addBird = (bird) => {
    this.birds.push(bird);
  }

  // do calculation using data
  @computed get birdCount() {
    return this.birds.length;
  }
}

const store = new BirdStore();
export default store;
