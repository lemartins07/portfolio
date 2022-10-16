import * as prismic from '@prismicio/client';
import * as prismicH from '@prismicio/helpers';

export default class Prismic {
  constructor(){
    this.repoName = 'lemartins07-portfolio';
    this.endpoint = prismic.getEndpoint(this.repoName);
    this.accessToken = 'MC5ZMHhkN3hFQUFDUUF4V1Uw.RwAh77-9KiHvv73vv73vv70q77-977-977-977-977-977-977-9FO-_ve-_vTLvv73vv73vv73vv70L77-977-9GClyRQ';
    this.client = '';

    this.routes = [
      { type: 'home', path: '/' },
      { type: 'portfolio', path: '/:uid' }
    ];

    this.initClient();
  }

  async getHome() {
    const resultData = await this.client.getSingle('home');

    const { title, subtitle, description, image } = resultData.data;

    //console.log( resultData, { title, subtitle, description, image });
    return { 
      title: title[0].text, 
      subtitle: subtitle[0].text, 
      description: description[0].text,
      image: image.url
    };
  }

  initClient() {
    const routes = this.routes;
    const accessToken = this.accessToken;

    this.client = prismic.createClient(this.endpoint, { routes, accessToken });
  }
}

  
      
   

    // const init = async () => {
    //   //const prismicDoc = await client.getFirst()
    //   //const { title, description } = prismicDoc.data
    //   const results = await client.getAllByType('portfolio');
    //   console.log(results)
    // }

    // init()