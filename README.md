<p align="center">
  <a href="https://eventials.com">
    <img alt="Eventials" src="https://s3.amazonaws.com/dev-assets.eventials.com/whitelabel-dev/logo.jpg" width="60" />
  </a>
</p>
<h1 align="center">
  Eventials Whitelabel
</h1>
<h3 align="center">
  We using React JS ⚛️ 
</h3>
<h3 align="center">
  Fast is better
</h3>
<p align="center">
  Eventials Whiteabel is a open souce project, so you can edit with yours customizations (Users Eventials).
</p>


## 🚀 Get Up and Running in 10 Minutes


You can running a new Eventials Whitelabel in your local dev environment in 5 minutes with these four steps:


1. Make a clone of project
   
2. Install dependencies
 ```shell
   yarn
   ```

3. Get your credentials in [https://www.eventials.com/oauth-clients/](https://www.eventials.com/oauth-clients/ "https://www.eventials.com/oauth-clients/")

 a) Create a credentials
[![step1](https://s3.amazonaws.com/dev-assets.eventials.com/whitelabel-dev/1+-+create-credentials.jpg "step1")](https://s3.amazonaws.com/dev-assets.eventials.com/whitelabel-dev/1+-+create-credentials.jpg "step1")

 b) Add a project name
[![Add a project name](https://s3.amazonaws.com/dev-assets.eventials.com/whitelabel-dev/2+-+added-project-name.jpg "Add a project name")](http://https://s3.amazonaws.com/dev-assets.eventials.com/whitelabel-dev/2+-+added-project-name.jpg "Add a project name")

 c) Copy your credentials
 [![Copy your credentials](https://s3.amazonaws.com/dev-assets.eventials.com/whitelabel-dev/3+-+copy-credentials.jpg "Copy your credentials")](https://s3.amazonaws.com/dev-assets.eventials.com/whitelabel-dev/3+-+copy-credentials.jpg "Copy your credentials")

4. We recommend that you read a documentation of our API, you can see in this link ==> [https://eventialsapi.docs.apiary.io/#](https://eventialsapi.docs.apiary.io/# "https://eventialsapi.docs.apiary.io/#")

5. Now you can create a file .**env** in root project  and added this informations:
 ```shell
   REACT_APP_API_URL=
   REACT_APP_CLIENT_ID=
   REACT_APP_CLIENT_SECRET=
   ```
6. To running the project

 ```shell
   yarn dev

   ```
   Done, your project is running.



## :art: Customizations

In project we have a file: **/src/configs/customizations.ts**

```javascript
export const configs = {
  // organization data
  name: 'ORGANIZATION_NAME',
  adress: 'ORGANIZATION_ADDRESS',
  phone: 'Tel.: (000) 0000-0000',
  site: 'https://www.example.com',

  // images
  logo: 'URL_LOGO_ORGANIZATION',
  descriptionImage:  'IMAGE_TO_DESCRIPTION',
  banner: [
    'URL_BANNER_1',
    'URL_BANNER_2',
	'URL_BANNER_3',
	'...'
  ],
  bannerContact: 'URL_BANNER_CONTACT',

  imageTitleContact: 'URL_IMAGE_TITLE_CONTACT',

  defaultImage: 'URL_DEFAULT_IMAGE_TO_WEBINARS',

  // social media
  youtube: 'https://www.youtube.com/channel/YOUR-CHANNEL',
  linkedIn: 'https://www.linkedin.com/company/YOUR-COMPANY/',
  facebook: 'https://www.facebook.com/YOUR-PROFILE/',
  instagram: 'https://www.instagram.com/YOUR-PROFILE/',
  allWebinars: 'https://www.eventials.com/YOUR-PROFILE/talks/',

  // feature flags
  contact: false,
  typeformContact: false,

  // colors customization
  primary: '#152e4d',
  second: '#ff4d1f',
  backgroundColor: '#f5f5f5',
  backgroundColorWhite: '#fff',
  textContact: '#43464a',
  textFooter: '#fff',
  titleGrupoWebinar: 'rgba(0, 0, 0, 0.8)',
  titleCard: '#343434',
  dateCard: '#535252',
};

```
	
## 🤝 How to Contribute

Anyone can contribuite in this project, you need:

1. Make a fork of project
2. Do your changes
3. Open a pull request and waiting


## :memo: License

Licensed under the [MIT License](./LICENSE).

## :heart:Thanks

Thanks to our many contributors ! :smiley:
