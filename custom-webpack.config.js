require('dotenv').config();
const { DefinePlugin, container: { ModuleFederationPlugin } } = require("webpack");

const env = {
  'FAREBASE_API_KEY': process.env.FAREBASE_API_KEY,
  'FAREBASE_AUTHDOMAIN': process.env.FAREBASE_AUTHDOMAIN,
  'FAREBASE_PROJECT_ID': process.env.FAREBASE_PROJECT_ID,
  'FAREBASE_STORAGE_BACKET': process.env.FAREBASE_STORAGE_BACKET,
  'FAREBASE_MESSAGING_SENDER_ID': process.env.FAREBASE_MESSAGING_SENDER_ID,
  'FAREBASE_APP_ID': process.env.FAREBASE_APP_ID

}

module.exports = {
  plugins: [
    new DefinePlugin({
      'process.env': JSON.stringify(env)
    }),
    new ModuleFederationPlugin({
      remotes: {
        RRForms: 'RRforms@http://localhost:3000/export-RRforms.js'
      }
    }),
  ]
}
