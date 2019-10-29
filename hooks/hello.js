/**
 * Greet Hello with the Name Parameter
 * @param {*} ctx
 */

const Hello = (ctx) => {
  let { res, parameters } = ctx
  res.end(`Hello ${parameters.name}!`)
}

module.exports = Hello
