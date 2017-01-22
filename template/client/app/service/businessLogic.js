class BusinessLogicService {
  constructor(Api, $q) {
    "ngInject";
    this.$q = $q;
    this.Api = Api;
  }

  /**
   * 数据
   */
  get(params) {
    return this.Api.get('/api/get', params);
  }
}

export default BusinessLogicService
