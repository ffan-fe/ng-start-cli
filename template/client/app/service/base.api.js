
class Api {
  constructor($http, $q, APIBASE) {
    "ngInject";
    this.base = APIBASE ? APIBASE : '';
    this.$q = $q;
    this.$http = $http;
  }

  get(url, params, isAlert, noBase) {
    let deferred = this.$q.defer();

    this.$http({
      url: (noBase ? '' : this.base) + url,
      method: 'get',
      params: params || {}
    }).then(function (raw) {
      let result = raw.data;
      if (result.status == 200) {
        deferred.resolve(result.data);
      } else {
        if (isAlert != 0) {
          alert(result.message);
        }
        deferred.reject(result);
      }
    }, function (raw) {
      deferred.reject(raw);
    });
    return deferred.promise;
  }


  post(url, params, isAlert) {
    let deferred = this.$q.defer();
    this.$http({
      url: this.base + url,
      data: $.param(params),
      method: "post",
      headers: { "Content-Type": "application/x-www-form-urlencoded" }
    }).then(function (raw) {
      let result = raw.data;

      if (result.status == 200) {
        deferred.resolve(result.data || result.message || "");
      } else {
        if (isAlert != 0) {
          alert(result.message);
        }
        deferred.reject(result);
      }
    }, function (raw) {
      if (raw.msg) {
        alert(raw.msg)
      }
      deferred.reject(raw);
    });
    return deferred.promise;
  }

}

export default Api
