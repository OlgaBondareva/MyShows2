module.exports.swipe = function (startX, startY, endX, endY, duration) {
  const actions = []
  actions.push({action: 'press', x: startX, y: startY})
  actions.push({action: 'wait', ms: duration})
  actions.push({action: 'moveTo', x: endX, y: endY})
  actions.push('release')
  return actions
}