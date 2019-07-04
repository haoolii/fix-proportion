module.exports = function fixProportion() {
  var _p_width
  var _p_height
  var _el_width
  var _el_height
  
  const scale = (target, ref) => {
    const scales = []
    scales.push(ref.clientWidth / target.clientWidth)
    scales.push(ref.clientHeight / target.clientHeight)
    const s = Math.min(...scales)
    target.style.transform = `translateX(-50%) scale(${s}) translateZ(0)`
    target.style.transformOrigin = 'center top'
  }
  
  function update(el, elp, op) {
    scale(el, elp)
  }
  
  function init(el,elp, op){
    _p_width = elp.clientWidth
    _p_height = elp.clientHeight
  
    if( _p_width * op.hp >= _p_height * op.wp) {
      el.style.width = _p_height / op.hp * op.wp + 'px'
      el.style.height = _p_height + 'px'
    } else {
      el.style.width = _p_width + 'px'
      el.style.height = _p_width / op.wp * op.hp + 'px'
    }
    el.style.position = 'absolute'
    el.style.left = '50%'
    el.style.top = '0'
    el.style.transform = `translateX(-50%) translateZ(0)`
    elp.style.position = 'relative'
    _el_width = el.clientWidth
    _el_height = el.clientHeight
  
    window.addEventListener('resize', function () {
      update(el, elp, op)
    })
  }
  
  fixProportion = function (el, op) {
    op = op.split(':')
    init(el,el.parentElement, {
      wp: op[0],
      hp: op[1],
    })
  }

  return fixProportion
}()