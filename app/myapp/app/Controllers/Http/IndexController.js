'use strict'

class IndexController {

  index({ inertia }) {
    let welcome = "Home!"
   return inertia.render('Index', { welcome }, { edgeVar: 'server-variable' })
  }

  about({ inertia }) {
    let welcome = "About!"
   return inertia.render('Index', { welcome }, { edgeVar: 'server-variable' })
  }




}

module.exports = IndexController
