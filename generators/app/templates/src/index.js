
import ReactDOM from 'react-dom';
import initReactFastclick from 'react-fastclick';
import moment from 'moment';
import 'moment/locale/zh-cn';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import registerServiceWorker from './static/core/local-storage/registerServiceWorker';
import './index.less';
import EnvironmentConfig from './static/common/config/environment-config';;
import DemoComponent from './static/components/DemoComponent';

moment.locale('zh-cn');

const contextPath = EnvironmentConfig.contextPath;

initReactFastclick();

function renderPage() {
  ReactDOM.render((
    <Router>
      <div>
        <div className="bo-main">
          <Route exact path={contextPath} component={DemoComponent}/>
          <Route path={contextPath+"demo"} component={DemoComponent}/>
        </div>
      </div>
    </Router>
  ), document.getElementById('root'));
}

registerServiceWorker();
