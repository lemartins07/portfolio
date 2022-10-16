import Prismic from "./prismic.js";

const prismic = new Prismic();

export default class Home {
  constructor() {
    this.title = document.querySelector('.home .content h3');
    this.subtitle = document.querySelector('.home .content span');;
    this.description = document.querySelector('.home .content p');;
    this.image = document.querySelector('.home .image img');;
  }



  async init() {
    const result = await prismic.getHome();
    console.log('result: ', result);
    
    this.title.innerHTML = result.title;
    this.subtitle.innerHTML = result.subtitle;
    this.description.innerHTML = result.description;
    this.image.setAttribute('src', result.image);
  }
}