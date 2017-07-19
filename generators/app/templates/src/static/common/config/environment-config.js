/**
 * Created by weileizhe on 17/7/10.
 */
const EnvironmentConfig = {
  contextPath: '/',
  // local: 通过npm start启动， 本地mock api,
  // dev: 通过本地nginx转发api，nginx配置文件见本项目根目录 nginx.conf， 其中cookie需要手动从其它地方copy过来
  // prod: 生产环境
  env: 'dev',
};

export default EnvironmentConfig