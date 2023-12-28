import { development, live } from '../assets/data/config';

export const environment = {
  production: true,
  defaultLoadingImage: live.defaultLoadingImage,
  errorImage: live.errorImage,
  apiServer: "https://api.burmaconsultancygroup.com/",
  linkUrl: "https://api.burmaconsultancygroup.com/uploads/",
  defaultLanguage: live.defaultLanguage,
  adminLinkUrl: live.adminLinkUrl
};


// export const environment = {
//   production: true,
//   apiServer: development.apiServer,
//   defaultLoadingImage: development.defaultLoadingImage,
//   errorImage: development.errorImage,
//   linkUrl: development.linkUrl,
//   defaultLanguage: development.defaultLanguage,
//   adminLinkUrl: development.adminLinkUrl
// };
