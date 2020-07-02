import CMS from 'netlify-cms-app'
// import 'netlify-cms-app/dist/cms.css'
import Control from './Control.js'
import Preview from './Preview.js'

CMS.registerWidget('section-widget', Control, Preview)
