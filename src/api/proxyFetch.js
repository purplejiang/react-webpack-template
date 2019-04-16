import { message } from 'antd';
import { isEmpty } from 'lodash';

//请求超时时间
const REQUEST_TIME_OUT = 10 * 1000;
//loading延迟设置时间
const LOADING_TIME_OUT = 1000;

const prefix = 'http://localhost:8081/api';

class ProxyFetch {
  constructor() {
    this.fetchInstance = null;
    this.headers = { 'Content-type': 'application/json' };
    this.init = { credentials: 'include', mode: 'cors' };
    //处理loading
    this.requestCount = 0;
    this.isLoading = false;
    this.loadingTimer = null;
  }
  /**
   * 请求1s内没有响应显示loading
   */
  showLoading() {
    if (this.requestCount === 0) {
      this.loadingTimer = setTimeout(() => {
        message.loading('加载中...', 0);
        this.isLoading = true;
        this.loadingTimer = null;
      }, LOADING_TIME_OUT);
    }
    this.requestCount++;
  }

  hideLoading() {
    this.requestCount--;
    if (this.requestCount === 0) {
      if (this.loadingTimer) {
        clearTimeout(this.loadingTimer);
        this.loadingTimer = null;
      }
      if (this.isLoading) {
        this.isLoading = false;
        message.destroy();
      }
    }
  }
  /**
   * 获取proxyFetch单例对象
   */
  static getInstance() {
    if (!this.fetchInstance) {
      this.fetchInstance = new ProxyFetch();
    }
    return this.fetchInstance;
  }

  /**
   * get请求
   * @param {String} url
   * @param {Object} params
   * @param {Object} settings: { noLoading }
   */
  async get(url, params = {}, settings = {}) {
    const options = { method: 'GET' };

    if (!isEmpty(params)) {
      let paramsArray = [];
      Object.keys(params).forEach(key => {
        if (params[key] instanceof Array) {
          const value = params[key].map(item => '"' + item + '"');
          paramsArray.push(key + '=[' + value.join(',') + ']');
        } else {
          console.warn(key + '=', params[key]);
          paramsArray.push(key + '=' + params[key]);
        }
      });
      if (url.search(/\?/) === -1) {
        url += '?' + paramsArray.join('&');
      } else {
        url += '&' + paramsArray.join('&');
      }
    }
    return await this.dofetch(url, options, settings);
  }

  /**
   * post请求
   * @param {String} url
   * @param {Object} params
   * @param {Object} settings: { noLoading }
   */
  async post(url, params = {}, settings = {}) {
    const options = { method: 'POST' };
    options.body = JSON.stringify(params);
    return await this.dofetch(url, options, settings);
  }

  /**
   * put请求
   * @param {String} url
   * @param {Object} params
   * @param {Object} settings: { isServer, noLoading, cookies }
   */
  async put(url, params = {}, settings = {}) {
    const options = { method: 'PUT' };
    options.body = JSON.stringify(params);
    return await this.dofetch(url, options, settings);
  }

  /**
   * delete请求
   * @param {String} url
   * @param {Object} params
   * @param {Object} settings: {  noLoading }
   */
  async delete(url, params = {}, settings = {}) {
    const options = { method: 'DELETE' };
    options.body = JSON.stringify(params);
    return await this.dofetch(url, options, settings);
  }

  /**
   * fetch主函数
   * @param {*} url
   * @param {*} options
   * @param {Object} settings: { noLoading }
   */
  dofetch(url, options, settings) {
    const { noLoading } = settings;
    if (!noLoading) {
      this.showLoading();
    }
    return Promise.race([
      fetch(prefix + url, { ...options, headers: this.headers, ...this.init }),
      new Promise((resolve, reject) => {
        setTimeout(() => {
          reject(new Error('请求超时，请稍后再试'));
        }, REQUEST_TIME_OUT);
      })
    ])
      .then(response => {
        !noLoading && this.hideLoading();
        if (response.status === 500) {
          throw new Error('服务器内部错误');
        } else if (response.status === 404) {
          throw new Error('未找到' + url);
        } else if (response.status === 401) {
          throw new Error('未登录');
        } else if (response.status === 400) {
          throw new Error('请求参数错误');
        } else if (response.status === 204) {
          return { success: true };
        } else {
          return response && response.json();
        }
      })
      .catch(e => {
        console.error(JSON.stringify(e), e.message);
        if (!noLoading) {
          this.hideLoading();
          message.error(e.message);
        }
        return { success: false, errmessage: e.message };
      });
  }
}

export default ProxyFetch.getInstance();
