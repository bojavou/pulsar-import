module.exports.activate = async function () {
  const { value } = await import ('./module.mjs')
}
