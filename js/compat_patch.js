
// compat_patch.js
// Redirige cualquier escucha del evento inexistente 'schemaChange' al evento válido de A‑Frame 'componentchanged'.
(function(){
  const _add = EventTarget.prototype.addEventListener;
  EventTarget.prototype.addEventListener = function(type, listener, options){
    try{
      if (typeof type === 'string' && type.toLowerCase() === 'schemachange') {
        type = 'componentchanged';
      }
    }catch(e){}
    return _add.call(this, type, listener, options);
  };
})();
